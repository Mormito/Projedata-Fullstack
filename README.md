## Como rodar/usar este projeto - Passo a Passo

### Crie um docker
```
docker run --name postgres-stock -e POSTGRES_DB=stock -e POSTGRES_USER=mormito -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
  ```
Após criar o Docker contêiner, basta instalar as dependências do back-end (API) e inicializar o "ProjedataTestApplication", isso irá criar um servidor HTTP na porta 8080 e também ira gerar as tabelas no banco de dados.

### Baixe as depêndencias do projeto Vite e inicialize-o
```npm i```
```npm run dev```
Isso irá fazer com que um servidor HTTP na porta 5173.

O código Java é uma API, você pode acessar via URL ou utilizando ferramentas como Insomnia e Postman.
O código Vite é uma interface, essa é a parte que você pode interagir com o sistema sem a utilização de comandos.

Fluxo de funcionamento do sistema: Browser → Vite → Spring Boot → PostgreSQL

## Stacks
<p>
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Vite-Dark.svg" width="40" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg" width="40" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg" width="40" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Java-Dark.svg" width="40" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Spring-Dark.svg" width="40" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/PostgreSQL-Dark.svg" width="40" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Docker.svg" width="40" />
</p>
