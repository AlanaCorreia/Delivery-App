# Projeto App de Delivery!

O projeto desta aplicação foi realizado por uma equipe de 4 pessoas, finalizando o módulo de Backend do curso de Desenvolvimento Web da Trybe.
O mesmo é responsável por criar e integrar o back-end, o front-end e um banco de dados relacional MySQL, criando uma plataforma de delivery de cerveja. 🍻

## Contexto do projeto

A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos.

A ideia da equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

<details>
  <summary>
    <strong>👨‍💻 O que deverá ser desenvolvido</strong>
  </summary><br>

  ## O aplicativo precisa:

  - Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes:
    (1) A pessoa cliente, que compra da lista de produtos;
    (2) A pessoa vendedora, que aprova, prepara e entrega;
    (3) A pessoa administradora, que gerencia quem usa o aplicativo;
  
  - Cadastro de usuário: tela de registro, onde é possível registrar um novo usuário e, sendo efetivado o cadastro, o usuário já é redirecionado para a tela com a lista dos produtos.

  - Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;

  - Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;


 ## Fluxo da aplicação:

  * Fluxo Comum:

    - Tela de Login;
    - Tela de Registro;
  
  * Fluxo do Cliente:

    - Tela de Produtos;
    - Tela de Checkout;
    - Tela de Pedidos;
    - Tela de Detalhes do Pedido;

  * Fluxo da Pessoa Vendedora:
  
    - Tela de Pedidos;
    - Tela de Detalhes/Controle do Pedido;

  * Fluxo da Pessoa Administradora:
  
    - Tela de gerenciamento de usuários;

</details>

<details>
  <summary>
    <strong>Construído com:</strong>
  </summary><br>

  * Node.js;
  * Express.js;
  * Mysql;
  * React;
  * Axios;
  * Redux;
  * Styled-Component;
  * Sequelize;
  * JsonWebToken;
  * Criptografia com md5;
  * Nodemon;
  * Trello;

</details>

<details>
  <summary>
    <strong>:bicyclist: Começando</strong>
  </summary><br>

  ### :spiral_notepad: Pré-requisitos
  Sem docker: node v16 >

  Com docker: docker

  ### :hammer_and_wrench: Instalação
  1- Clone o projeto em sua maquina rodando o seguinte comando no terminal:

  ``` git clone git@github.com:AlanaCorreia/Delivery-App.git ```

  2- Depois de clonado, entre no diretório:

  ``` cd project-delivery-app ```

  3- Instale as dependências
    Para isso, use o seguinte comando: ``` npm install ```

    Em seguida, instale as dependências de ambos front e back com:

    Para isso, entre na pasta front-end e instale as suas dependências ``` cd front-end && npm install ``` .
    Para isso, entre na pasta back-end e instale as suas dependências ``` cd back-end && npm install ``` .

  4- Para inicializar a aplicação sem docker, é necessario ter uma instância do MySQL rodando na porta 3306

    Por default, a senha do banco que a aplicação espera é "123456", mas caso tenha colocado uma senha própria, lembre de atualizar o arquivo de configuração do sequelize na pasta /app/backend/src/database/config

  E então para iniciar a aplicação, entre em app/backend e app/backend, e rode o comando ``` npm start ``` em ambos

  Caso tenha optado por iniciar a aplicação via Docker, basta rodar ``` npm run compose:up ``` na pasta /app.

  Para acessar a aplicação e testa-la manualmente, acesse a pagina http://localhost:3000/login .

</details>
