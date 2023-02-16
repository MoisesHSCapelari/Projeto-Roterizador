Roterizador React-google-maps(back-end)
Esse projeto tem como objetivo disponibilizar um serviço de roterização de rotas para empresas de logística. O projeto foi desenvolvido utilizando NodeJS, Express, Sequelize ORM e Postgres.

Requisitos:
NodeJS (v14.17.0 ou superior)
mariadb (10.6 ou superior)


Instalação:
crie um schema no mariadb com o nome de "roterizador" ou outro de sua preferencia
Clone o repositório em sua máquina local
Instale as dependências do projeto executando o seguinte comando: npm install ou yarn install
crie um arquivo .env com as seguintes variaveis:
    DATABASE=nome_de_seu_schema
    DATABASE_HOST=localhost
    DATABASE_PORT=3306
    DATABASE_USERNAME=root
    DATABASE_PASSWORD=sua senha
Preencha as variáveis de ambiente no arquivo .env.
Execute as migrations para criar as tabelas no banco de dados executando o seguinte comando no terminal:  npm sequelize db:migrate ou yarn sequelize db:migrate

Inicie o servidor executando o seguinte comando: npm dev ou yarn dev.

Endpoints:
A API possui os seguintes endpoints:

GET /routes
Retorna a lista de rotas cadastradas.

Parâmetros de consulta:

page (opcional) - número da página a ser retornada (padrão: 1).
limit (opcional) - número de rotas por página a ser retornado (padrão: 20).
Resposta:

    [
    {
        "id": 1,
        "origin": "São Paulo",
        "destination": "Rio de Janeiro",
        "distance": 435.6,
        "duration": 26400,
        "createdAt": "2022-02-10T15:06:42.000Z",
        "updatedAt": "2022-02-10T15:06:42.000Z"
    },
    {
        "id": 2,
        "origin": "Belo Horizonte",
        "destination": "Curitiba",
        "distance": 979.2,
        "duration": 50400,
        "createdAt": "2022-02-10T15:06:42.000Z",
        "updatedAt": "2022-02-10T15:06:42.000Z"
    }
    ]

GET /routes/:id
Retorna uma rota específica.

Parâmetros de rota:

id - ID da rota desejada.
Resposta:

    {
    "id": 1,
    "origin": "São Paulo",
    "destination": "Rio de Janeiro",
    "distance": 435.6,
    "duration": 26400,
    "createdAt": "2022-02-10T15:06:42.000Z",
    "updatedAt": "2022-02-10T15:06:42.000Z"
    }

POST /routes
Cadastra uma nova rota.

Corpo da requisição:

    {
        "start_location_name": "Belo Horizonte, MG, Brasil",
		"start_location_lat": "-19.919052",
		"start_location_lng": "-43.9386685",
		"end_location_name": "Goiânia, GO, Brasil",
		"end_location_lat": "-16.6868912",
		"end_location_lng": "-49.2647943",
		"time_route": "11 horas e 13 minutos",
		"distance_route": "886.558",
		"createdAt": "2023-02-16T00:29:40.000Z",
		"updatedAt": "2023-02-16T00:29:40.000Z"
    }


PUT /routes/:id
Atualiza uma rota existente pelo seu ID.

Corpo da requisição

    {
        "start_location_name": "Belo Horizonte, MG, Brasil",
		"start_location_lat": "-19.919052",
		"start_location_lng": "-43.9386685",
		"end_location_name": "Goiânia, GO, Brasil",
		"end_location_lat": "-16.6868912",
		"end_location_lng": "-49.2647943",
		"time_route": "11 horas e 13 minutos",
		"distance_route": "886.558",
		"createdAt": "2023-02-16T00:29:40.000Z",
		"updatedAt": "2023-02-16T00:29:40.000Z"
    }

Resposta de sucesso

    {
        "id": integer,
        "start_location_name": string,
		"start_location_lat": string,
		"start_location_lng": string,
		"end_location_name": string,
		"end_location_lat": string,
		"end_location_lng": string,
		"time_route":string,
		"distance_route": string,
		"createdAt": date,
		"updatedAt": date
    }

    DELETE /routes/:id
Deleta uma rota existente pelo seu ID.

Resposta de sucesso
    {
    "message": "Rota deletada com sucesso."
    }

Licença
Este projeto está licenciado sob a licença MIT.

Autor:
Moises Capelari - msscapelari@gmail.com

