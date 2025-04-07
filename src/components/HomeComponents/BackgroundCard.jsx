const BackgroundCard = ({ position }) => {
  // Propiedades base para todas las tarjetas
  const baseStyles = {
    width: "322px",
    height: "395px",
    backgroundColor: "#2E2E2E",
    borderRadius: "32px",
    boxShadow: "0px 4px 20px rgba(10, 10, 10, 0.5)",
  };

  // Estilos específicos según la posición
  let specificStyles = {};

  switch (position) {
    case "left-1":
      specificStyles = {
        boxShadow: "0px 30px 70px rgba(10, 10, 10, 0.5)",
        transform: "matrix(1.00,0.10,0.00,1.00,0,0)",
      };
      break;
    case "left-2":
      specificStyles = {
        boxShadow: "0px 30px 70px rgba(10, 10, 10, 0.5)",
        transform: "matrix(1.00,0.10,0.00,1.00,0,0)",
      };
      break;
    case "left-3":
      specificStyles = {
        boxShadow: "0px 30px 70px rgba(10, 10, 10, 0.5)",
        transform: "matrix(1.00,0.10,0.00,1.00,0,0)",
      };
      break;
    case "right-1":
      specificStyles = {
        boxShadow: "0px 30px 70px rgba(10, 10, 10, 0.5)",
        transform: "matrix(1.00,-0.10,0.00,1.00,0,0)",
      };
      break;
    case "right-2":
      specificStyles = {
        boxShadow: "0px 30px 70px rgba(10, 10, 10, 0.5)",
        transform: "matrix(1.00,-0.10,0.00,1.00,0,0)",
      };
      break;
    case "right-3":
      specificStyles = {
        boxShadow: "0px 30px 70px rgba(10, 10, 10, 0.5)",
        transform: "matrix(1.00,-0.10,0.00,1.00,0,0)",
      };
      break;
    default:
      break;
  }

  // Combinamos los estilos
  const combinedStyles = { ...baseStyles, ...specificStyles };

  return <div style={combinedStyles}></div>;
};

export default BackgroundCard;
