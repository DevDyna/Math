// priority: -1

console.log(Platform.getMods());

// /**
//  *
//  * @param {Registry.Item} event
//  */

StartupEvents.registry("item", (event) => {
  NumberInit(event);
  OperatorInit(event);
  CommonInit(event);
});
