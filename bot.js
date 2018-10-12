const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("500073403391410206")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('process.env.BOT_TOKEN');
