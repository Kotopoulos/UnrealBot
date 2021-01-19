module.exports = {
    name: 'poll',
    description: "Poll!",
    execute (message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
            .setColor('#9e7d03')
            .setTitle('Inititate Poll')
            .setAuthor('Community Rules', 'https://cdn.discordapp.com/attachments/800059670277783623/801014163706478622/Unreal4.png')
            

            if(!args[1]){
                message.channel.send(Embed);                
            }
        break;
     }
}