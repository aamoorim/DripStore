import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const RegisterDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const emailFromPrevious = location.state?.email || "";

  const [formData, setFormData] = useState({
    email: emailFromPrevious,
    nomeCompleto: "",
    cpf: "",
    celular: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
    senha: "",
    confirmarSenha: "",
    receberNotificacoes: false,
  });

  useEffect(() => {
    if (!emailFromPrevious) {
    }
  }, [emailFromPrevious, navigate]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    console.log("Dados completos do cadastro:", formData);
    alert("Cadastro concluído (simulação).");
  };

  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);

  return (
    <main className="min-h-[calc(100vh-200px)] bg-[#F9F8FE] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl flex flex-col gap-4 p-4 md:p-6">
        <a href="/register" className="hover:underline text-dark-gray-3"> ← Voltar</a>
        <h1 className="text-2xl md:text-3xl font-semibold text-dark-gray-2">
          Criar Conta
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <section className="w-full bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex w-full items-center mb-4">
              <div className="flex-1 border-b border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm md:text-base">
                Informações Pessoais
              </span>
              <div className="flex-1 border-b border-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  readOnly
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    bg-light-gray-3/60 text-dark-gray-3
                    cursor-not-allowed
                  "
                />
              </div>

              {/* Nome completo */}
              <div className="md:col-span-2">
                <label
                  htmlFor="nomeCompleto"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  Nome completo <span className="text-red-600">*</span>
                </label>
                <input
                  id="nomeCompleto"
                  name="nomeCompleto"
                  type="text"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  required
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="Seu nome completo"
                />
              </div>

              {/* CPF */}
              <div>
                <label
                  htmlFor="cpf"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  CPF <span className="text-red-600">*</span>
                </label>
                <input
                  id="cpf"
                  name="cpf"
                  type="number"
                  maxLength={11}
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="000.000.000-00"
                />
              </div>

              {/* Celular */}
              <div>
                <label
                  htmlFor="celular"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  Celular <span className="text-red-600">*</span>
                </label>
                <input
                  id="celular"
                  name="celular"
                  type="tel"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
          </section>

          <section className="w-full bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex w-full items-center mb-4">
              <div className="flex-1 border-b border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm md:text-base">
                Informações de Entrega
              </span>
              <div className="flex-1 border-b border-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Endereço */}
              <div className="md:col-span-2">
                <label
                  htmlFor="endereco"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  Endereço <span className="text-red-600">*</span>
                </label>
                <input
                  id="endereco"
                  name="endereco"
                  type="text"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="Rua, número"
                />
              </div>

              {/* Bairro */}
              <div>
                <label
                  htmlFor="bairro"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  Bairro <span className="text-red-600">*</span>
                </label>
                <input
                  id="bairro"
                  name="bairro"
                  type="text"
                  value={formData.bairro}
                  onChange={handleChange}
                  required
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="Seu bairro"
                />
              </div>

              {/* Cidade */}
              <div>
                <label
                  htmlFor="cidade"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  Cidade <span className="text-red-600">*</span>
                </label>
                <input
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="Sua cidade"
                />
              </div>

              {/* CEP */}
              <div>
                <label
                  htmlFor="cep"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  CEP <span className="text-red-600">*</span>
                </label>
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="00000-000"
                />
              </div>

              {/* Complemento */}
              <div>
                <label
                  htmlFor="complemento"
                  className="block text-sm font-medium text-dark-gray-2 mb-1"
                >
                  Complemento
                </label>
                <input
                  id="complemento"
                  name="complemento"
                  type="text"
                  value={formData.complemento}
                  onChange={handleChange}
                  className="
                    w-full border border-light-gray-3 rounded-lg
                    px-3 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  placeholder="Apartamento, bloco, referência..."
                />
              </div>
            </div>
          </section>

          <section className="w-full bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex w-full items-center mb-4">
              <div className="flex-1 border-b border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm md:text-base">
                Dados de Acesso
              </span>
              <div className="flex-1 border-b border-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Senha */}
                <div>
                    <label
                    htmlFor="senha"
                    className="block text-sm font-medium text-dark-gray-2 mb-1"
                    >
                    Senha <span className="text-red-600">*</span>
                    </label>

                    <div className="relative">
                        <input
                            id="senha"
                            name="senha"
                            minLength={8}
                            type={showSenha ? "text" : "password"}
                            className="w-full border border-light-gray-3 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Mínimo 8 caracteres"
                        />

                        <button
                            type="button"
                            onClick={() => setShowSenha(!showSenha)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                        >
                            {showSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Confirmar senha */}
                <div>
                    <label
                    htmlFor="confirmarSenha"
                    className="block text-sm font-medium text-dark-gray-2 mb-1"
                    >
                    Confirmar senha <span className="text-red-600">*</span>
                    </label>

                    <div className="relative">
                    <input
                        id="confirmarSenha"
                        name="confirmarSenha"
                        type={showConfirmar ? "text" : "password"}
                        className="w-full border border-light-gray-3 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Repita a senha"
                    />

                    <button
                        type="button"
                        onClick={() => setShowConfirmar(!showConfirmar)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                    >
                        {showConfirmar ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    </div>
                </div>
            </div>
          </section>

          <div className="w-full rounded-lg flex items-start gap-3">
            <input
              id="receberNotificacoes"
              name="receberNotificacoes"
              type="checkbox"
              checked={formData.receberNotificacoes}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer accent-primary"
            />
            <label
              htmlFor="receberNotificacoes"
              className="text-sm text-dark-gray-2"
            >
              Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
            </label>
          </div>
          <div className="w-full mt-2">
            <button
              type="submit"
              className="
                w-full bg-primary hover:bg-tertiary
                text-white font-medium
                rounded-lg py-2.5 text-sm
                transition-colors duration-200 cursor-pointer
              "
            >
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterDetails;