// PRODUCER -> Responsável por mandar a mensagem para o RabbitMQ
const amqp = require("amqplib/callback_api");
const lote1 = [
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
const lote2 = [
  {
    message: "Mensagem 6",
  },
  {
    message: "Mensagem 7",
  },
  {
    message: "Mensagem 8",
  },
  {
    message: "Mensagem 9",
  },
  {
    message: "Mensagem 10",
  },
];
const lote3 = [
  {
    message: "Mensagem 11",
  },
  {
    message: "Mensagem 12",
  },
  {
    message: "Mensagem 13",
  },
  {
    message: "Mensagem 14",
  },
  {
    message: "Mensagem 15",
  }
];
const lote4 = [
  {
    message: "Mensagem 16",
  },
  {
    message: "Mensagem 17",
  },
  {
    message: "Mensagem 18",
  },
  {
    message: "Mensagem 19",
  },
  {
    message: "Mensagem 20",
  }
];
const lote5 = [
  {
    message: "Mensagem 21",
  },
  {
    message: "Mensagem 22",
  },
  {
    message: "Mensagem 23",
  },
  {
    message: "Mensagem 24",
  },
  {
    message: "Mensagem 25",
  }
];


// Conexão com o RabbitMQ
amqp.connect("amqp://localhost", (connError, connection) => {
  if (connError) throw connError;

  //Create channel
  connection.createChannel((channelError, channel) => {
    if (channelError) throw channelError;

    //Assert queue : verify if the queue exists, if not, create it
    const QUEUE = "lavenderias";
    channel.assertQueue(QUEUE);

    //Send message to queue
    sendMessageRMQ(lote1);
    sendMessageRMQ(lote2);
    sendMessageRMQ(lote3);
    sendMessageRMQ(lote4);
    sendMessageRMQ(lote5);
    console.log(`Messages sent to ${QUEUE}`);
    function sendMessageRMQ(lote){
      lote.forEach(element => {
        channel.sendToQueue(QUEUE, Buffer.from(element.message));
      });
    };
  });
});
