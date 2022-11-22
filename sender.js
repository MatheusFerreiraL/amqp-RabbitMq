// PRODUCER -> Responsável por mandar a mensagem para o RabbitMQ
const amqp = require('amqplib/callback_api');

// Conexão com o RabbitMQ
amqp.connect('amqp://localhost', (connError, connection) => {
  if (connError) throw connError;

  //Create channel
  connection.createChannel((channelError, channel) => {
    if (channelError) throw channelError;
    
    //Assert queue : verify if the queue exists, if not, create it
    const QUEUE = 'lavenderias';
    channel.assertQueue(QUEUE);

    //Send message to queue
    channel.sendToQueue(QUEUE, Buffer.from('NOVA MENSAGEM DA MATRIZ!'));
    console.log(`Message sent to ${QUEUE}`);
  });
});