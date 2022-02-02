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
const bot  = new Discord.Client({
    disableEveryone: true,
    autoReconnect: true,
    disabledEvents: ["TYPING_START"],
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
});
const prefix = process.env.PREFIX;
require('discord-buttons')(bot);
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();
const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");
const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}


//status
const srza = require('discord.js');
srza.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";
bot.on("ready", () => {
   function YousamPower() {
    let vazyiat = ["dnd","idle","online"] // online | dnd | idle | offline
    let godrat = Math.floor(Math.random() * vazyiat.length)
   bot.user.setPresence({
     status: vazyiat[godrat] })
}; setInterval(YousamPower, 3000)
   function srza() {
    let sezar = [`${prefix}help`, `${prefix}play`,"Mr.SIN RE" , `🔰Sizar Team🔰`,`${bot.guilds.cache.size} Servers` ]
    let Power = Math.floor(Math.random() * sezar.length);
    let statusPlay = ["LISTENING","WATCHING","PLAYING"] //can be LISTENING, WATCHING, PLAYING, STREAMING  
    let godratPlay = Math.floor(Math.random() * statusPlay.length);     
   bot.user.setActivity(sezar[Power], {type: statusPlay[godratPlay]});
        }; setInterval(srza, 3000)
  console.log(`${bot.user.tag} IS ONLINE`)
});



//prefix of bot
bot.on('message', async message => {
if(!message.guild || message.author.bot) return;
if (message.content === `${prefix}prefix`) {
              var prf = await require('quick.db').fetch(`prefix_${message.guild.id}`)||process.env.PREFIX;
                   let errorprefixEmbed = new Discord.MessageEmbed()
                              .setColor("RANDOM")
                               .setThumbnail(bot.user.displayAvatarURL())
                               .setTimestamp(Date.now())
                               .setAuthor(`prefix of ${bot.user.tag} shows👌🏻`,bot.user.displayAvatarURL())
                               .setFooter(`prefix shows to ${message.author.tag} |`,message.author.displayAvatarURL())
                               .setDescription(`Prefix Dar In Server **${prf}** ASt`)
                message.channel.send(errorprefixEmbed)

    }
})

load()
bot.login(process.env.TOKEN);


