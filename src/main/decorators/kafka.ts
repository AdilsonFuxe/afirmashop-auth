import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'auth-svc',
  brokers: ['localhost:9092', 'localhost:9101'],
});

export default kafka;
