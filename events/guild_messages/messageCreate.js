const prefix = "!";

// Cet objet représente un événement Discord
module.exports = {
  // Le nom de l'événement
  name: "messageCreate",

  // Indique si cet événement ne se produit qu'une seule fois
  once: false,

  // La fonction exécutée lorsque l'événement se produit
  execute(client, message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();
    if (cmdName.length == 0) return;

    let cmd = client.commands.get(cmdName);
    if (cmd) cmd.run(client, message, args);
  },
};
