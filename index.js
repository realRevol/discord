const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'YOUR DISCORD BOT TOKEN HERE'

const PREFIX = '!';


bot.on("ready", () => {

  console.log(`Hi, ${bot.user.username} is now online!`);



  bot.user.setPresence({

    status: "online",

    game: {

      name: "!help",

      type: "WATCHING"

    }

  });

})

bot.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'info':
      const embed = new Discord.RichEmbed()
        .setTitle('')
        .setAuthor('')
        .setColor(0xFBC945);
      message.channel.sendEmbed(embed);
      break;

  }


});

bot.login(token);
