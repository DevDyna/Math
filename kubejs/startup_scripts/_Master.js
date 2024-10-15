// priority: -1

// /**
//  *
//  * @param {Registry.Item} event
//  */

StartupEvents.registry("item", (event) => {
  NumberInit(event);
  OperatorInit(event);
  CommonInit(event);
});
