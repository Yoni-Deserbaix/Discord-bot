// Cet objet représente un événement Discord
module.exports = {
  // Le nom de l'événement
  name: "ping",
  run: (client, message, args) => {
    message.channel.send("Pong!");
  },
};
