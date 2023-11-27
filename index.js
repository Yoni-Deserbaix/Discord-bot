// Importation du module Discord.js
const { Client, Collection } = require("discord.js");
const dotenv = require("dotenv");

// Configuration pour charger les variables d'environnement depuis un fichier .env
dotenv.config();

// Création d'une instance de client Discord
const client = new Client({ intents: 513 });

client.commands = new Collection();

["CommandUtil", "EventUtil"].forEach((handler) => {
  require(`./utils/handlers/${handler}`)(client);
});

// Connexion du bot à Discord en utilisant le token stocké dans la variable d'environnement DISCORD_TOKEN
client.login(process.env.DISCORD_TOKEN);
