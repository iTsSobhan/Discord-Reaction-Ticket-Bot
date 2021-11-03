const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));
const prefix = 'BOT-PREFIX';

exports.run = async (bot, message, args, functions) => {

    if (message.content === ';help', ';h',';help me' , ';help') {
        message.react('🙏🏻')
    } 

let embed = new Discord.MessageEmbed()

   .setTitle(`Ticket Help Commands`)
   .setAuthor(`Ticket Help ${message.client.user.username }`,`${message.client.user.displayAvatarURL({ format: "png" })}`)
   .setThumbnail('https://cdn.discordapp.com/attachments/902034619791196221/905043997280567346/e4b59a9ad0fafa675c7760e7f6671d0e.gif')
   .setColor(`RANDOM`)
   .addField("Set Kaedane Channel Baraie Log", `Az In Command Baraye Set Kardan Log Dar Channel Khod Estefade Konid 
   > ${prefix}setlogs <Tag Channele Morede Nazar>`, false)
   .addField("Sakht Ticket", `Az Command Baraye Sakhtane Ticket Estefade Konid 
   > ${prefix}ticket`, false)
   .addField("Bastan Ticket", `Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid 
   > ${prefix}close`, false)
   .addField("Gereftan Linke Invite", `Ba In Command Mitavand Link Invite Bot Ro Begirid
   > ${prefix}invite`, false)
      
.setFooter(`Requested by ${message.author.username} | Created By Sobhan.SRZA#2153 :)`, `${message.author.displayAvatarURL()}`)
   return message.channel.send(embed);

}
exports.help = {
    name: "help",
   aliases: ['h','help me' , 'help']
}
