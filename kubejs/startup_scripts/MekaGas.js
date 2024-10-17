const $Gas = Java.loadClass("mekanism.api.chemical.gas.Gas");
const $GasBuilder = Java.loadClass("mekanism.api.chemical.gas.GasBuilder");

StartupEvents.registry("mekanism:gas", (event) => {
  event.createCustom(
    "kubejs:test_gas",
    () => new $Gas($GasBuilder.builder().tint(0xa020f0))
  );
});

const $InfuseType = Java.loadClass("mekanism.api.chemical.infuse.InfuseType");
const $InfuseTypeBuilder = Java.loadClass(
  "mekanism.api.chemical.infuse.InfuseTypeBuilder"
);

StartupEvents.registry("mekanism:infuse_type", (event) => {
  event.createCustom(
    "kubejs:test_infuse",
    () => new $InfuseType($InfuseTypeBuilder.builder().tint(0xa020f0))
  );
});
