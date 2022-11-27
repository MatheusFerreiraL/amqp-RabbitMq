// RECEIVER ->Vai receber a mensagem encaminhada pelo SENDER
const amqp = require("amqplib/callback_api");

// Conexão com o RabbitMQ
amqp.connect("amqp://localhost", (connError, connection) => {
  if (connError) throw connError;

  //Cria canal de comunicação
  connection.createChannel((channelError, channel) => {
    if (channelError) throw channelError;

    //Assert queue : verifica se a fila existe, se não, cria (mas nunca vai criar repetida)
    const QUEUE = "lavenderias";
    const confirmaLeitura = false; //Para confirmar leitura da mensagem e retirá-la da fila, deve ser alterado para true
    channel.assertQueue(QUEUE);

    //Recebe a mensagem da fila
    channel.consume(
      QUEUE,
      msg => {
        console.log(
          `Message received from ${QUEUE}: ${msg.content.toString()}`
        ); //Mensagem é recebida como buffer, então precisa converter para string
        //Mensagem é consumida então precisamos informar que foi lida (para sair da fila)
      },
      { noAck: confirmaLeitura }
    );
  });
});
