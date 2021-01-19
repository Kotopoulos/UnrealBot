module.exports = {
    name: 'warning',
    description: "warnning system!",
    execute (message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
	        .setColor('#fff3f3')
	        //.setTitle('Discord Warning')
	        .setAuthor('Discord Warning', 'https://pbs.twimg.com/profile_images/870084932718034944/UjCxryDj_400x400.jpg')
	        .addFields(
                { name: '\u200B', value: '`1` ΠΡΟΕΙΔΟΠΟΙΗΣΗ'},
                { name: '\u200B', value: '`2` SERVER MUTE ΓΙΑ ΜΙΑ ΩΡΑ'},
                { name: '\u200B', value: '`3` SERVER MUTE ΓΙΑ 3 ΩΡΕΣ'},
                { name: '\u200B', value: '`4` DEMOTE'},
                { name: '\u200B', value: '`5` ΕΚΔΙΩΞΗ ΧΡΗΣΤΗ'},
	        )
            //.setImage('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg')
	        //.setTimestamp()
	        //.setFooter('');

            message.channel.send(newEmbed);
     }
}