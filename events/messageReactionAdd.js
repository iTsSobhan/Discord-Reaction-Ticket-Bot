const Discord = require('discord.js');
const functions = require("../functions/functions.js");
const db = require('quick.db');
const fs = require('fs');
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

module.exports = async (bot, reaction, user) => {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();
  let message = reaction.message;
  var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`)||process.env.PREFIX;
  if(!message) return;
  if(user.bot) return;

  let logsChannel = message.guild.channels.cache.find(c => c.id === db.get(`logs_${message.guild.id}`));

  let already = new Discord.MessageEmbed()
  .setColor(color.red)
  .setAuthor(`⛔ | Error`)
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
  .setDescription(`Shoma Faghat Mitavanid Yek Ticket Baz Konid`);

  let success = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`🎟️ | Ticket Sakhte Shod`)
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
  .setDescription(`Ticket Shoma Sakhte Shod . Lotfan Motazere Staff Bashid Ta Be Ticket Shoma Pasokh Bedahand`);
  

let ticketName = db.get(`ticketName_${user.id}_${message.guild.id}`);

  if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket System' && message.embeds[0].description === '**Lotfan Dar Sorat Zarorat Ticket Besazid😀**'){
    if(reaction.emoji.name === "🎟️"){
      if (!message.guild.channels.cache.find(x => x.name === ticketName)) {
        let role = message.guild.roles.cache.find(r => r.name === "Ticket Support");
        if(!role) {
          message.guild.roles.create({
            data:{
            name: "Ticket Support", 
            permissions: 0,
            position: message.guild.me.roles.highest
            }, 
            reason: 'Baraye Didan Ticket Bayad Staff Role Ticket Supporter Dashte Bashand',
                  }).then(role => {
    const HighestRole = message.guild.me.roles.highest; // Your bot's highest role in the Guid.

role.setPosition(HighestRole.position - 1)
                  });
          message.channel.send(`Lotfan Dobare Roye Emoji Click Konid`).then(m => m.delete({timeout: 5000}).catch(e => {}));
          reaction.users.remove(user.id);
          return
        }

        let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']

        message.guild.channels.create(`ticket-${user.tag}`, { permissionOverwrites:[
          {
            deny: 'VIEW_CHANNEL',
            id: message.guild.id
          },
          {
            allow: permsToHave,
            id: user.id
          },
          {
            allow: permsToHave,
            id: role.id
          },
        ],
        reason: `In User Ticket Baz Kard`,
        topic: `**ID:** ${user.id} || **Tag:** ${user.tag} | ${prefix}close`
      }).then(channel => {
        db.set(`ticketName_${user.id}_${message.guild.id}`, channel.name);
function epoch (date) {
  return Date.parse(date)
}
const dateToday =  new Date(); 
const TimeStampDate = epoch(dateToday) / 1000;

        let createdEmbed = new Discord.MessageEmbed()
        .setAuthor(`📝 | Yek Ticket Sakhte Shod`)
        .setTimestamp()
        .setColor(color.none)
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .setDescription(`Yek Fard Ticket Baz Kard Va Motazere Pasokhgoii Staff Hast`)
        .addField(`Etelat`, `**Tavasote :** \`${user.tag}\`\n**ID :** \`${user.id}\`\n**Ticket :** ${channel}\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);

        if(logsChannel) logsChannel.send(createdEmbed);
        channel.send(`${user}`, {embed: success});
  let userTicket = new Discord.MessageEmbed()
        .setAuthor(`✔ | Ticket Sakhte Shod`)
        .setTimestamp()
        .setColor(color.none)
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .setDescription(`Yek Fard Ticket Baz Kard Va Motazere Pasokhgoii Staff Hast`)
        .addField(`Etelat`, `**Ticket :** ${channel}\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);

    message.edit(userTicket).then(message.reactions.removeAll())
      })
      reaction.users.remove(user.id);
      return;
    }else {
      message.edit({embed: already}).then(message.reactions.removeAll());
    }
    } else {
      reaction.users.remove(user.id);
    }
  if(reaction.emoji.name === "❌"){
      let CancellEmbed = new Discord.MessageEmbed()
        .setAuthor(`❌| Sakhte Shodan Cancel Shod`)
        .setColor(color.none)
        .setDescription(`User Darkhaste Khod Ra Baraye Sakhte Shodan Ticket Laghv Kard`)
        .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
          message.edit(CancellEmbed)
          message.reactions.removeAll()
        }

  }

  // ========================= 
  //====closeTicket
let embedMessageFind = message.embeds.length === 1 && message.embeds[0].title === '🗑️ | Ticket Darkhaste Pack Shodan AnjamShod' && message.embeds[0].description === `baraye Bastane Ticket Az 🗑️ Estefade Konid Va Dar Gheyre In Sorat Hich Vakoneshi Anjam Nadid.`;
  if(embedMessageFind){
    if(reaction.emoji.name === "🗑️"){
function epoch (date) {
  return Date.parse(date)
}
const dateToday =  new Date(); 
const TimeStampDate = epoch(dateToday) / 1000;

        let deletedEmbed = new Discord.MessageEmbed()
        .setAuthor(`🗑️| Delete Shodan Ticket`)
        .setColor(color.none)
        .setDescription(`User Ticket Khod Ra Baraye Delete Shodan Taiid Kard Va Delete Shod`)
        .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .addField(`Etelat`, `**Tavasote :** \`${user.tag}\`\n**ID :** \`${user.id}\`\n**Ticket :**\` ${message.channel.name}\`\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);
      
        if(logsChannel) logsChannel.send(deletedEmbed);
        db.delete(`ticketName_${message.author.id}_${message.guild.id}`);
        message.channel.delete();
      }
        if(reaction.emoji.name === "❌"){
      let CancellEmbed = new Discord.MessageEmbed()
        .setAuthor(`❌| Delete Shodan Cancel Shod`)
        .setColor(color.none)
        .setDescription(`User Ticket Khod Ra Baraye Delete Shodan Laghv Kard`)
        .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
          message.edit(CancellEmbed)
          message.reactions.removeAll()
        }
    
  }

}
