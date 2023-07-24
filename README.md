# Projeto Webhook

Este é um projeto de uma aplicação web em Node.js para receber e processar webhooks.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.
 
## Configuração

Clone este repositório.
Navegue até o diretório do projeto.
Instale as dependências:

*npm install*

## Como executar

*npm start*

A aplicação estará em execução na porta 3000. Você pode acessá-la em http://localhost:3000.

    Utilize uma ferramenta como o Postman para enviar uma requisição POST para http://localhost:3000/webhook/carro-cadastrado/ com um payload no formato demonstrado na pasta docs da api/cars. A aplicação irá processar o webhook e exibir uma mensagem de sucesso.

## Docker

Se preferir, você também pode executar a aplicação em um container Docker. Certifique-se de ter o Docker instalado em sua máquina e, em seguida, execute os seguintes comandos:

*docker build -t webhook .*

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

*docker run -p 3000:3000 webhook*


Isso criará um container Docker e executará a aplicação na porta 3000.
# webhook-cars
