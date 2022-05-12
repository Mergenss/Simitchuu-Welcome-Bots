const Discord = require("discord.js");
const database = require("quick.db")
const client = new Discord.Client();


client.on("ready", () => {
    client.channels.cache.get("973249213678895137").join();// Buraya Botun Sese gireceği odanın idsini kopyala yapıştır
});

client.on("ready", () => {
    client.user.setActivity("Mergenss  ❤️ Phoenix")// buraya botun durumunu ayarla
console.log("Bot Başarı İle Sese Girdi")
});



client.login("")//buraya tokenini koy 
