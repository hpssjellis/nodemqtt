'use strict';

const common = require('./common'),
      mqtt = require('mqtt'),
      client = mqtt.connect(`mqtt://${common.MQTT_BROKER}`);

let sensorId;

if (process.argv.length === 3) {
    sensorId = process.argv[2]; 
} else {
    console.log('Usage: node sensor.js <SENSOR ID>');
    process.exit(1);
}

client.on('connect', () => {  
  client.publish(common.REGISTER_TOPIC, sensorId);

  setInterval(() => {
	let payload = `${sensorId}|` + new Date().toString();
	client.publish(common.DATA_TOPIC, payload);
	console.log(`Sending data: ${payload}`);
  }, 5000);
});

console.log(`Started sensor ${sensorId}`);