const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

if(message && message.deletable) message.delete().catch(e => {});

let embed = new Discord.MessageEmbed()
.setTitle(`Ticket System`)
.setColor('RANDOME')
.setDescription('**Lotfan Dar Sorat Zarorat Ticket Besazid😀**')
      .setThumbnail('https://cdn.discordapp.com/attachments/902034619791196221/905040476355330068/8b7193b2110a034a2fe037437afc80b3.gif')
.addField('Baraye Sakhte Ticket Roye 🎟️ Bezanid','Ba Sakhte Shodane Channele Gadid Bama Mitavanid Sohbat Konid📩')
.setURL('https://discord.gg/xgcZNSjanP')
.setFooter(`Requested by ${message.author.username} | Created By Sobhan.SRZA#2153 :)`, `${message.author.displayAvatarURL()}`)
message.channel.send(embed).then(m => {
  m.react('🎟️');
});

}

exports.help = {
    name: "ticket",
    aliases: ['createticket', "t"]
}