module.exports = {
    name: 'ad',
    description: "ad!",
    execute (message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
	        .setColor('#9e7d03')
	        //.setTitle('IP Connect!')
	        .setAuthor('Unreal Community Ad', 'https://cdn.discordapp.com/attachments/800059670277783623/801014163706478622/Unreal4.png')
	        .addFields(
                { name: '\u200B', value: 'Eνας απο τους καλυτερους server για να περασεις την ωρα σου με αρκετα πραγματακια να κανεις και αλλα τοσα θα ερθουν :clap:  ...με πολλα events :partying_face:  που μπορεις και ΕΣΥ να νικησεις :trophy: ...με αρκετα chats για να συνομιλησεις με φιλους σου ή και ακομα να κανεις φιλους  ...αν εισαι και gamer ακομα καλυτερα :video_game:  ειδικα διαμορφωμενα καναλια ομιλιας και κειμενου για ατελειωτες ωρες παιχνιδιου...το πιο συναρπαστικο????ΟΛΑ ΑΥΤΑ ΣΕ ΕΝΑ ΜΟΛΙΣ SERVER :fire: ...ΕΛΠΙΖΩ ΝΑ ΣΕ ΔΩ ΣΤΗΝ ΠΑΡΕΑ ΜΑΣ ΚΑΛΗ ΣΥΝΕΧΕΙΑ :heart:https://discord.gg/6wXG25wGv5'},
	        )
	        //.setTimestamp()

            message.channel.send(newEmbed);
     }
}
