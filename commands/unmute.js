module.exports = {
    name: 'unmute',
    description: "This is a unmute command",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '👶Members')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute')
            
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('User doesnt exist');
        }
    }
}