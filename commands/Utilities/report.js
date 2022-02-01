exports.help = {
    name: "report",
    aliases: ["rp" , "report"] 
  }
exports.run = async (bot, message, args, functions) => {
const Discord = require('discord.js');
        const choice = args[0];
        if (!choice){
 return message.channel.send("لطفا متن گزارشتان را رو به روی کامند بنویسید تا بررسی شود")
}else
          message.reply('درخواست باگ یا نظر شما به سرور پشتیبانی ارسال شد یا ادمین ها جوین سرور میشوند و حل میکنند یا به شما در خواست فرندی میدهند با تشکر')
  
      const sizarTMserver = message.client.guilds.cache.get("912598706405146665");
      const channelbug = sizarTMserver.channels.cache.get("929205990790950982");
        let invite = await message.channel.createInvite({
            maxAge: 10 * 60 * 1000, 
            maxUses: 5
        }, )

      const soal = new Discord.MessageEmbed()
        .setAuthor(bot.user.tag,bot.user.displayAvatarURL())
        .setColor('RANDOM')
            .setTitle(`Report : `)
            .setDescription(`
User : ${message.author} \n 
Send : ${args}\n 
Server : ${invite}`)
            .setThumbnail(message.guild.iconURL())
            .setFooter(`Requested By ${message.author.tag}`,message.author.displayAvatarURL())

        channelbug.send(soal)

}