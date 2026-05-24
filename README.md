# 👟 DripStore

> Plataforma de e-commerce desenvolvida com foco em experiência do usuário, componentização e arquitetura fullstack moderna utilizando React, Node.js, Prisma e PostgreSQL.

---

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0C344B?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

</div>

---

# 📑 Navegação

- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🏗️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [⚙️ Configuração do Ambiente](#️-configuração-do-ambiente)
- [🚀 Executando o Projeto](#-executando-o-projeto)
- [🗄️ Banco de Dados](#️-banco-de-dados)
- [🔗 Endpoints da API](#-endpoints-da-api)
- [📚 Aprendizados](#-aprendizados)
- [🚧 Melhorias Futuras](#-melhorias-futuras)
- [👩‍💻 Autora](#-autora)

---

# 📌 Sobre o Projeto

O **DripStore** é uma aplicação fullstack de e-commerce desenvolvida com o objetivo de praticar conceitos modernos de desenvolvimento web, arquitetura de aplicações e integração entre frontend e backend.

O sistema foi construído utilizando:

- **React + Vite** no frontend
- **Node.js + Express** no backend
- **Prisma ORM**
- **PostgreSQL hospedado na Neon**

A aplicação possui estrutura escalável, componentização reutilizável e separação organizada de responsabilidades.

---

# ✨ Funcionalidades

## 🛍️ Frontend

✔️ Página inicial dinâmica  
✔️ Catálogo de produtos  
✔️ Página de detalhes do produto  
✔️ Carrinho de compras  
✔️ Checkout  
✔️ Sistema de login e cadastro  
✔️ Context API para gerenciamento do carrinho  
✔️ Componentes reutilizáveis  
✔️ Interface moderna e responsiva  

---

## ⚙️ Backend

✔️ API RESTful  
✔️ CRUD de produtos  
✔️ CRUD de categorias  
✔️ Sistema de autenticação  
✔️ Middleware de autenticação  
✔️ Integração com PostgreSQL  
✔️ Prisma ORM  
✔️ Estrutura MVC simplificada  

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| React | Interface do usuário |
| Vite | Build tool do frontend |
| Node.js | Backend da aplicação |
| Express | Gerenciamento de rotas |
| Prisma ORM | Manipulação do banco |
| PostgreSQL | Banco de dados |
| Neon | Hospedagem do banco |
| Context API | Gerenciamento de estado |

---

# 🏗️ Arquitetura do Projeto

O projeto está dividido em duas aplicações principais:

```bash
Frontend → Interface do usuário
Backend  → API + Banco de dados
```

A comunicação entre frontend e backend ocorre através de requisições HTTP utilizando uma API REST.

---

# 📂 Estrutura do Projeto

```bash
📦 DripStore
├── 📂 backend
│   ├── 📂 prisma
│   ├── 📂 src
│   │   ├── 📂 config
│   │   ├── 📂 controllers
│   │   ├── 📂 middlewares
│   │   ├── 📂 routes
│   │   └── 📂 services
│
└── 📂 frontend
    ├── 📂 public
    └── 📂 src
        ├── 📂 assets
        ├── 📂 components
        ├── 📂 context
        ├── 📂 data
        ├── 📂 pages
        └── 📂 routes
```

---

# ⚙️ Configuração do Ambiente

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/aamoorim/DripStore.git
```

---

## 2️⃣ Instale as dependências

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

# 🗄️ Banco de Dados

O banco de dados utilizado no projeto é o PostgreSQL hospedado na plataforma Neon.

Configure o arquivo `.env` no backend:

```env
DATABASE_URL="sua-url-do-neon"
JWT_SECRET="sua-chave"
```

---

# 🚀 Executando o Projeto

## ▶️ Backend

```bash
cd backend
npm run dev
```

Servidor disponível em:

```bash
http://localhost:3000
```

---

## ▶️ Frontend

```bash
cd frontend
npm run dev
```

Aplicação disponível em:

```bash
http://localhost:5173
```

---

# 🔗 Endpoints da API

## 📦 Produtos

```http
GET /products
POST /products
PUT /products/:id
DELETE /products/:id
```

---

## 🏷️ Categorias

```http
GET /categories
POST /categories
```

---

## 🔐 Autenticação

```http
POST /login
POST /register
```

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes como:

- Arquitetura fullstack
- Componentização React
- Rotas dinâmicas
- Gerenciamento de estado
- Desenvolvimento de APIs REST
- Integração frontend/backend
- Prisma ORM
- PostgreSQL
- Organização escalável de projetos
- Middleware de autenticação
- Context API
- Estrutura MVC

---

# 🚧 Melhorias Futuras

🔹 Sistema de pagamento  
🔹 Upload de imagens  
🔹 Dashboard administrativo  
🔹 Deploy em nuvem  
🔹 Dockerização  
🔹 Testes automatizados  
🔹 Swagger Documentation  
🔹 Responsividade avançada  
🔹 Favoritos/Wishlist  

---

# 👩‍💻 Autora

Feito com ♥ por **Mariana Amorim, Alícia Alexia e Sintique**

📚 Estudante de Análise e Desenvolvimento de Sistemas  
🚀 Desenvolvedora Fullstack em constante evolução

---

<div align="center">

### ⭐ Se gostou do projeto, considere deixar uma estrela no repositório!

</div>
