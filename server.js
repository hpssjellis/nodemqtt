'use strict';

const common = require('./common'),
      mqtt = require('mqtt'),
      client = mqtt.connect(`mqtt://${common.MQTT_BROKER}`);

client.on('connect', () => {
    client.subscribe(common.REGISTER_TOPIC);
    client.subscribe(common.DATA_TOPIC);
});

client.on('message', (topic, message) => {
    switch (topic) {
        case common.REGISTER_TOPIC:
            console.log(`Registering sensor ID: ${message}`);
            break;
        case common.DATA_TOPIC:
            console.log(`Received sensor message: ${message}`);
            break;
        default:
            console.log(`No handler for topic ${topic}`);
    }
});

console.log('Server is waiting for messages.');