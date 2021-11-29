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
const discord = require('discord.js');
const client = new Discord.Client();
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
client.on("ready", () => {
  function YousamPower() {
    let sezar = [`${PREFIX}play` , `${PREFIX}help` ]
    let Power = Math.floor(Math.random() * sezar.length);
    client.user.setActivity(sezar[Power], {type: "PLAYING"});//can be LISTENING, WATCHING, PLAYING, STREAMING
  }; setInterval(YousamPower, 5000)
    client.user.setStatus("dnd")//can be invesible, online, idle, dnd
});
client.login(config.token);

const clinet = new Discord.Client();
const prefix = ';';
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split("invite")

    if (message.content.startsWith(`${prefix}invite`)) {
        let inviteEmbed = new discord.MessageEmbed()
      inviteEmbed.setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      inviteEmbed.setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      inviteEmbed.setTitle(`Ba Invite Bot Be Servert Azash Hemaiat Kon☺ ${client.user.username}`)
      inviteEmbed.setDescription(`**Montazer chi hasti🤨? Bodo mano be servert add kon🙂😘 \n\n [Invite Link](https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=137775017040&scope=bot)**`)
      inviteEmbed.setURL(`https://discord.gg/5GYNec4urW`)
      inviteEmbed.setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
      inviteEmbed.setColor("RANDOM")

            message.channel.send(inviteEmbed)
    }
})

load();
bot.login(config.token);


//serverlist
client.on('message', message => {
  if (message.content === `${prefix}serverlist`) { 
    const Guilds = client.guilds.cache.array().map((G, I) => `${I + 1}. **${G.name}** - **${G.id}**`).join("\n");
    if (!Guilds) return message.channel.send("No Guild");
    return message.channel.send(Guilds, { split: { char: "\n" } }); }
});
