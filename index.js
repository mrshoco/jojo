const Discord = require('discord.js')
const Client = new Discord.Client()

Client.login(process.env.BOT_TOKEN)

Client.on('ready', function(){
  console.log('ok')
})
