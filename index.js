//============== Express ==============//
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Hey bot run shod!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost/${port}`)
);

//============== Packeges ==============//
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


//============== Bot-Status ==============//
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
    let sezar = [`${prefix}help`, `${prefix}ticket`, `${bot.guilds.cache.size} Servers` ]
    let Power = Math.floor(Math.random() * sezar.length);
    let statusPlay = ["PLAYING"] //can be LISTENING, WATCHING, PLAYING, STREAMING  
    let godratPlay = Math.floor(Math.random() * statusPlay.length);     
   bot.user.setActivity(sezar[Power], {type: statusPlay[godratPlay]});
        }; setInterval(srza, 3000)
  console.log(`${bot.user.tag} IS ONLINE`)
});



//============== Bot-Prefix ==============//
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

//============== Buttons-Required ==============//
const { MessageButton, MessageActionRow } = require('discord-buttons');
const db = require('quick.db');
const fs = require('fs');
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));
    bot.on('clickButton', async button => {
        try {
function epoch (date) {
  return Date.parse(date)
}
const dateToday =  new Date(); 
const TimeStampDate = epoch(dateToday) / 1000;
            if (button.id == 'createTicket') {
let ticketName = db.get(`ticketName_${button.clicker.user.id}_${button.guild.id}`);
      if (!button.guild.channels.cache.find(x => x.name === ticketName)) {
        button.guild.channels.create(`ticket-${button.clicker.user.tag}`, {
                    permissionOverwrites: [{
                            id: button.clicker.user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        },
                        {
                            id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        }, {
                            id: button.guild.roles.everyone,
                            deny: ["VIEW_CHANNEL"]
                        }
                    ],
                    type: 'text',
                    reason: `In User Ticket Baz Kard`,
                    topic: `**ID:** ${button.clicker.user.id} || **Tag:** ${button.clicker.user.tag} | ${prefix}close`

                }).then(async function(channel) {
    db.set(`ticketName_${button.clicker.user.id}_${button.guild.id}`, channel.name);
  let userTicket = new Discord.MessageEmbed()
        .setAuthor(`✔ | Ticket Sakhte Shod`)
        .setTimestamp()
        .setColor(color.none)
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .setDescription(`Yek Fard Ticket Baz Kard Va Motazere Pasokhgoii Staff Hast`)
        .addField(`Etelat`, `**Ticket :** ${channel}\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);

        button.reply.send(userTicket,true)
          
    let logsChannel = button.guild.channels.cache.find(c => c.id === db.get(`logs_${button.guild.id}`));

        let createdEmbed = new Discord.MessageEmbed()
        .setAuthor(`📝 | Yek Ticket Sakhte Shod`)
        .setTimestamp()
        .setColor(color.none)
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .setDescription(`Yek Fard Ticket Baz Kard Va Motazere Pasokhgoii Staff Hast`)
        .addField(`Etelat`, `**Tavasote :** \`${button.clicker.user.tag}\`\n**ID :** \`${button.clicker.user.id}\`\n**Ticket :** ${channel}\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);
     logsChannel.send(createdEmbed);

                    require('quick.db').set(`TicketControl_${channel.id}`, button.clicker.user.id);
                    let btn = new MessageButton()
                        .setStyle("grey")
                        .setLabel("Gofle Ticket")
                        .setEmoji("🔒")
                        .setID("configTicket");
    
                    let row = new MessageActionRow()
                        .addComponent(btn);
                    channel.send(`<@${button.clicker.user.id}>`, {
                        embed: {
                            description: `Lotfan Montazer **Staff** Bashid Ta Be Shoma Pasokh Bedahand!!\nBareie Gofl Ticket Roie **"🔒"** Click Konid`,
                            color:'RANDOM'
                        },
                        component: row
                    })
                });
            }else{
          let TicketError = new Discord.MessageEmbed()
            .setColor("0xFF0000")
            .setDescription(`Shoma Az Ghabl Yek Ticket Sakhtid ⛔`)
            .setTitle(`**❌ | Error**`)
        return button.reply.send(TicketError,true)
            }
            
            } else if (button.id == 'configTicket') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        deny: ['SEND_MESSAGES'],
                        allow: ['VIEW_CHANNEL']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
  let logsChannel = button.guild.channels.cache.find(c => c.id === db.get(`logs_${button.guild.id}`));
        let bastanEmbed = new Discord.MessageEmbed()
        .setAuthor(`🔒| Dar Khast Baste Shodan Ticket`)
        .setColor(color.none)
        .setDescription(`Tickete User ${button.clicker.user.tag} Gofl Shode`)
        .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .addField(`Etelat`, `**Tavasote :** \`${button.clicker.user.tag}\`\n**ID :** \`${button.clicker.user.id}\`\n**Ticket :** ${button.channel}\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);

        if(logsChannel) logsChannel.send(bastanEmbed);
                button.channel.send({
                    embed: {
                        description: `Ticket Tavasote <@!${button.clicker.user.id}> Baste Shod🙃`,
                        color: 'RANDOM'
                    }
                })
                let btn = new MessageButton()
                    .setStyle("grey")
                    .setEmoji("🔓")
                    .setLabel("Baz Kardan Ticket")
                    .setID("reopenTicket");
                let btn2 = new MessageButton()
                    .setStyle("grey")
                    .setEmoji("⛔")
                    .setLabel("Pak Kardan Ticket")
                    .setID("deleteTicket");
                let row = new MessageActionRow()
                    .addComponent(btn2)
                    .addComponent(btn);
                button.channel.send({
                    embed: {
                        description: 'Roie **"⛔"** Feshar Dahid Ta Ticket Pak Shavad Va Baraie Baz Kardan Ticket Roie **"🔓"** Click Konid',
                        color: 'RED'
                    },
                    component: row
                })
            } else if (button.id == "deleteTicket") {
                require('quick.db').delete(`TicketControl_${button.channel.id}`);
                button.channel.send({
                    embed: {
                        description: `${button.clicker.user}Ticket Ro Bade` + " `5` " + `Sanie Mipakam Sabr Kon😁`,
                        color: 'RANDOM'
                    }
                });
      let logsChannel = button.guild.channels.cache.find(c => c.id === db.get(`logs_${button.guild.id}`));
        let deletedEmbed = new Discord.MessageEmbed()
        .setAuthor(`🗑️| Dar Khast Delete Shodan Ticket`)
        .setColor(color.none)
        .setDescription(`User Ticket Khod Ra Baraye Delete Shodan Taiid Kard Va Delete Shod`)
        .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .addField(`Etelat`, `**Tavasote :** \`${button.clicker.user.tag}\`\n**ID :** \`${button.clicker.user.id}\`\n**Ticket :** 
\`${button.channel.name}\`\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);

        if(logsChannel) logsChannel.send(deletedEmbed);

                setTimeout(() => {
                    button.channel.delete();
                }, 1000 * 5);
          db.delete(`ticketName_${button.clicker.user.id}_${button.guild.id}`);
            } else if (button.id == "reopenTicket") {
         let logsChannel = button.guild.channels.cache.find(c => c.id === db.get(`logs_${button.guild.id}`));
        let bazEmbed = new Discord.MessageEmbed()
        .setAuthor(`🔓| Ticket Baz Shod`)
        .setColor(color.none)
        .setDescription(`Tickete User ${button.clicker.user.tag} Baz Shode`)
        .setTimestamp()
        .setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
        .addField(`Etelat`, `**Tavasote :** \`${button.clicker.user.tag}\`\n**ID :** \`${button.clicker.user.id}\`\n**Ticket :** ${button.channel}\n**Dar Tarikhe :** <t:${TimeStampDate}:R>`);

        if(logsChannel) logsChannel.send(bazEmbed);
                button.channel.send({
                    embed: {
                        description: `Ticket Tavasote <@!${button.clicker.user.id}> Baz Shod🙃`,
                        color: 'RANDOM'
                    }
                })
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
            }/*
else if (button.id == 'renameTicketFalse') {
                var msg = require('quick.db').fetch(`DeleteRenameMessage_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteRenameMessage_${button.channel.id}`);
            } else if (button.id == 'renameTicketTrue') {
                var msg = require('quick.db').fetch(`DeleteRenameMessage_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                button.channel.setName('ticket-' + require('quick.db').fetch(`RenameTicket_${button.channel.id}`));
                button.channel.send({
                            embed: {
                                title: '🎫',
                                description: `Esm Ticket Shoma Taghir Yaft😄 Esme Ticke Hast 👉🏻 \`${require('quick.db').fetch(`RenameTicket_${button.channel.id}`)}\``,
                        color: 'RANDOM'
                }
            })
            require('quick.db').delete(`DeleteRenameMessage_${button.channel.id}`);
            }*/
    } catch (err) {
        console.log(err)
    }  
    
    })