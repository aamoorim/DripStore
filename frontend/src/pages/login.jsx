import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook} from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="bg-[#f6f6f6] w-full flex items-center justify-center min-h-[calc(100vh-150px)] py-12 px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* CARD LOGIN */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm w-full max-w-md mx-auto">

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Acesse sua conta
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Novo cliente? Então registre-se <a href="/register" className='underline'> aqui</a>.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Login <span className='text-red-600'>*</span>
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>

            {/* SENHA */}
            <div className="relative">
              <label className="text-sm text-gray-600 mb-1 block">
                Senha <span className='text-red-600'>*</span>
              </label>

              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* ESQUECI SENHA */}
            <div className="text-left text-xs font-medium text-gray-700">
              <a href="#" className="underline">
                Esqueci minha senha
              </a>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg text-sm font-medium transition"
            >
              Acessar conta
            </button>

            {/* DIVISOR */}
            <div className="flex items-center gap-2 text-xs text-gray-400 pt-2">
              <div className="flex-1 h-px bg-gray-200" />
              Ou continue com
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* SOCIAL */}
            <div className="flex justify-center gap-3">
              <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer">
                <FcGoogle size={18} />
              </button>
              <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer">
                <FaFacebook className="text-blue-600" size={18} />
              </button>
            </div>

          </form>
        </div>

        {/* IMAGEM */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="../assets/tenis-login.png"
            alt="Tênis"
            className="max-w-md w-full rotate-y-360"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;