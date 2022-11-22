// RECEIVER ->Vai receber a mensagem encaminhada pelo SENDER
const amqp = require("amqplib/callback_api");

// Conexão com o RabbitMQ
amqp.connect("amqp://localhost", (connError, connection) => {
  if (connError) throw connError;

  //Create channel
  connection.createChannel((channelError, channel) => {
    if (channelError) throw channelError;

    //Assert queue : verify if the queue exists, if not, create it (never create a repeated queue)
    const QUEUE = "lavenderias";
    channel.assertQueue(QUEUE);

    //Receive message from queue
    channel.consume(
      QUEUE,
      msg => {
        console.log(
          `Message received from ${QUEUE}: ${msg.content.toString()}`
        ); //message is received as a buffer, so we need to convert it to string
        //Message is consumed, so we need to acknowledge it to specify that we received it -> passed as a third parameter
      },
      { noAck: true }
    );
  });
});
