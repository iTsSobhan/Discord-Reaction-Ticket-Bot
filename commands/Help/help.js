const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));
const prefix = ';';

exports.run = async (bot, message, args, functions) => {

    if (message.content === ';help', ';h',';help me' , ';help') {
        message.react('🙏🏻')
    } 

let embed = new Discord.MessageEmbed()

   .setTitle(`Ticket Help Commands`)
   .setAuthor(`Ticket Help ${message.client.user.username }`,`${message.client.user.displayAvatarURL({ format: "png" })}`)
   .setThumbnail('https://cdn.discordapp.com/attachments/902034619791196221/905043997280567346/e4b59a9ad0fafa675c7760e7f6671d0e.gif')
   .setColor(`RANDOM`)
   .addField(`**> ${prefix}setlogs <Tag Channele Morede Nazar>**`, '`Az In Command Baraye Set Kardan Log Dar Channel Khod Estefade Konid`', false)
   .addField(`**> ${prefix}ticket**`, '`Az Command Baraye Sakhtane Ticket Estefade Konid`', false)
   .addField(`**> ${prefix}close**`, '`Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid`', false)
   .addField(`**> ${prefix}invite**`, '`Ba In Command Mitavand Link Invite Bot Ro Begirid`', false)
   .addField(`**> ${prefix}serverlist**`, '`Ba In Command Mitavand Liste TaMamie Server Hayi Ke Bot Adde Ro Begirid`', false)
.setFooter(`Requested by ${message.author.username} | Created By Sobhan.SRZA#2153 :)`, `${message.author.displayAvatarURL()}`)
  embed.addField(`**Links**`, `**[Support Server](${"https://discord.gg/4pUbjscCmA"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=137775017040&scope=bot)**`)

   return message.channel.send(embed);

}
exports.help = {
    name: "help",
   aliases: ['h','help me' , 'help']
}
