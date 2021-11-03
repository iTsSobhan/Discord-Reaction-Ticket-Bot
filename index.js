//express
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hey bot run shod!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost/${port}`)
);

//require
const Discord = require("discord.js");
const config = require("./Storage/config.json");
client.prefix = (message.prefix);

const bot = new Discord.Client({
    disableEveryone: true,
    autoReconnect: true,
    disabledEvents: ["TYPING_START"],
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
  
});
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();
const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");
const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}


//bot status
client.on("ready", () => {
  function YousamPower() {
    let hungry = [`${prefix}play` , `${prefix}help` ]
    let Power = Math.floor(Math.random() * hungry.length);
    client.user.setActivity(hungry[Power], {type: "PLAYING"});//can be LISTENING, WATCHING, PLAYING, STREAMING
  }; setInterval(YousamPower, 7000)
    client.user.setStatus("dnd")//can be invesible, online, idle, dnd
});

load();
bot.login(config.token);
