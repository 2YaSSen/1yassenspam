const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541679676343582731")
setInterval(function() {
channel.send(`أيوب ليزوم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
