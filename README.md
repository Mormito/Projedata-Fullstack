## Como usar este projeto - Passo a Passo

### Crie um docker
```
docker run --name postgres-stock\
  -e POSTGRES_DB=stock\
  -e POSTGRES_USER=mormito \
  -e POSTGRES_PASSWORD=password\
  -p 5432:5432 \
  -d postgres
  ```
Após criar o Docker contêiner, basta instalar as dependências do projeto e inicializar o "ProjedataTestApplication", isso irá criar um servidor HTTP na porta 8080 e também ira gerar as tabelas no banco de dados.

