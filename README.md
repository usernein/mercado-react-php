# mercado-react-php

Desafio técnico realizado com PHP, ReactJS e TailwindCSS

O desafio consiste em desenvolver um programa para um mercado que contenha:

- Cadastro dos produtos
- Cadastro dos valores percentuais de imposto de cada categoria de produto
- Tela de vendas
- Visualização do valor de cada item multiplicado pela quantidade adquirida
- Visualização do valor pago de impostos em cada item
- Vendas registradas no banco de dados
- Uso de banco de dados PostgreSQL ou MSSQL Server
- Uso de PHP 7.4 ou superior

## Demo

[Demo on Netlify](https://incredible-gelato-659c07.netlify.app/?demo=true)

## Como executar (testes locais)

> É necessário ter php>=7.4 instalado com a extensão pgsql habilitada

1. Clone o repositório
2. Execute `docker-compose up -d --build` na pasta raiz do projeto para preparar o ambiente PostgreSQL já com as tabelas criadas e populadas com dados de produtos, categorias e vendas fictícias.
3. Execute `php -S 0.0.0.0:8080` na pasta `www`. Um servidor web será iniciado para acessar tanto a api quanto o cliente frontend.
4. Acesse `localhost:8080`.

O frontend espera que a API esteja rodando localmente na porta 8080.
Caso prefira subir o ambiente PostgreSQL manualmente, edite o arquivo `www/config/database.env_example` e renomeie para `database.env`, mantendo na mesma pasta.

## Como desenvolver

- O desenlvimento do frontend é concentrado no diretório `react-app`. Para testes durante o desenvolvimento, é recomendado utilizar o comando `npm start` no diretório `react-app`.
- Para mover para o diretório utilizado pelo web server do PHP, utilize o comando `npm run build` no diretório `react-app`. Os arquivos gerados pelo build serão automaticamente movidos para a pasta `www`.
