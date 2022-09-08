# Desafio DDSOLUTIONS - Backend / DevOps
## Descrição
Esse desafio tem por objetivo definir o nível de conhecimento sobre o desenvolvimento backend e DevOps.
Tecnologias envolvidas:
- Nodejs (opcional);
- Typescript (opcional);
- Eslint;
- Prettier;
- Express;
- Typeorm;
- Celebrate;
- Swagger;
- Docker;
- Docker compose;
- Nginx (proxy reverso);
- Postgres;
- Mongo;
- EC2;
- Amazon RDS;

## Desafio
Desenvolver uma API de gerenciamento de pagamentos via serviço ASAAS. Para utilização do serviço ASAAS, criar uma conta na Sandbox para integração e consultar documentação da API.
- Conta SandBox: https://sandbox.asaas.com/onboarding/createAccount 
- Documentação API: https://asaasv3.docs.apiary.io/#

### Endpoints
Rotas de pagadores (PS: os dados dos pagadores deve persistir banco próprio após criação no Asaas):
- '/customers' (Criação de pagador):
  - Informações para cadastro: cpf, nome, email, telefone;
  - Não deve permitir criação de pagador com CPF já cadastrado (consultando somente banco próprio);
- '/customers/{customer_id}' (Atualização de informações de pagador):
	- Informações para atualização: nome, email, telefone;
	- Deve permitir atualização parcial, ou seja, atualizar só o nome, só o email ou tudo;
	- Atualização dever ser feita em banco próprio e no Asaas;
- '/customers/{customer_id}' (Exclusão de pagado):
	- Passar o ID do pagador e excluir no banco próprio e no Asaas;
- '/customers/{customer_id}' (Visualização das informações do cliente):
	- Passar o ID do pagador e buscar no banco próprio as informações persistidas;
- '/customers' (Listagem de pagadores):
	- Fazer listagem paginada dos pagadores com possibilidade de filtragem por nome;

Rotas de cobranças (PS: os dados dos pagadores deve persistir banco próprio após criação no Asaas):
- '/payments' (Criação de cobrança):
	- Informações para criação: ID do cliente, Valor, Data de vencimento, Descrição;
	- O tipo de pagamento (billingType) será somente de PIX;
	- Junto a criação da cobrança deve persistir o QR Code no banco próprio e realizar o retorno completo da cobrança;
- '/payments/{payment_id}' (Exclusão de cobrança):
	- Passar o ID da cobrança;
	- Excluir somente cobrança não pagas;
	- Mudar o valor boleano da coluna deleted no banco próprio;
	- Excluir cobrança no Asaas também;
- '/payments/{payment_id}' (Visualização de cobrança):
	- Passar o ID da cobrança;
- '/payments' (Listagem de cobranças):
	- Fazer listagem paginada das cobranças com possibilidade de filtragem pelo status da cobrança;
- '/payments/asaas' - Recepção de evento ASAAS - WebHook (Se a aplicação for disponibilizada na EC2 - AWS):
	- Cadastrar o IP da máquina da EC2 no webhook do Asaas para receber os eventos ocorrido das cobranças;
	- Os eventos devem atualizar os status da cobrança no banco local;
	- Nos casos de cobranças pagas, criar uma notificação;

Rotas de notificação:
- '/notifications' (Listagem de notificações):
  - Listar as notificações criadas no webhook;
  - Uma notificação depois de listada uma vez, deve-se modificar o atributo 'read' de false para true;
  - Possibilidade de filtragem por notificações lidas e não lidas;
- '/notifications/{notification_id}' (Excluir notificação)
  - Deve excluir o registro da notificação do banco de dados;

### Entidades
- Pagador (Postgres):
	- id (uuid autogerado);
	- customer_id (ID do pagador no ASAAS);
	- name;
	- cpf;
	- email (opcional);
	- phone (opcional);
	- created_at (default);
	- updated_at (default);
- Cobrança (Postgres):
	- id (uuid autogerado);
	- payment_id (ID do pagador no ASAAS);
	- id do pagador;
	- valor;
	- dueDate;
	- description;
	- status;
	- encodedImage;
	- payload;
	- deleted  (default = false);
	- created_at (default: now());
	- updated_at (default: now());
- Notificação (Mongo):
	- _id (ID default do mongo);
	- id (uuid autogerado);
	- payment_id;
	- description;
	- read (default: false);
	- created_at (default: now());
	- updated_at (default: now());

## Níveis de implementação
Nível 1:
- Conseguir rodar localmente (aplicação, postgres, mongo);

Nível 2:
- Conseguir rodar parcialmente docker (postgres e mongo) e localmente (aplicação);
- Conseguir rodar tudo em docker (aplicação, postgres, mongo);

Nível 3:
- Conseguir rodar tudo em docker (aplicação, postgres, mongo) com Nginx no docker como proxy reverso;

Nível 4: 
- Conseguir rodar tudo em docker (proxy reverso, aplicação, postgres, mongo) na EC2 AWS;

Nível 5:
- Conseguir rodar aplicação e proxy reverso em docker na AWS e comunicar com o postgres no Amazon RDS e MongoDB Atlas;

## Exemplos
https://github.com/ianmateusES/typeorm-experiment
https://github.com/ianmateusES/search-address-google-api
https://github.com/ianmateusES/gobarber-typescript/tree/master/backend
