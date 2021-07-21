const Discord = require('discord.js');

module.exports = {
name: "help",
Description: "a helpful bot",
execute(message, args, Discord){
    const helpcommandembed = new Discord.MessageEmbed()
    .setColor('#E96A00')
    .setTitle('Commandlist: all commands')
    .setFooter('CatBot V1.0-ALPHA • Help Menu')
        
    .addFields(
        { name: '‎', value: '‎' },
    { name: '**meow**', value: 'Meows at you!' },
    { name: '**meowhelp**', value: 'see all Meow Related Commands' },
    { name: '**ping**', value: 'PING the bot for online status' },
    { name: '**__help__**', value: 'A help menu to tell you the commands and information' },
    { name: '**about**', value: 'learn more about this bots ||INFORMATION||' },
    { name: '**trivia**', value: 'Play a fun trivia game and answer questions! (Next Update Push!) '},
    { name: '**pokeguess**', value: 'Play the GUESS that pokemon (Next Update Push!)'},    
    { name: '‎**qotd**', value: 'Displays a random question of the day‎' },    
    { name: '‎**purge #ofmessages**', value: 'purge messages up to 99 at a time‎' },
    { name: '**feedback**‎', value: 'send Feedback back to the devs for future updates to CATBOT (Next Update Push!)‎' },
    


    )

    message.channel.send(helpcommandembed);

    }
};