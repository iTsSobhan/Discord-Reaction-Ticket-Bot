const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {
function epoch (date) {
  return Date.parse(date)
}
const dateToday =  new Date(); 
const TimeStampDate = epoch(dateToday) / 1000;
  let logsChannel = message.guild.channels.cache.find(c => c.id === db.get(`logs_${message.guild.id}`));
  let support = message.guild.roles.cache.find(r => r.name === "Ticket Support");

// Embed Messages
  let embed = new Discord.MessageEmbed()
        .setTitle(`⚠| Inja Channel Ticket Nist`)
        .setColor(color.none)
        .setDescription(`Inja Channele Ticket Nist Va Nemitonid Az In Command Estefade Konid`)
        .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)

       let staffEmbed = new Discord.MessageEmbed()
      .setAuthor(`🗑️| Dar Khast Delete Shodan Ticket`)
      .setColor(color.none)
      .setDescription(`Yek User Ba Role ${support} Darkhast Bastn Va Delete Krdan Ticket Kard`)
      .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .addField(`Etelat`, `**Tavasote :** \`${message.author.tag}\`\n**ID :** \`${message.author.id}\`\n**Ticket :** \`${message.channel.name}\`\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);
    
        let embed2 = new Discord.MessageEmbed()
        .setColor(color.green)
        .setTitle(`🗑️ | Ticket Darkhaste Pack Shodan AnjamShod`)
        .setDescription(`baraye Bastane Ticket Az 🗑️ Estefade Konid Va Dar Gheyre In Sorat Hich Vakoneshi Anjam Nadid.`);
  
if (message.channel.name.startsWith(`ticket-`)){
      if(!support) return functions.errorEmbed(message, message.channel, "Error");
      if(!args[0] === "force"){
  
        message.channel.delete();

    
      } else {
    
        message.channel.send(embed2).then(m =>{ 
          m.react(`🗑️`)
          m.react(`❌`)
        });
      }
     }else return message.channel.send(embed)

    }



exports.help = {
    name: "close",
    aliases: ['c','cl']
}
