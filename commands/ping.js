const Discord = require('discord.js');

module.exports = {
name: "ping",
Description: "PING PONG BOT IS ON!",
execute(message, args, Discord){
    const pingembed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('📶 PING!')
    .setFooter('Ping was successful')
        
    .addFields(
        {name: 'PONG!', value: 'The BOT Is currently ONLINE! '},
        
        

    )

    message.channel.send(pingembed);

    }
};




