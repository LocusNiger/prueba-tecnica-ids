import { useEffect, useRef, useState } from "react";

const ChartComponent = () => {
  const canvasRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    data: null,
  });

  // Datos actualizados según lo solicitado
  const data = [
    {
      value: 50,
      lineValue: 50,
      month: "Jan",
      price: "0,4175",
      numSale: 2,
      date: "Jan 16 at 7:00 AM",
    },
    {
      value: 175,
      lineValue: 175,
      month: "Feb",
      price: "0,5230",
      numSale: 3,
      date: "Feb 22 at 3:15 PM",
    },
    {
      value: 100,
      lineValue: 100,
      month: "Mar",
      price: "0,3980",
      numSale: 1,
      date: "Mar 05 at 10:30 AM",
    },
    {
      value: 150,
      lineValue: 150,
      month: "Apr",
      price: "0,6120",
      numSale: 4,
      date: "Apr 16 at 7:00 AM",
    },
    {
      value: 50,
      lineValue: 50,
      month: "May",
      price: "0,4350",
      numSale: 2,
      date: "May 08 at 2:45 PM",
    },
    {
      value: 100,
      lineValue: 100,
      month: "Jun",
      price: "0,5780",
      numSale: 3,
      date: "Jun 19 at 9:20 AM",
    },
    {
      value: 50,
      lineValue: 50,
      month: "Jul",
      price: "0,4875",
      numSale: 2,
      date: "Jul 11 at 5:30 PM",
    },
  ];

  // Función para verificar si el cursor está sobre un punto
  const checkHover = (mouseX, mouseY) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (mouseX - rect.left) * scaleX;
    const y = (mouseY - rect.top) * scaleY;

    // Márgenes para los ejes (debe coincidir con los del useEffect)
    const margin = {
      top: 10,
      right: 10,
      bottom: 30,
      left: 40,
    };

    // Dimensiones del área de dibujo (debe coincidir con los del useEffect)
    const chartWidth = 497 - margin.left - margin.right;
    const chartHeight = 217 - margin.top - margin.bottom;

    // Configuración del gráfico (debe coincidir con los del useEffect)
    const barCount = data.length;
    const barWidth = (chartWidth / barCount) * 0.6;
    const barSpacing = (chartWidth / barCount) * 0.4;

    // Escala para el eje Y (debe coincidir con los del useEffect)
    const maxValue = 200;
    const yScale = chartHeight / maxValue;

    // Verificar si el cursor está sobre algún punto
    for (let i = 0; i < data.length; i++) {
      const pointX =
        margin.left +
        i * (barWidth + barSpacing) +
        barWidth / 2 +
        barSpacing / 2;
      const pointY = margin.top + chartHeight - data[i].lineValue * yScale;

      // Distancia entre el cursor y el punto
      const distance = Math.sqrt(
        Math.pow(x - pointX, 2) + Math.pow(y - pointY, 2)
      );

      // Si la distancia es menor que el radio del punto (4) + margen de tolerancia (4)
      if (distance < 8) {
        return {
          found: true,
          x: pointX / scaleX + rect.left,
          y: pointY / scaleY + rect.top,
          data: data[i],
        };
      }
    }

    return { found: false };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Configurar el canvas para alta resolución
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 497 * dpr;
    canvas.height = 217 * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = "497px";
    canvas.style.height = "217px";

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Márgenes para los ejes
    const margin = {
      top: 10,
      right: 10,
      bottom: 30, // Espacio para etiquetas del eje X
      left: 40, // Espacio para etiquetas del eje Y
    };

    // Dimensiones del área de dibujo
    const chartWidth = 497 - margin.left - margin.right;
    const chartHeight = 217 - margin.top - margin.bottom;

    // Configuración del gráfico
    const barCount = data.length;
    const barWidth = (chartWidth / barCount) * 0.6; // 60% del espacio disponible
    const barSpacing = (chartWidth / barCount) * 0.4; // 40% del espacio disponible

    // Escala para el eje Y
    const maxValue = 200; // Valor máximo del eje Y
    const yScale = chartHeight / maxValue;

    // Dibujar eje Y
    ctx.beginPath();
    ctx.strokeStyle = "#343434";
    ctx.lineWidth = 1;
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, margin.top + chartHeight);
    ctx.stroke();

    // Dibujar eje X
    ctx.beginPath();
    ctx.moveTo(margin.left, margin.top + chartHeight);
    ctx.lineTo(margin.left + chartWidth, margin.top + chartHeight);
    ctx.stroke();

    // Dibujar etiquetas del eje Y
    ctx.fillStyle = "#646464";
    ctx.font = "10px Arial";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    [0, 50, 100, 150, 200].forEach((value) => {
      const y = margin.top + chartHeight - value * yScale;
      ctx.fillText(value.toString(), margin.left - 5, y);

      // Líneas horizontales de referencia (grid)
      ctx.beginPath();
      ctx.strokeStyle = "#343434";
      ctx.setLineDash([2, 2]);
      ctx.moveTo(margin.left, y);
      ctx.lineTo(margin.left + chartWidth, y);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // Dibujar las barras
    ctx.fillStyle = "#000000"; // Negro puro para las barras

    data.forEach((item, index) => {
      const barHeight = item.value * yScale;
      const x = margin.left + index * (barWidth + barSpacing) + barSpacing / 2;
      const y = margin.top + chartHeight - barHeight;

      // Dibujar barra con esquinas redondeadas en la parte superior
      ctx.beginPath();
      ctx.moveTo(x, margin.top + chartHeight);
      ctx.lineTo(x, y + 10);
      ctx.arc(x + 10, y, 10, Math.PI, Math.PI * 1.5);
      ctx.lineTo(x + barWidth - 10, y);
      ctx.arc(x + barWidth - 10, y, 10, Math.PI * 1.5, 0);
      ctx.lineTo(x + barWidth, margin.top + chartHeight);
      ctx.closePath();
      ctx.fill();

      // Dibujar etiquetas del eje X (meses)
      ctx.fillStyle = "#646464";
      ctx.font = "10px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(item.month, x + barWidth / 2, margin.top + chartHeight + 5);
    });

    // Dibujar la línea
    ctx.strokeStyle = "#BFFF00";
    ctx.lineWidth = 2;
    ctx.beginPath();

    // Dibujar puntos y línea
    data.forEach((item, index) => {
      const x =
        margin.left +
        index * (barWidth + barSpacing) +
        barWidth / 2 +
        barSpacing / 2;
      const y = margin.top + chartHeight - item.lineValue * yScale;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Dibujar círculos en los puntos de datos
    data.forEach((item, index) => {
      const x =
        margin.left +
        index * (barWidth + barSpacing) +
        barWidth / 2 +
        barSpacing / 2;
      const y = margin.top + chartHeight - item.lineValue * yScale;

      ctx.fillStyle = "#BFFF00";
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Eventos de mouse
    const handleMouseMove = (e) => {
      const result = checkHover(e.clientX, e.clientY);
      if (result.found) {
        canvas.style.cursor = "pointer";
        setTooltip({
          visible: true,
          x: result.x,
          y: result.y,
          data: result.data,
        });
      } else {
        canvas.style.cursor = "default";
        setTooltip({ ...tooltip, visible: false });
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width="497"
        height="217"
        className="w-[497px] h-[217px]"
      />

      {tooltip.visible && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${tooltip.x - 100}px`, // Centrar el tooltip (ancho 200px / 2)
            top: `${tooltip.y - 135}px`, // Posicionar encima del punto
            width: "200px",
            height: "125px",
            padding: "14px",
            borderRadius: "16px",
            backgroundColor: "#DEE8E833",
            backdropFilter: "blur(8px)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            zIndex: 10,
          }}
        >
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L3 12H5V20H19V12H21L12 2Z" fill="white" />
            </svg>
            <span className="text-lg font-bold">{tooltip.data?.lineValue}</span>
          </div>
          <div className="text-gray-300 text-sm">
            AVG. Price: {tooltip.data?.price} ETH
          </div>
          <div className="text-gray-300 text-sm">
            Num. sale: {tooltip.data?.numSale}
          </div>
          <div className="text-gray-300 text-sm">{tooltip.data?.date}</div>

          {/* Triángulo inferior */}
          <div
            className="absolute w-0 h-0"
            style={{
              bottom: "-10px",
              left: "calc(50% - 10px)",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid rgba(222, 232, 232, 0.2)", // #DEE8E833
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
