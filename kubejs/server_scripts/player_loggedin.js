ServerEvents.loaded(event => {
        event.server.runCommandSilent(`gamerule doMobSpawning false`)
        event.server.runCommandSilent(`gamerule doTraderSpawning false`)
        event.server.runCommandSilent(`gamerule doFireTick true`)
})