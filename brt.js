const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

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

client.on('message', msg => {
  if (msg.content === '+ping') {
    msg.reply('Po0o0nG');
  }
});





client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['+help','with jihad'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/GamerzBot`);
    }, ms);

});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});



client.on('message', message => {
    if(message.content.startsWith(prefix + 'server')){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**لا تملك الرتية الكافية لإستخدام هذا الأمر**');
        var server = new Discord.RichEmbed()
        .setTitle(`:page_with_curl: [**__${message.guild.name}__**] **معلومات عن سيرفر**`)
        .addField(`:crown: **__Server Owner:__**`, `**➥** [${message.guild.owner}]`)
        .addField(`:id: **__Server ID:__**`, `**➥** [**__${message.guild.id}__**]`)
        .addField(`:two_men_holding_hands: **__Members Count:__**`, `**➥** [**__${message.guild.memberCount}__**]`)
        .addField(`:first_place:  **__Roles Count:__**`, `**➥** [**__${message.guild.roles.size}__**]`)
        .addField(`:date: **__Server Created At:__**`, `**➥** [__${message.guild.createdAt.toLocaleString()}__]`)
        .addField(`:green_heart: **__Online Members__**`, `[__${message.guild.members.filter(m=>m.presence.status == 'online').size}__]`)
        .addField(`:yellow_heart: **__Idle Members__**`, `[__${message.guild.members.filter(m=>m.presence.status == 'idle').size}__]`)
        .addField(`:heart: **__Dnd Members__**`, `[__${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__]`)
        .addField(`:black_circle: **__Offline Members__**`, `[__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__]`)
		.addField( `:loud_sound: **__Voice Roms__**`,`[__${message.guild.channels.filter(m => m.type === 'voice').size}__]`)
        .setColor('GRAY')
        .setThumbnail(client.user.avatarURL)
        message.channel.sendEmbed(server)
    }
});


client.login(process.env.BOT_TOKEN);
