
module.exports.discord = function(opts)

{

const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
  client.user.setGame("capibara");
});

client.on('message', message => {
  if (message.content === 'a') {
    message.reply('avvio');
    setInterval(intervalFunc, 4000, message);
  }
});

function intervalFunc(message) {
	var Game = arrayValoriDiscord[0];
	var Slot = arrayValoriDiscord[1];

	if(inAscolto != 0){
	  makeChannel(message,Game,Slot);
	  inAscolto = 0;
		} 
	}


function makeChannel(message,Game,Slot){
   message.guild.createChannel('Creating...', "voice");
   setTimeout(deleteChannel, 5000, message,Game,Slot);
}

function deleteChannel(message,Game,Slot){
	//setto il canale e vedo quanti utenti ci sono
   	message.guild.channels.get(arr[num]).edit(
   		{

   		name: Game,
   		bitrate: 96000,
   		userLimit: Slot

   	})
		  .then()
		  .catch(console.error);
			   	
		message.guild.channels.get(arr[num]).createInvite()
	  .then(link => {
	  	arrayValoriDiscord.push(link);
	    //console.log(`${link}`);
	  });

	setTimeout(myFunc, 10000, message , num);

		num++;

}

function myFunc(message, num){
	const x = message.guild.channels.get(arr[num]).members.array();
	//console.log("Utenti " + x.length);	
	//console.log(x.length);
	if(x.length === 0){
   	message.guild.channels.get(arr[num]).delete().catch(console.error);
   }
}

client.on('channelCreate', channel => {
	//channel.guild.channels.get("345586797092405249").setName("My Voice Channel").catch(console.error);
	arr.push(channel.id);
	//console.log(channel.id);
});

client.login('MzY2MTU3Mzc4ODY2OTA1MDg4.DLpAeQ.toDYjRQrM_I-PSRHaO74ZG10n1M');

console.log("Discord Online");

}
