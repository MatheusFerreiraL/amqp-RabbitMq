# Projeto enfileiramento de mensagens 
Projeto da matéria de Sistemas Distribuídos usando o protocolo AMQP com Javascript no back-end (NodeJS) e o RabbitMQ, para enfileiramento de mensagens. 

Como descrito no enunciado do trabalho, as mensagens seguem o modelo `publisher-subscriber`, portanto somente a Matriz pode publicar mensagens na sua única fila de mensagens. 

Ainda, no que tange o enunciado do projeto, existem 5 lotes de mensagens já prontos, mas não há restrição quanto aumentar ou diminuir a quantidade de lotes.

Há a limitação, por ter sido explicitamente solicitado que as mensagens estivessem em lotes, que outros lotes de mensagens,se forem criados, sigam o modelo abaixo:

``` 
const lote = [
  {
    message: "Mensagem 1",
  },
  {
    message: "Mensagem 2",
  },
  {
    message: "Mensagem 3",
  },
  {
    message: "Mensagem 4",
  },
  {
    message: "Mensagem 5",
  },
];
```
## Setup para execução do projeto

A execução para windows deve seguir as etapas abaixo:

1. Instalação do RabbitMQ:

Abrir <a href="https://www.erlang.org/downloads">este site</a> e clicar, canto direito, em `Download Windows Installer`. 

No site do RabbitMQ, <a href="https://www.rabbitmq.com/install-windows.html">instalar</a>, na caixa de "Direct Downloads" (que fica no corpo da página), instalar o `rabbitmq-server-3.x.x-exe`.

Para instalação do OTP da erlang, os seguintes passos devem ser cumpridos:

- Abrir o instalador;  
- Desmarcar a opção 'Microsoft DLL's', somente;
- Escolher o path para instalação (geralmente, disco C); 
- "Next" e "Install", em sequência. 

Ao fim da instalação, seguimos para a instalação de fato do Server do Rabbit (segundo arquivo instalado):

- Abrir o instalador;
- Deixar todas as opções marcadas; 
- Escolher o path para instalação (geralmente, disco C); 

Finalizadas ambas instalações, no menu de navegação, abra o `RabbitMQ Command Prompt` e execute o comando `rabbitmq-plugins enable rabbitmq_management`.

Ao fim do comando, uma mensagem `... started 3 plugins` deve ser mostrada. Reinicie o computador. 


Para conferir se o server do RabbitMq já está em funcionamento: no navegador, acesse pelo URL `localhost:15672` e deverá encontrar uma página de administrador do software. 

O usuário e senha são, por padrão: guest
```
senha: guest
password: guest
```
Faça o login e, nas abas superiores, acesse o campo `Queues` (onde será possível acompanhar o envio das mensagens).

## Estrutura de arquivos do projeto

O projeto conta com os seguintes arquivos: 

- `.gitignore`;
- `package.json`: contém os pacotes e dependências necessários para executar o projeto; 
- `sender`: A matriz, responsável por encaminhar de os lotes de mensagens que serão consumidos;
- `receiver`: Filial, responsável por consumir a mensagem encaminhada pela Matriz;


## Executando o projeto

Basta abrir a pasta do projeto do terminal e rodar o comando `node sender` para ativar a matriz e `node receiver` para a filial. 
