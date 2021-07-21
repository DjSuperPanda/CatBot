const Discord = require('discord.js');

module.exports = {
name: "about",
Description: "about this bot",
execute(message, args, Discord){
    const aboutEmbed = new Discord.MessageEmbed()
    .setColor('#F49D6E')
    .setTitle('ABOUT This Bot (Click here for support discord server)')
    .setURL('https://discord.gg/awxzZjFJCk')
    .setImage('https://www.vebudovision.com/wp-content/uploads/2020/01/4022af7001c4ccb6a78330bd3142c18f.png')
    
    .addFields(
        {name: 'Version', value: 'CatBOT is currently on VERSION 1.0.1 ALPHA'},
        {name: 'Author', value:'Catbot is built and maintained by VexCommunity and run by TheSuperPanda#3349' },
        {name: 'Feedback', value: 'want to provide feedback vist our discord help center!'},
        {name: 'USAGE', value: 'This is a public bot! to see a list of servers this bot runs on check out the #partner-spotlight' },
        {name: '**__Currently Looking for Developers!__**', value: 'We are currently seeking to bring on some new developers to the team!'}
		
        

    )

    message.channel.send(aboutEmbed);

    }
}



