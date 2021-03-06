const { Kafka, logLevel } = require("kafkajs");
const kafka = new Kafka({
  brokers: ["10.10.30.102:9092"],
});
const producer = kafka.producer();

const run = async (type, record) => {
  // Producing
  console.log("running kafka =============+>");
  await producer.connect();
  switch (type) {
    case "time":
      await producer.send({
        topic: "13220-13220-d_time",
        messages: [{ value: record }],
      });
      break;
    case "depth":
      await producer.send({
        topic: "13220-13220-d_depth",
        messages: [{ value: record }],
      });
      break;
    default:
      break;
  }
};

module.exports = {
  run: run,
};
