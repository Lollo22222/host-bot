const { Client, Collection } = require('discord.js');
const { config } = require("dotenv");
const fs = require("fs");
const client = new Client({
    disableEveryone: true
});



client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

   if(!command.startsWith('/')) return;

});

client.on("message", message => {
if(message.content === "/jetfire"){
message.channel.send("*CIAO PADRONE!*");
}
})

client.on("message", message => {
if(message.content === "/whoisboomer"){
message.channel.send("*Eccola **<@317364674788327424>**!*");
}
})

client.on("message", message => {
if(message.content === "ciao bot"){
message.channel.send("**Ciao!**");
}
})

client.on("message", message => {
if(message.content === "/informazioni"){
message.channel.send("*Salve questa è una **Community** Di Gamer, lo scopo principale di questa community è riunirsi e giocare nelle apposite stanze!*");
}
})

client.on("message", message => {
if(message.content === "/cmdsfun"){
message.channel.send("***");
message.channel.send("**/jetfire**");
message.channel.send("**/whoisboomer**");
message.channel.send("***");
}
})

client.on("message", message => {
if(message.content === "/cmds"){
message.channel.send("***");
message.channel.send("**/infostaff**");
message.channel.send("**/informazioni**");
message.channel.send("***");
}
})

client.on("message", message => {
if(message.content === "/infostaff"){
message.channel.send("**________________________________________________**");
message.channel.send("**Founder: Jetfire_13**");
message.channel.send("**Moderatori: LellesPaul - Ale - Lollix_554**");
message.channel.send("**Vip: Destroyed - LayRoy**");
message.channel.send("**Streamer: Zarlnvernovic - TheRaptor312 - zR3venge**");
message.channel.send("**__________________________________________________**");
}
})

client.on("message", async message => {
    const prefix = "/";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});

client.on('guildMemberAdd', member => {
member.send("Ei benvenuto/a nel server **Aries Community ITA**, mi raccomando facci vedere che ci sei! Siamo una community di Gamer, manda un messaggio in #💬chat💬 cosi che tutti sapranno che finalmente sei qui, ti auguro una buona permanenza");

const channel = member.guild.channels.cache.find(ch => ch.name === 'chat');
if(!channel) return;
channel.send(`<@${member.id}>, Benvenuto nel server  **Aries Community ITA**! Ti auguro il meglio:smile:`);
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

const PREFIX = '/';

client.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'allpvoice':
            let guild = client.guilds.cache.get('755358874747404299');
            let membersInVoice = guild.channels.cache.filter(channel => channel.type === 'voice').map(c => c.members.size).reduce((a, b) => a + b, 0)
            message.channel.send(`*Nelle vocali generali ci sono tot player: ${membersInVoice}*`)
            break;

    }
})

client.on("ready", () => {
    console.log(`Ciao! Mi sono connesso correttamente! ${client.user.username}!`);
    client.user.setActivity('Server Discord', {
      type: 'WATCHING'
    });
});

client.login(process.env.TOKEN)
