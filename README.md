# Bot Ticket Kar Ba Reaction 😁
Salam Guys 🖐

In Suorse Bot Ticketi Hast Ke Ba Reaction Kar Mikone🤠

Nahve Faeall Kardane In Bot Ro Paean tozih Dadam👇🏻🙂


## Nahve Nasbe Bot
Shoma baraie Faeall Kardan Bot Baiad In Pish Niaz Haro Nasb Konid😉
```js
- [discord.js] npm install discord.js
- [dateformat] npm install dateformat
- [quick.db]   npm install quick.db
- [fs]         npm install fs
- [path]       npm install path 
- [express].   npm install express
```
In Code Haie Nasb Ro Dar Terminal Bezanid Ta Bot Okshe

- Token Bot Ro Dar Inja Vared Konid👉🏻 `config.json`                //Dar Folder *Storage* Mitonid Peydash Konid
```js
{
    "token":"BOT-TOKEN"
}
```
Va Baraie Tarif Prefixeton Dar Inja Varedesh Konid👉🏻`message.js`   //Dar Folder *events* Mitonid Peydash Konid
```js
module.exports = async (bot, message) => {
    let prefix = "BOT-PREFIX"
    const args = message.content.split(/ +/g);
    const command = args.shift().slice(prefix.length).toLowerCase();
    const cmd = bot.commands.get(command) || bot.aliases.get(command);
    if(!message.content.toLowerCase().startsWith(prefix) || !message.guild || message.author.bot || !cmd) return;
    cmd.run(bot, message, args, functions).catch(e => {return console.log(e)});
} 
```

- Ino Baz Konid👉🏻 `start.bat`

- Easy Bot Shoma Dorost Shod 🕺

 ## Rah Haie Ertebat Ba Ma
- Contact [Sobhan.SRZA#2153](https://discord.gg/xgcZNSjanP) For Any issues or Question

- And Also Dont Forget To join My [Discord!](https://discord.gg/xgcZNSjanP)
