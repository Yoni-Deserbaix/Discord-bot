// Cet objet représente un événement Discord
module.exports = {
  // Le nom de l'événement
  name: "ready",

  // Indique si cet événement ne se produit qu'une seule fois
  once: true,

  // La fonction exécutée lorsque l'événement se produit
  execute(client) {
    // Affiche dans la console que le bot est connecté et prêt
    console.log(`Connecté en tant que ${client.user.tag}!`);
  },
};
