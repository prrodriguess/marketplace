```md
# 🛒 Marketplace Indie — Full Stack (Angular + NestJS + Prisma)

Este é um projeto full stack de um marketplace fictício voltado para produtos independentes (arte, roupas, livros, etc). O sistema permite que usuários façam login, cadastrem produtos e visualizem um catálogo geral. Desenvolvido com Angular no front-end e NestJS + Prisma + PostgreSQL no back-end, utilizando TypeScript de ponta a ponta.

---

## 🔧 Tecnologias Utilizadas

### Front-end (Angular)
- Angular 17+
- Angular Routing
- Angular Guards
- Auth0 Angular JWT
- PrimeNG / TailwindCSS (customizável)
- HttpClient
- Reactive Forms

### Back-end (NestJS)
- NestJS
- JWT Auth com Passport
- Prisma ORM
- PostgreSQL
- bcryptjs
- Swagger (em breve)

---

## 📁 Estrutura do Projeto

### Backend
```

marketplace-backend/
├── src/
│   ├── auth/
│   ├── users/
│   ├── products/
│   ├── prisma/
│   └── main.ts
├── prisma/
│   └── schema.prisma
├── .env

```

### Frontend
```

marketplace-frontend/
├── src/app/
│   ├── auth/
│   ├── products/
│   ├── core/
│   ├── shared/
│   └── app-routing.module.ts

````

---

## ✅ Funcionalidades Implementadas

### 🧑‍💻 Autenticação
- Cadastro e login com JWT
- Hash de senha (bcrypt)
- Proteção de rotas via AuthGuard

### 📦 Produtos
- Listagem pública de produtos
- Cadastro de produtos (rota protegida)
- Associação de produto ao usuário criador

> Em breve:
> - Upload de imagem
> - Filtros por categoria/preço
> - Wishlist e favoritos
> - Perfil do vendedor

---

## 🚀 Como Rodar Localmente

### 📌 Pré-requisitos
- Node.js
- PostgreSQL local ou Docker
- Angular CLI e NestJS CLI instalados globalmente

### 🔧 Clonar o repositório
```bash
git clone https://github.com/seu-usuario/marketplace-indie.git
cd marketplace-indie
````

---

## 🛠️ Backend (NestJS)

### 📦 Instalar dependências

```bash
cd marketplace-backend
npm install
```

### 🗂️ Rodar Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 🚀 Rodar servidor

```bash
npm run start:dev
```

---

## 🌐 Frontend (Angular)

### 📦 Instalar dependências

```bash
cd marketplace-frontend
npm install
```

### 🏃 Rodar a aplicação

```bash
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 🔐 Rotas protegidas

* `/create` (criação de produto) só acessível com login
* Token JWT armazenado no localStorage e enviado no header Authorization

---

## 📌 Roadmap (próximos passos)

* [ ] Upload de imagens para produtos
* [ ] Filtro por categoria/preço/avaliação
* [ ] Sistema de comentários e avaliações
* [ ] Admin dashboard para vendedores
* [ ] Integração com serviço de e-mail mock
* [ ] Deploy (Vercel + Render ou Railway)

---

## 👨‍💻 Autor

Desenvolvido por **Paulo Rodrigues**
[LinkedIn](https://www.linkedin.com/in/seu-perfil) • [Portfólio](https://seu-site.com) • [Email](mailto:seu@email.com)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
