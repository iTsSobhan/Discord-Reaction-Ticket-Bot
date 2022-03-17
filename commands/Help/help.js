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
   .setColor(color.none)
   .addField(`**> ${prefix}setlogs <Channel>**`, '**Description:**``Az In Command Baraye Set Kardan Log Dar Channel Khod Estefade Konid`', true)
   .addField(`**> ${prefix}setup <Channel> <Role> <Payam>**`, '**Description:**`Az In Command Baraye Set Kardan Payam Ticket Sakhte Shode Estefade Konid`', true)
   .addField(`**> ${prefix}setprefix <New-Prefix>**`, '**Description:**``Prefix Delkhah Dar Server`', true)
   .addField(`**> ${prefix}ticket**`, '**Description:**``Az Command Baraye Sakhtane Ticket Estefade Konid`', true)
   .addField(`**> ${prefix}close**`, '**Description:**``Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid`', true)
   .addField(`**> ${prefix}invite**`, '**Description:**``Ba In Command Mitavand Link Invite Bot Ro Begirid`', true)
   .addField(`**> ${prefix}about**`, '**Description:**``Etealati Az Bot Ro Neshon Mide`', true)
   .addField(`**> ${prefix}ping**`, '**Description:**``Ping Bot Ro Neshon Mide`', true)
   .addField(`**> ${prefix}report <Payam>**`, '**Description:**``Baraie Gozaresh Bug Haie Mojod :)`', true)
   .setFooter(`Requested by ${message.author.username} | Created By Mr.SIN RE#1528 :)`, `${message.author.displayAvatarURL()}`)

      const { MessageButton } = require('discord-buttons');
 let btn2 = new MessageButton()
    .setStyle('url') 
    .setLabel('🤖Invite Bot') 
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot`)
     let btn = new MessageButton()
    .setStyle('url') 
    .setLabel('🦾Server Support') 
    .setURL(`https://discord.gg/5GYNec4urW`)
   return message.channel.send( { button: [btn,btn2],embed: embed }).then(message.react('🙏🏻'));
}
exports.help = {
    name: "help",
   aliases: ['h','help me' , 'help']
}
