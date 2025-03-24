import { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#161616] gap-10 py-16">
      {/* Título */}
      <div className="text-center w-full flex flex-col gap-4">
        <h1 className="text-white text-4xl font-semibold">Login</h1>
        <h2 className="text-[#FFFFFF87] text-sm font-medium">
          Get started today by entering just a few details
        </h2>
      </div>
      {/* CARD */}
      <div className="lg:w-[920px] lg:h-auto p-8 rounded-[20px] bg-[#232323] text-[#FFFFFF87]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@website.com"
              required
              className="w-full px-4 py-3 bg-[#161616] rounded-lg"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-white"
            >
              Password *
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 character"
                required
                minLength={8}
                className="w-full px-4 py-3 bg-[#161616] rounded-lg"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
              >
                {showPassword ? (
                  <HiEyeOff className="w-5 h-5" />
                ) : (
                  <HiEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a href="#" className="text-[#FFFFFF87] hover:text-white">
              Forget password
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-4 bg-[#DDF247] text-black font-medium rounded-lg cursor-pointer transition-colors"
          >
            <span>Login</span>
            <GoArrowUpRight className="ml-2 text-2xl" />
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex-1 h-px bg-[#323232]"></div>
            <span className="text-[#FFFFFF87]">or continue</span>
            <div className="flex-1 h-px bg-[#323232]"></div>
          </div>

          {/* Social Login Options */}
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              className="flex items-center justify-center space-x-2 py-3 px-4 border border-[#323232] rounded-xl hover:bg-[#323232] transition-colors"
            >
              <FaGoogle className="text-white text-xl" />
              <span className="text-sm font-semibold text-[#FFFFFF]">
                Sign With Google
              </span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center space-x-2 py-3 px-4 border border-[#323232] rounded-xl hover:bg-[#323232] transition-colors"
            >
              <FaFacebookF className="text-[#1877F2] text-xl" />
              <span className="text-sm font-semibold text-[#FFFFFF]">
                Sign With Facebook
              </span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center space-x-2 py-3 px-4 border border-[#323232] rounded-xl hover:bg-[#323232] transition-colors"
            >
              <FaApple className="text-white text-xl" />
              <span className="text-sm font-semibold text-[#FFFFFF]">
                Sign With Apple
              </span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-[#FFFFFF87]">
            Don't have an account?{" "}
            <a href="#" className="text-[#DDF247] hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
