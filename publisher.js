var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://your_ip_address_of_pc');
client.on('connect', function () {
setInterval(function() {
client.publish('myTopic', 'Hello mqtt');
console.log('Message Sent');
}, 5000);
});
