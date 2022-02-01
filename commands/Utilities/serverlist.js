exports.help = {
    name: "serverlist",
    aliases: ["sl","servers"],
  }
exports.run = async (bot, message, args, functions) => {
//serverlist
    const Guilds =  bot.guilds.cache.array().map((G, I) => `${I + 1}. **${G.name}** - **${G.id}**`).join("\n");
    if (!Guilds) return message.channel.send("No Guild");
    return message.channel.send(Guilds, { split: { char: "\n" } }); 
   
}