const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
const adminprefix = 'xxx'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




/////////////////////////////////////////

const developers = ["384435460564451328"]

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
      if (message.content.startsWith(prefix + 'ply')) {
        client.user.setGame(argresult);
        message.channel.send(`**Ok, playing..** **${argresult}!**`)

    } else

      if (message.content === (prefix + "leave")) {
        message.guild.leave();

    } else

      if (message.content.startsWith(prefix + 'wt')) {
        client.user.setActivity(argresult, {type:'WATCHING'});
        message.channel.send(`**Ok, watching..** **${argresult}!**`)

    } else

     if (message.content.startsWith(prefix + 'ls')) {
        client.user.setActivity(argresult , {type:'LISTENING'});
        message.channel.send(`**Ok, listening to..** **${argresult}!**`)
    } else

     if (message.content.startsWith(prefix + 'st')) {
        client.user.setGame(argresult, "https://www.twitch.tv/idk");
        message.channel.send(`**Ok, Streaming..** **${argresult}!**`)
    }

     if (message.content.startsWith(adminprefix + 'set-name')) {
        client.user.setUsername(argresult).then
        message.channel.send(`**Changing my name to..** **${argresult}!** `)

    } else

     if (message.content.startsWith(prefix + 'set-avatar')) {
        client.user.setAvatar(argresult);
        message.channel.send(`**Changing my avatar to..** ${argresult}`);

    } else

    if (message.content.startsWith(prefix + 'set-status')) {
        client.user.setStatus(argresult)
        message.channel.send(`**Ok, status changed to..** **${argresult}!**`)
    }

});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});


////////////////////////////////////////

client.login(process.env.BOT_TOKEN);
