const { promisify } = require("util");
const { glob } = require("glob");

const pGlob = promisify(glob);

module.exports = async (client) => {
  (await pGlob(`${process.cwd()}/events/*/*.js`)).map(async (eventFile) => {
    const event = require(eventFile);

    // Vérifie si l'événement est défini pour se produire qu'une seule fois (once)
    if (event.once === true) {
      client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
      client.on(event.name, (...args) => event.execute(client, ...args));
    }
  });
};
