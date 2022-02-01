 const functions = require("../functions/functions.js");
module.exports = async (bot, message) => {
  const db = require("quick.db");
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = process.env.PREFIX;
    const args = message.content.split(/ +/g);
    const command = args.shift().slice(prefix.length).toLowerCase();
    const cmd = bot.commands.get(command) || bot.aliases.get(command);
    if(!message.content.toLowerCase().startsWith(prefix) || !message.guild || message.author.bot || !cmd) return;
    cmd.run(bot, message, args, functions).catch(e => {return console.log(e)});
} 
