/**
 *
 * @param {Internal.SimplePlayerEventJS} event
 */
let PlayerLogin = (event) => {
  const { server } = event;
  server.runCommandSilent(`gamerule doMobSpawning false`);
  server.runCommandSilent(`gamerule doTraderSpawning false`);
  server.runCommandSilent(`gamerule doWeatherCycle false`);
  server.runCommandSilent(`gamerule doDaylightCycle false`);
};
