import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/register/details", {
      state: {
        email: formData.email,
      },
    });
  };

  return (
    <div className="bg-[linear-gradient(180deg,hsla(239,70%,83%,1)_0%,hsla(240,100%,97%,1)_100%,hsla(237,64%,56%,1)_100%)] w-full flex items-center justify-center min-h-[calc(100vh-150px)] py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm w-full max-w-md mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Crie sua conta
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Já tem uma conta? Então entre{" "}
              <a href="/login" className="underline">
                aqui
              </a>
              .
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm text-gray-600 mb-1 block"
              >
                E-mail <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg text-sm font-medium transition cursor-pointer"
            >
              Continuar
            </button>
          </form>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <img
            src="/tenis-login-2.png"
            alt="Tênis"
            className="max-w-lg ml-10 w-full rotate-y-360 rotate-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
