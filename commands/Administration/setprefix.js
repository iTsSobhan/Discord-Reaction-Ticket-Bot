const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const dateFormat = require("dateformat");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

        try {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                let pererrorEmbed = new Discord.MessageEmbed()
                              .setColor("0xFF0000")
                               .setTitel(`**❌ | Error**`)
                               .setDescription(`Dastresi Morede Niaz Ra Nadarid🤕`)
                message.channel.send(pererrorEmbed)
                
                
            }
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = process.env.PREFIX;
            var newPrefix = args.join(' ')
            if (!newPrefix) {
                require('quick.db').set(`prefix_${message.guild.id}`, process.env.PREFIX);
                   let errorprefixEmbed = new Discord.MessageEmbed()
                              .setColor("RANDOM")
                           .setThumbnail(bot.user.displayAvatarURL())
                               .setTimestamp(Date.now())
                               .setAuthor(`prefix of ${bot.user.tag} changed👌🏻`,bot.user.displayAvatarURL())
                                .setFooter(`prefix changed by ${message.author.tag} |`,message.author.displayAvatarURL())
                               .setDescription(`Prefix Bot Be Halat Default **${process.env.PREFIX}** Taghir Yaft`)
                message.channel.send(errorprefixEmbed)
            } else if (newPrefix) {
                if (newPrefix.length > 7) { 
                  let errorEmbed = new Discord.MessageEmbed()
                              .setColor("")
                               .setTitel(`**❌ | Error**`)
                               .setDescription(`Shotor Prefixet Kheili Tolanoe😶‍🌫️`)
                    message.channel.send(errorEmbed)
                }
                require('quick.db').set(`prefix_${message.guild.id}`, newPrefix);
                  let prefixEmbed = new Discord.MessageEmbed()
                              .setThumbnail(bot.user.displayAvatarURL())
                              .setColor("RANDOM")
                               .setDescription(`Prefix Bot Dar In Server Be **${newPrefix}** Taghir Yaft😁`)
                               .setTimestamp(Date.now())
                               .setAuthor(`prefix of ${bot.user.tag} changed👌🏻`,bot.user.displayAvatarURL())
                                .setFooter(`prefix changed by ${message.author.tag} |`,message.author.displayAvatarURL())
              message.channel.send(prefixEmbed)
            }
        } catch (err) {
            return;
        }

}

exports.help = {
    name: "setprefix",
    aliases: ['stp', 'set-prefix']
}
