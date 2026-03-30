# E-commerce API — Backend

API REST para gerenciamento de e-commerce, desenvolvida com Node.js seguindo o padrão MSC (Model-Service-Controller).

---

## Stack

| Categoria | Tecnologias |
|-----------|-------------|
| Ambiente | Node.js, Express.js |
| Banco de dados | PostgreSQL + Prisma ORM (hospedado no NeonDB) |
| Segurança | JWT, Bcrypt |
| Testes & Dev | Insomnia, Dotenv, Nodemon |

---

## Equipe

| Membro | Responsabilidades |
|--------|-------------------|
| Alicia | Estrutura de diretórios, schema e migrations das tabelas |
| Mariana Amorim | CRUD de usuários, CRUD de categorias, autenticação, testes de endpoints (Insomnia), hospedagem do banco (NeonDB) |
| STQ | — |

---

## Progresso — 21/21 tarefas concluídas ✅

### ✅ Infraestrutura e configuração
- [x] Estrutura de diretórios (MSC) — *Alícia, Mariana e Sintique*
- [x] Configuração de `.env` e scripts — *Mariana*
- [x] Setup do servidor (Express / App / Server) — *Alícia*

### ✅ Banco de dados (Prisma + NeonDB)
- [x] Schema: usuários, categorias e produtos — *Alicia*
- [x] Migrations executadas no Postgres — *Alicia*
- [x] Hospedagem do banco no NeonDB — *Mariana*

### ✅ CRUD de Usuários
- [x] Obter usuário por ID — *Mariana*
- [x] Cadastro de usuário — *Mariana*
- [x] Atualizar usuário — *Mariana*
- [x] Deletar usuário — *Mariana*

### ✅ CRUD de Categorias
- [x] Listar categorias — *Mariana*
- [x] Obter categoria por ID — *Mariana*
- [x] Cadastro de categoria — *Mariana*
- [x] Atualizar categoria — *Mariana*
- [x] Deletar categoria — *Mariana*

### ✅ CRUD de Produtos
- [x] Listar produtos — *Alicia*
- [x] Obter produto por ID — *Alicia*
- [x] Criar produto — *Alicia*
- [x] Atualizar produto — *Alicia*
- [x] Deletar produto — *Alicia*

### ✅ Autenticação e segurança
- [x] Login de usuário — *Mariana*
- [x] Geração de token JWT — *Mariana*
- [x] Middleware de validação de token — *Mariana*

### ✅ Testes de endpoints
- [x] Testes manuais de todos os endpoints via Insomnia — *Sintique*

---

## Configuração do ambiente

### 1. Variáveis de ambiente
Crie um `.env` na raíz:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```

> Se for usar o banco hospedado no NeonDB, a `DATABASE_URL` já vem configurada — só solicitar ao time.

### 2. Comandos do banco de dados
```bash
# Sincronizar tabelas (primeira vez ou após mudanças no schema)
npx prisma migrate dev

# Visualizar dados no navegador (http://localhost:5555)
npx prisma studio

# Após git pull, instalar dependências novas
npm install
```

### 3. Alterar o schema

Edite `prisma/schema.prisma` e rode:
```bash
npx prisma migrate dev --name nome_da_mudanca
```

---

## Estrutura do projeto
```
.
├── server.js
├── app.js
└── src/
    ├── config/
    │   └── prisma.js
    ├── controllers/
    │   ├── AuthController.js
    │   ├── UserController.js
    │   ├── CategoryController.js
    │   └── ProductController.js
    ├── middlewares/
    │   └── AuthMiddleware.js
    ├── routes/
    │   └── index.js
    └── services/
        ├── CategoryService.js
        └── ProductService.js
```