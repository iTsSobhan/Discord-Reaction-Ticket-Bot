const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));
const db = require("quick.db");


exports.run = async (bot, message, args, functions) => {
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`)||process.env.PREFIX;
let embed = new Discord.MessageEmbed()
   .setTitle(`Ticket Help Commands`)
   .setAuthor(`Ticket Help ${bot.user.username }`,`${bot.user.displayAvatarURL({ format: "png" })}`)
   .setThumbnail('https://cdn.discordapp.com/attachments/902034619791196221/905043997280567346/e4b59a9ad0fafa675c7760e7f6671d0e.gif')
   .setColor(`RANDOM`)
   .addField(`**> ${prefix}setlogs <Tag Channele Morede Nazar>**`, '`Az In Command Baraye Set Kardan Log Dar Channel Khod Estefade Konid`', false)
   .addField(`**> ${prefix}ticket**`, '`Az Command Baraye Sakhtane Ticket Estefade Konid`', false)
   .addField(`**> ${prefix}close**`, '`Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid`', false)
   .addField(`**> ${prefix}invite**`, '`Ba In Command Mitavand Link Invite Bot Ro Begirid`', false)
   .addField(`**> ${prefix}serverlist**`, '`Ba In Command Mitavand Liste TaMamie Server Hayi Ke Bot Adde Ro Begirid`', false)
     .addField(`**> ${prefix}about**`, '`Etealati Az Bot Ro Neshon Mide`', false)
     .addField(`**> ${prefix}ping**`, '`Ping Bot Ro Neshon Mide`', false)
     .addField(`**> ${prefix}report <Matn Gozaresh>**`, '`Baraie Gozaresh Bug Haie Mojod :)`', false)
      .addField(`**> ${prefix}setprefix <New-Prefix>**`, '`Prefix Delkhah Dar Server`', false)
.setFooter(`Requested by ${message.author.username} | Created By Mr.SIN RE#1528 :)`, `${message.author.displayAvatarURL()}`)
  embed.addField(`**Links**`, `**[Support Server](${"https://discord.gg/5GYNec4urW"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=137775017040&scope=bot)**`)

   return message.channel.send(embed).then(message.react('🙏🏻'));
}
exports.help = {
    name: "help",
   aliases: ['h','help me' , 'help']
}
