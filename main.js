const Discord = require('discord.js');

const client = new Discord.Client();


const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

}

client.on('ready', () => {

    client.user.setActivity("?help|Watching Unreal Community Discord Server ")
});

client.on('ready', () => {
    console.log('You Shall not Pass!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '<@&799276082020483073>');

    guildMember.roles.add(welcomeRole);
});

client.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }else if(command === 'warning'){
        client.commands.get('warning').execute(message, args, Discord);
    }else if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    }else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }else if(command === 'ad'){
        client.commands.get('ad').execute(message, args, Discord);
    }
});

    client.login(process.env.token);
    
