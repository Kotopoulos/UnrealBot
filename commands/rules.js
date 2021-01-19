module.exports = {
    name: 'rules',
    description: "warnning system!",
    execute (message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
            .setColor('#9e7d03')
            //.setTitle('Discord Warning')
	        .setAuthor('Community Rules', 'https://cdn.discordapp.com/attachments/800059670277783623/801014163706478622/Unreal4.png')
	        .addFields(
                { name: '\u200B', value: '`1` Να είστε φιλικοί με όλα τα μέλη και τους διαχειριστές του server.'},
                { name: '\u200B', value: '`2` Απαγορεύεται να σπαμάρατε.'},
                { name: '\u200B', value: '`3` Απαγορεύεται οποιαδήποτε μορφή promote χωρίς συνεννόηση με τους owners.'},
                { name: '\u200B', value: '`4` Απαγορεύεται να διαφημίζετε/προωθείτε άλλους servers τιμωρείται με **permanent ban**'},
                { name: '\u200B', value: '`5` Σας προτρέπουμε να γράφετε με Ελληνικούς χαρακτήρες στα channels.'},
                { name: '\u200B', value: '`6` Κάντε role-request στο <#799059043091873832>, για να παίξετε με παρέα τα αγαπημένα σας παιχνίδια.'},
	        )
            //.setImage('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg')
	        .setTimestamp()
	        //.setFooter('');

            message.channel.send(newEmbed);
     }
}