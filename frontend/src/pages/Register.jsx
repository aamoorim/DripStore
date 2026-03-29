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
    <main className="min-h-[calc(100vh-200px)] bg-[linear-gradient(180deg,hsla(239,70%,83%,1)_0%,hsla(240,100%,97%,1)_100%,hsla(237,64%,56%,1)_100%)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 md:p-8 mr-60">
        <h1 className="text-2xl md:text-3xl font-semibold text-dark-gray-2 mb-2">
          Crie sua conta
        </h1>
        <p className="text-sm text-dark-gray-3 mb-6">
          Já tem uma conta? Entre{" "}
          <a href="/login" className="underline">
            aqui
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-dark-gray-2 mb-1"
            >
              E-mail <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full border border-light-gray-3 rounded-lg
                px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary
              "
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <button
            type="submit"
            className="
              mt-2 w-full bg-primary hover:bg-tertiary
              text-white font-medium
              rounded-lg py-2.5 text-sm
              transition-colors duration-200 cursor-pointer
            "
          >
            Continuar
          </button>
        </form>
      </div>

      <div className="hidden md:flex justify-center items-center">
          <img
            src="../assets/tenis-login.png"
            alt="Tênis"
            className="max-w-md w-full rotate-y-360 rotate-40"
          />
        </div>
    </main>
  );
};

export default Register;
