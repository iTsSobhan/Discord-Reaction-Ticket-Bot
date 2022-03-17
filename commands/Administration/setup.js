const { MessageButton, MessageActionRow } = require('discord-buttons');
const Discord = require('discord.js');
const db = require('quick.db');
const dateFormat = require('dateformat');
const fs = require('fs');
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {
        try {
            let logsChannel = message.guild.channels.cache.find(c => c.id === db.get(`logs_${message.guild.id}`));
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || process.env.PREFIX;
            var ticketChannel = message.mentions.channels.first() || bot.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name == args[0]) || message.channel;
            var adminRole = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1]) || message.guild.roles.cache.find(r => r.name == args[1]);
            var title = message.content.split(' ').slice(3).join(' ') || 'Ticket Bot';
            if (!adminRole) {
                message.channel.send({
                    embed: {
                        title: `❌ | Ekhtar Besorat Zir Setup Konid`,
                        description: `⚠ | Bedin Shekl: ${prefix}setup <Ticket Channel> <Admins Role> <Ticket Message Title>`,
                        color: 0xFF0000
                    }
                })
                 return
            }
  let embed = new Discord.MessageEmbed()
.setAuthor(message.guild.id + '|'+ message.guild.name, message.guild.iconURL({ dynamic: true }))
.setTitle(`✅ | Ticket Set Shod`)
.setColor(color.none)
.setTimestamp()
.setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
.addField(`Channele Ticket Set Shod: `, ticketChannel, true)
.addField(`Tavasote : `, message.author, true)
.addField(`Dar Tarikhe : `, `\`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``, true);

functions.successEmbed(message, logsChannel, `Ticket Roye Channel Setup Shod ${ticketChannel}`);

    message.channel.send(message.author, {embed: embed}).then(m => m.react("✔")).then( message.react('📝'));
            let btn = new MessageButton()
                .setStyle("green")
                .setLabel("Sakhtan Ticket")
                .setEmoji("🎟")
                .setID("createTicket")
            let row = new MessageActionRow()
                .addComponent(btn);
            ticketChannel.send({
                embed: {
                    color: color.none,
                    description: 'Baraie Sakht Ticket Be Dokme Zir Click Konid🎟',
                    title: title
                },
                component: row
            }).then(async function() {
                require('quick.db').set(`TicketAdminRole_${message.guild.id}`, adminRole.id);
            })
        } catch (err) {
            return;
        }    
}

exports.help = {
    name: "setup",
    cooldown: 5,
    aliases: ["tic","tsetup","setup"],
    description: "Setup ticket channel",
}

