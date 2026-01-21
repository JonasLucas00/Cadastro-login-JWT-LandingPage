# Projeto Validador de cadastro + landing page

Este projeto consiste em um sistema de cadastro e login com validação via JWT.  
O usuário informa seu e-mail e, caso não exista no banco de dados, ele é direcionado para criar uma conta.  
Após o login, um token JWT é gerado e armazenado, permitindo o acesso à rota protegida `/`, onde está a landing page.

> A landing page foi criada para prática de estilização com Bootstrap e CSS — não representa uma versão final para produção.

## 🚀 Funcionalidades

- [x] Cadastro de usuarios
- [x] login de usuarios
- [x] Validação JWTtoken
- [x] Landing page em rota protegida

## 🛠 Tecnologias utilizadas

### Backend
- Node.js  
- Express  
- Sequelize + SQLite  
- JsonWebToken  
- Bcrypt  
- Cookie-parser  
- Dotenv 

### Frontend
- EJS  
- Bootstrap  
- CSS  

### Desenvolvimento
- Nodemon  

## 📦 Como executar o projeto

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```

2. Acesse o diretório do projeto:
```bash
cd nome-do-projeto
```

3. Instale as dependências
```bash
npm install
```

4. Configure arquivo .env
```bash
JWT_SECRET=suaChaveAqui
```

5. Execute as migrations para criar as tabelas do banco de dados:
    - Esse projeto usa SQLite, o arquivo `databse.sqlite` será criado após a execução das migrations
```bash
npx sequelize-cli db:migrate
```

6. Inicie o servidor:
```bash
npm run start
```

7. Agora voce pode:
    - Criar um cadastro
    - Fazer login com seu cadastro (email e senha)
    - Caso esteja os dados estejam corretos você vai poder acessar a pagina ficticia de um planetario
    - É possivel fazer logout dentro da landing page do planetario no botao 'logout'

# Autor

Lucas Jonas da Silva  
GitHub: https://github.com/JonasLucas00