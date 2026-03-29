import { useState } from "react";
import { FaUser, FaCreditCard, FaBoxOpen, FaInfoCircle } from "react-icons/fa";

function MeusPedidos() {
  const [activeSection, setActiveSection] = useState("perfil");

  // mock de usuário
  const [user, setUser] = useState({
    name: "Hello World",
    email: "helloworld@example.com",
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileDraft, setProfileDraft] = useState(user);

  // mock de endereços
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Endereço principal",
      street: "Rua Exemplo, 123",
      neighborhood: "Bairro Centro",
      city: "São Paulo",
      state: "SP",
      cep: "00000-000",
    },
  ]);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [addressDraft, setAddressDraft] = useState({
    label: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    cep: "",
  });
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  // cartões
  const [cards, setCards] = useState([
    {
      id: 1,
      brand: "Mastercard",
      last4: "1234",
      expiry: "08/27",
      holder: "Hello World",
    },
  ]);

  const [newCard, setNewCard] = useState({
    holder: "",
    number: "",
    expiry: "",
  });

  const MENU_ITEMS = [
    { id: "perfil", label: "Meu perfil", icon: <FaUser size={18} /> },
    { id: "pedidos", label: "Meus pedidos", icon: <FaBoxOpen size={18} /> },
    { id: "informacoes", label: "Minhas informações", icon: <FaInfoCircle size={18} /> },
    { id: "pagamento", label: "Métodos de pagamento", icon: <FaCreditCard size={18} /> },
  ];

  // funções auxiliares para cartão
  const getCardBrand = (number) => {
    const clean = number.replace(/\D/g, "");
    if (/^4/.test(clean)) return "Visa";
    if (/^(5[1-5])/.test(clean)) return "Mastercard";
    if (/^3[47]/.test(clean)) return "Amex";
    return "Cartão";
  };

  const getLast4 = (number) => {
    const clean = number.replace(/\D/g, "");
    return clean.slice(-4) || "••••";
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    if (!newCard.holder || !newCard.number || !newCard.expiry) {
      alert("Preencha todos os campos do cartão.");
      return;
    }

    const brand = getCardBrand(newCard.number);
    const last4 = getLast4(newCard.number);

    const newCardObj = {
      id: Date.now(),
      brand,
      last4,
      expiry: newCard.expiry,
      holder: newCard.holder,
    };

    setCards((prev) => [...prev, newCardObj]);
    setNewCard({ holder: "", number: "", expiry: "" });
  };

  const handleRemoveCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  // funções para aba perfil
  const handleStartEditProfile = () => {
    setProfileDraft(user);
    setIsEditingProfile(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(profileDraft);
    setIsEditingProfile(false);
  };

  const handleCancelProfile = () => {
    setProfileDraft(user);
    setIsEditingProfile(false);
  };

  // funções para endereço
  const handleStartEditAddress = (address) => {
    setAddressDraft(address);
    setEditingAddressId(address.id);
    setIsAddingAddress(false);
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    if (
      !addressDraft.street ||
      !addressDraft.city ||
      !addressDraft.state ||
      !addressDraft.cep
    ) {
      alert("Preencha pelo menos rua, cidade, estado e CEP.");
      return;
    }

    setAddresses((prev) =>
      prev.map((addr) =>
        addr.id === editingAddressId ? { ...addr, ...addressDraft } : addr
      )
    );

    setEditingAddressId(null);
  };

  const handleCancelEditAddress = () => {
    setEditingAddressId(null);
  };

  const handleStartAddAddress = () => {
    setAddressDraft({
      label: "Novo endereço",
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      cep: "",
    });
    setIsAddingAddress(true);
    setEditingAddressId(null);
  };

  const handleSaveNewAddress = (e) => {
    e.preventDefault();
    if (
      !addressDraft.street ||
      !addressDraft.city ||
      !addressDraft.state ||
      !addressDraft.cep
    ) {
      alert("Preencha pelo menos rua, cidade, estado e CEP.");
      return;
    }

    const newAddress = {
      ...addressDraft,
      id: Date.now(),
    };

    setAddresses((prev) => [...prev, newAddress]);
    setIsAddingAddress(false);
  };

  const handleCancelNewAddress = () => {
    setIsAddingAddress(false);
  };

  // renderização de cada seção do menu
  const renderContent = () => {
    switch (activeSection) {
      // Menu perfil
      case "perfil":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Meu perfil</h2>
            <p className="text-gray-500 text-sm">
              Aqui você poderá visualizar e editar os dados do seu perfil.
            </p>

            {!isEditingProfile ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase">
                      Nome completo
                    </span>
                    <span className="text-gray-700 font-medium">
                      {user.name}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase">
                      E-mail
                    </span>
                    <span className="text-gray-700 font-medium">
                      {user.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleStartEditProfile}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg shadow-sm hover:bg-[#991957] active:bg-[#801447] cursor-pointer transition-colors"
                >
                  Editar perfil
                </button>
              </>
            ) : (
              <form
                onSubmit={handleSaveProfile}
                className="space-y-4 bg-[#F9F8FE] border border-primary/20 rounded-xl p-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      value={profileDraft.name}
                      onChange={(e) =>
                        setProfileDraft((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={profileDraft.email}
                      onChange={(e) =>
                        setProfileDraft((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCancelProfile}
                    className="px-4 py-2 text-xs md:text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs md:text-sm font-bold text-white bg-primary rounded-lg shadow-sm hover:bg-[#991957] active:bg-[#801447] cursor-pointer transition-colors"
                  >
                    Salvar alterações
                  </button>
                </div>
              </form>
            )}
          </div>
        );

      // Pedidos
      case "pedidos":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Meus pedidos</h2>
            <p className="text-gray-500 text-sm">
              Acompanhe o status dos seus pedidos e consulte o histórico de compras.
            </p>

            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs uppercase text-gray-400 font-semibold">
                    Pedido
                  </span>
                  <p className="text-sm font-bold text-gray-700">#12345</p>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  Entregue
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Realizado em: 20/03/2026</span>
                <span>Total: R$ 259,90</span>
              </div>
              <button
                className="self-start mt-1 text-primary text-sm font-semibold hover:underline hover:text-[#991957] active:text-[#801447] cursor-pointer transition-colors"
              >
                Ver detalhes
              </button>
            </div>

            <button
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-primary border border-primary/20 rounded-lg hover:bg-[#FDF1F8] active:bg-[#FAD7EC] cursor-pointer transition-colors"
            >
              Ver todos os pedidos
            </button>
          </div>
        );

      // Informações: Endereços
      case "informacoes":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Minhas informações</h2>
            <p className="text-gray-500 text-sm">
              Endereços de entrega, documentos e outras informações pessoais.
            </p>

            {/* Lista de endereços */}
            <div className="space-y-4">
              {addresses.map((addr) =>
                editingAddressId === addr.id ? (
                  <form
                    key={addr.id}
                    onSubmit={handleSaveAddress}
                    className="bg-[#F9F8FE] border border-primary/20 rounded-xl p-4 space-y-3"
                  >
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-500">
                        Rótulo
                      </label>
                      <input
                        type="text"
                        value={addressDraft.label}
                        onChange={(e) =>
                          setAddressDraft((prev) => ({
                            ...prev,
                            label: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                        placeholder="Ex: Endereço principal, Trabalho..."
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-500">
                          Rua e número
                        </label>
                        <input
                          type="text"
                          value={addressDraft.street}
                          onChange={(e) =>
                            setAddressDraft((prev) => ({
                              ...prev,
                              street: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          placeholder="Rua Exemplo, 123"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-500">
                          Bairro
                        </label>
                        <input
                          type="text"
                          value={addressDraft.neighborhood}
                          onChange={(e) =>
                            setAddressDraft((prev) => ({
                              ...prev,
                              neighborhood: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          placeholder="Bairro"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-500">
                          Cidade
                        </label>
                        <input
                          type="text"
                          value={addressDraft.city}
                          onChange={(e) =>
                            setAddressDraft((prev) => ({
                              ...prev,
                              city: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          placeholder="Cidade"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-500">
                          Estado
                        </label>
                        <input
                          type="text"
                          value={addressDraft.state}
                          onChange={(e) =>
                            setAddressDraft((prev) => ({
                              ...prev,
                              state: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          placeholder="SP"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-500">
                          CEP
                        </label>
                        <input
                          type="text"
                          value={addressDraft.cep}
                          onChange={(e) =>
                            setAddressDraft((prev) => ({
                              ...prev,
                              cep: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          placeholder="00000-000"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleCancelEditAddress}
                        className="px-4 py-2 text-xs md:text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-xs md:text-sm font-bold text-white bg-primary rounded-lg shadow-sm hover:bg-[#991957] active:bg-[#801447] cursor-pointer transition-colors"
                      >
                        Salvar endereço
                      </button>
                    </div>
                  </form>
                ) : (
                  <div
                    key={addr.id}
                    className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col gap-2"
                  >
                    <span className="text-xs uppercase text-gray-400 font-semibold">
                      {addr.label || "Endereço"}
                    </span>
                    <p className="text-sm text-gray-700 font-medium">
                      {addr.street}
                      {addr.neighborhood ? ` - ${addr.neighborhood}` : ""}
                    </p>
                    <p className="text-xs text-gray-500">
                      {addr.city} - {addr.state}
                    </p>
                    <p className="text-xs text-gray-500">CEP: {addr.cep}</p>
                    <button
                      onClick={() => handleStartEditAddress(addr)}
                      className="mt-2 inline-flex items-center justify-center text-primary text-sm font-semibold hover:underline hover:text-[#991957] active:text-[#801447] cursor-pointer transition-colors"
                    >
                      Editar endereço
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Formulário de novo endereço */}
            {isAddingAddress ? (
              <form
                onSubmit={handleSaveNewAddress}
                className="bg-[#F9F8FE] border border-dashed border-primary/30 rounded-xl p-4 space-y-3"
              >
                <h3 className="text-sm font-bold text-gray-700">
                  Adicionar novo endereço
                </h3>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">
                    Rótulo
                  </label>
                  <input
                    type="text"
                    value={addressDraft.label}
                    onChange={(e) =>
                      setAddressDraft((prev) => ({
                        ...prev,
                        label: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    placeholder="Ex: Endereço principal, Trabalho..."
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500">
                      Rua e número
                    </label>
                    <input
                      type="text"
                      value={addressDraft.street}
                      onChange={(e) =>
                        setAddressDraft((prev) => ({
                          ...prev,
                          street: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="Rua Exemplo, 123"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500">
                      Bairro
                    </label>
                    <input
                      type="text"
                      value={addressDraft.neighborhood}
                      onChange={(e) =>
                        setAddressDraft((prev) => ({
                          ...prev,
                          neighborhood: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="Bairro"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500">
                      Cidade
                    </label>
                    <input
                      type="text"
                      value={addressDraft.city}
                      onChange={(e) =>
                        setAddressDraft((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="Cidade"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500">
                      Estado
                    </label>
                    <input
                      type="text"
                      value={addressDraft.state}
                      onChange={(e) =>
                        setAddressDraft((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="SP"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500">
                      CEP
                    </label>
                    <input
                      type="text"
                      value={addressDraft.cep}
                      onChange={(e) =>
                        setAddressDraft((prev) => ({
                          ...prev,
                          cep: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="00000-000"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCancelNewAddress}
                    className="px-4 py-2 text-xs md:text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs md:text-sm font-bold text-white bg-primary rounded-lg shadow-sm hover:bg-[#991957] active:bg-[#801447] cursor-pointer transition-colors"
                  >
                    Salvar endereço
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={handleStartAddAddress}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg shadow-sm hover:bg-[#991957] active:bg-[#801447] cursor-pointer transition-colors"
              >
                Adicionar novo endereço
              </button>
            )}
          </div>
        );

      // Pagamento
      case "pagamento":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Métodos de pagamento
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Gerencie seus cartões salvos e formas de pagamento.
              </p>
            </div>

            {/* Lista de cartões salvos */}
            <div className="space-y-3">
              {cards.length === 0 && (
                <p className="text-sm text-gray-500">
                  Nenhum cartão cadastrado ainda.
                </p>
              )}

              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FaCreditCard className="text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-700">
                        {card.brand} •••• {card.last4}
                      </span>
                      {card.holder && (
                        <span className="text-xs text-gray-500">
                          Titular: {card.holder}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        Vencimento: {card.expiry}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveCard(card.id)}
                    className="text-xs font-semibold text-red-500 hover:text-red-600 active:text-red-700 hover:underline cursor-pointer transition-colors"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            {/* Formulário para adicionar novo cartão */}
            <form
              onSubmit={handleAddCard}
              className="mt-4 bg-[#F9F8FE] border border-dashed border-primary/30 rounded-xl p-4 space-y-4"
            >
              <h3 className="text-sm font-bold text-gray-700">
                Adicionar novo cartão
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">
                    Nome do titular
                  </label>
                  <input
                    type="text"
                    value={newCard.holder}
                    onChange={(e) =>
                      setNewCard((prev) => ({ ...prev, holder: e.target.value }))
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    placeholder="Ex: Hello World"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">
                    Número do cartão
                  </label>
                  <input
                    type="text"
                    value={newCard.number}
                    onChange={(e) =>
                      setNewCard((prev) => ({ ...prev, number: e.target.value }))
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:w-40">
                  <label className="text-xs font-semibold text-gray-500">
                    Validade (MM/AA)
                  </label>
                  <input
                    type="text"
                    value={newCard.expiry}
                    onChange={(e) =>
                      setNewCard((prev) => ({ ...prev, expiry: e.target.value }))
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    placeholder="08/27"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setNewCard({ holder: "", number: "", expiry: "" })
                  }
                  className="px-4 py-2 text-xs md:text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
                >
                  Limpar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs md:text-sm font-bold text-white bg-primary rounded-lg shadow-sm hover:bg-[#991957] active:bg-[#801447] cursor-pointer transition-colors"
                >
                  Salvar cartão
                </button>
              </div>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F8FE] py-10 px-4 md:px-10 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* menu lateral esquerdo */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h1 className="text-lg font-bold text-gray-800 mb-4">Minha conta</h1>
            <div className="flex flex-col divide-y divide-gray-100">
              {MENU_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-3 text-sm text-left px-3 py-3 transition-all cursor-pointer
                      ${
                        isActive
                          ? "bg-[#FDF1F8] text-primary font-semibold rounded-xl shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 rounded-xl"
                      }`}
                  >
                    <span
                      className={
                        isActive ? "text-primary" : "text-gray-400"
                      }
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            {renderContent()}
          </div>
        </section>
      </div>
    </main>
  );
}

export default MeusPedidos;