//Beginning bot framework - Need the const//
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "<<";
const config = require('./config.json')
const mongo = require('./mongo')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();



//advanced command handler// 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}




//Console log for when BOT Comes Online//
client.on('ready', async () => {
  console.log('CATBOT is UP and PURRfectly running')

  await mongo().then((mongoose) => {
    try {
      console.log('CATBOT found the Database - Connection successful!')
    } finally {
      mongoose.connection.close()
    }
  })
})



//Simple meow command (because reasons)
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'meow') {
        message.channel.send('MEOW TO YOU TOO!');
    } else if (command == 'meow1') {
        message.channel.send('I SAID MEOW!');
    } else if (command == 'meow2') {
        message.channel.send('MEOW,MEOW,MEOW IM A CAT...');
    } else if (command == 'meowhelp') {
        message.channel.send('you can use meow,meow1,meow2 to trigger this command');
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command == 'question') {
        client.commands.get('qotd').execute(message, args);
    } else if (command == 'trivia') {
        client.commands.get('trivia').run(client, message, args);
    } else if (command == 'purge') {
        client.commands.get('clear').execute(client, message, args);
    } else if (command == 'about') {
        client.commands.get('about').execute(message, args, Discord);
    } else if (command == 'feedback') {
        client.commands.get('feedback').execute(message, args, Discord);
    }
});






//Client ID FOR Discord Bot (DO NOT SHARE ID)
client.login('ODY0NjcyNjQ3MzkxNDc3NzYw.YO43Jw.d6uKeJ5PuUL_6Zc_qubmGDGp0As');
