const { Client } = require("discord.js");
const client = new Client({ intents: ["Guilds"] });

client.config = require("./config.json");

client.login(client.config.token).then(() => {
    console.log(`Cliente iniciado sesión como ${client.user.username}`);
    client.user.setActivity(`con ${client.guilds.cache.size} servidores.`);
})
.catch((err) => console.log(err))