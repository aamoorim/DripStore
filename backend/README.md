# 🚀 Projeto Backend - E-commerce API

Este projeto consiste no desenvolvimento de uma API robusta para gerenciamento de um e-commerce, utilizando Node.js e Sequelize. O foco é fornecer uma estrutura escalável seguindo o padrão MSC (Model-Service-Controller).

## 👥 Equipe
* **Alicia**
* **Mariana Amorim**
* **STQ**

---

## 🛠️ Stack Tecnológica
* **Ambiente:** Node.js
* **Framework:** Express.js
* **ORM:** Primas
* **Banco de Dados:** PostgreSQL
* **Segurança:** JWT (JSON Web Token) & Bcrypt
* **Testes:** Jest
* **Produtividade:** Dotenv & Nodemon

---

### 📋 Checklist de Implementação e Responsáveis

| Funcionalidade | Status | Responsável |
| :--- | :---: | :--- |
| **1. Infraestrutura e Configuração** | | |
| Estrutura de Diretórios (MSC) | [X] | Alicia |
| Configuração de `.env` e Scripts | [ ] | |
| Setup do Servidor (Express/App/Server) | [ ] | |
| **2. Banco de Dados (Prisma)** | | |
| Schema: Usuários, Categorias e Produtos | [x] |  Alicia  |
| Migrations executadas no Postgres | [x] |  Alicia  |
| **3. CRUD de usuarios** | | Mariana |
| Endpoint: Criar endpoint para obter informações do usuário pelo ID | [ ] | Mariana |
| Endpoint: Criar endpoint de cadastro de usuário | [ ] | Mariana |
| Endpoint: Criar endpoint atualizar usuário | [ ] | Mariana |
| Endpoint: Criar endpoint de deletar usuário (DELETE) | [ ] | Mariana |
| **4. CRUD de Categorias** | | |
| Endpoint: Criar endpoint para obter uma lista de categorias | [ ] | |
| Endpoint: Criar endpoint para obter informações da categoria pelo ID | [ ] | |
| Endpoint: Criar endpoint de cadastro de categoria | [ ] | |
| Endpoint: Criar endpoint de atualização de categoria | [ ] | |
| Endpoint: Criar endpoint de deletar categoria | [ ] | |
| **4. CRUD de Produtos** | | Alicia |
| Endpoint: Criar endpoint para obter uma lista de produtos | [x] | Alicia |
| Endpoint: Criar endpoint para obter informações do produto pelo ID | [x] | Alicia |
| Endpoint: Criar endpoint de criação de produto | [x] | Alicia |
| Endpoint: Criar endpoint de atualização de produto | [x] | Alicia |
| Endpoint: Criar endpoint de deletar produto | [x] | Alicia |
| **5. Autenticação e Segurança** | | Mariana |
| Endpoint: Login de Usuário | [ ] | Mariana |
| Implementação de Geração de Token JWT | [ ] | Mariana |
| Middleware de Validação de Token | [ ] | Mariana |

---

## 🛠️ Guia de Configuração para a Equipe

Para que o projeto rode sem erros na sua máquina, siga este passo a passo de ajustes iniciais:

### 1. Variáveis de Ambiente (.env)
Crie um arquivo chamado `.env` na raiz do projeto e copie o conteúdo de `.env.example`. Você precisará ajustar a `DATABASE_URL` conforme suas credenciais locais do PostgreSQL:

```env
# Exemplo de URL: postgresql://USUARIO:SENHA@localhost:PORTA/NOME_DO_BANCO?schema=public
DATABASE_URL="postgresql://postgres:suasenha@localhost:5432/NOME_DO_BANCO?schema=public"
```

---

## 🗄️ Guia de Configuração do Banco de Dados

Como estamos utilizando **PostgreSQL** com **Prisma ORM**, o gerenciamento das tabelas é automatizado. Siga a ordem abaixo para garantir que seu ambiente local esteja sincronizado.

### 1. Preparação da URL de Conexão
Certifique-se de que seu arquivo `.env` contém a string de conexão correta:
```env
# Formato: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
DATABASE_URL="postgresql://postgres:suasenha@localhost:5432/nome_do_banco?schema=public"
```
2. Sincronizando as Tabelas (Migrate)
Sempre que você baixar o projeto pela primeira vez ou quando houver mudanças no arquivo schema.prisma, rode:
```bash
npx prisma migrate dev
```
O que isso faz? Ele compara seu arquivo de configuração com o banco real, cria as tabelas necessárias e gera o histórico de alterações na pasta /prisma/migrations.
3. Visualização Gráfica (Prisma Studio)
Não precisa instalar ferramentas pesadas como DBeaver ou pgAdmin para ver os dados. O Prisma possui um painel administrativo nativo:
```bash
npx prisma studio
```
Isso abrirá uma interface em seu navegador (geralmente em http://localhost:5555) onde você pode criar, editar e excluir registros manualmente de forma visual.

4. Dicas de Fluxo de Trabalho
Instalação: Sempre que baixar uma atualização do repositório (git pull), rode npm install para garantir que novas bibliotecas foram instaladas.

Novas Tabelas: Se você precisar alterar o banco, mude o arquivo prisma/schema.prisma e rode npx prisma migrate dev --name nome_da_mudanca.

