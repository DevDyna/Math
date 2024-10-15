// priority: 100

//GLOBAL VAR
global.chem = {
  name: [
    "hydrogen",
    "helium",
    "lithium",
    "beryllium",
    "boron",
    "carbon",
    "nitrogen",
    "oxygen",
    "fluorine",
    "neon",
    "sodium",
    "magnesium",
    "aluminum",
    "silicon",
    "phosphorus",
    "sulfur",
    "chlorine",
    "argon",
    "potassium",
    "calcium",
    "scandium",
    "titanium",
    "vanadium",
    "chromium",
    "manganese",
    "iron",
    "cobalt",
    "nickel",
    "copper",
    "zinc",
    "gallium",
    "germanium",
    "arsenic",
    "selenium",
    "bromine",
    "krypton",
    "rubidium",
    "strontium",
    "yttrium",
    "zirconium",
    "niobium",
    "molybdenum",
    "technetium",
    "ruthenium",
    "rhodium",
    "palladium",
    "silver",
    "cadmium",
    "indium",
    "tin",
    "antimony",
    "tellurium",
    "iodine",
    "xenon",
    "cesium",
    "barium",
    "lanthanum",
    "cerium",
    "praseodymium",
    "neodymium",
    "promethium",
    "samarium",
    "europium",
    "gadolinium",
    "terbium",
    "dysprosium",
    "holmium",
    "erbium",
    "thulium",
    "ytterbium",
    "lutetium",
    "hafnium",
    "tantalum",
    "tungsten",
    "rhenium",
    "osmium",
    "iridium",
    "platinum",
    "gold",
    "mercury",
    "thallium",
    "lead",
    "bismuth",
    "polonium",
    "astatine",
    "radon",
    "francium",
    "radium",
    "actinium",
    "thorium",
    "protactinium",
    "uranium",
    "neptunium",
    "plutonium",
    "americium",
    "curium",
    "berkelium",
    "californium",
    "einsteinium",
    "fermium",
    "mendelevium",
    "nobelium",
    "lawrencium",
    "rutherfordium",
    "dubnium",
    "seaborgium",
    "bohrium",
    "hassium",
    "meitnerium",
    "darmstadtium",
    "roentgenium",
    "copernicium",
    "nihonium",
    "flerovium",
    "moscovium",
    "livermorium",
    "tennessine",
    "oganesson",
  ]
};

//GENERIC VAR
const nul = "minecraft:air";
const crafting_number_max = 99;
const crafting_number_min = 0;
const bounty_pools_url = "bountiful:bounty_pools/bountiful/";
const bounty_decrees_url = "bountiful:bounty_decrees/bountiful/";

//BOUNTIFUL & WARES VAR
let bounty = {
  quests: { chem: {obj:{},ar:[]}, math: {obj:{},ar:[]}, operator: {obj:{},ar:[]}, other:{obj:{},ar:[]} },
  rewards: {obj:{},ar:[]},
  operator_bounty:['plus','less','for','div','power','chem'],
};

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns
 */
let rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let rnd50 = () => {
  return Math.random() < 0.5;
};
let rnd75 = () => {
  return Math.random() < 0.75;
};
let rnd25 = () => {
  return Math.random() < 0.25;
};

/**
 * WARE-O-MATIC
 *
 * EXAMPLE
 * '{ordered:10,payment:[{Count:1,id:"minecraft:emerald"}],requested:[{Count:{max:16,min:4,step:4},id:"minecraft:stick"}],title:\'{"text":"A Great Deal"}\'}'
 * 
 * @param {string} displayName
 * @param {{max:Number,min:Number,step:Number}|Number} time_to_trade {max:10,min:1,step:2}
 * @param {{id:Internal.ItemStack,Count:Number|{max:Number,min:Number,step:Number},tag:Internal.CompoundTag_}|Internal.CompoundTag_} reward
 * "minecraft:chests/buried_treasure" or
 *
 * [{id:'minecraft:stone',Count:1}] or
 *
 * [{id:'minecraft:stone',Count:1},{id:'minecraft:stone',Count:1}] or
 *
 * [{id:'minecraft:stone',Count:{max:64,min:12,step:8},tag:{CanDestroy:["minecraft:chain"]}
 * @param {{id:Internal.ItemStack,Count:Number|{max:Number,min:Number,step:Number},tag:Internal.CompoundTag_}|Internal.CompoundTag_} payment
 * "minecraft:chests/buried_treasure" or
 *
 * [{id:'minecraft:stone',Count:1}] or
 *
 * [{id:'minecraft:stone',Count:1},{id:'minecraft:stone',Count:1}] or
 *
 * [{id:'minecraft:stone',Count:{max:64,min:12,step:8},tag:{CanDestroy:["minecraft:chain"]}
 * @param {string} deal_title "Fancy Title"
 * @returns Internal.CompoundTag_
 */
let ware_nbt = (displayName, time_to_trade, reward, payment, deal_title) => {
  return {
    type: "item",
    content: "wares:sealed_delivery_agreement",
    amount: {
      min: 1,
      max: 1,
    },
    unitWorth: 60,
    nbt: `{display:{Name:'{"text":"${displayName}","italic":false}'},ordered:${time_to_trade},payment:${payment},requested:${reward},title:\'{"text":"${deal_title}"}\'}`,
  }
};
/**
 * 
 * @param {string} displayName 
 * @param {{max:Number,min:Number,step:Number}|Number} time_to_trade 
 * @param {Internal.ItemStack} reward 
 * @param {{max:Number,min:Number,step:Number}|Number} reward_count 
 * @param {Internal.ItemStack} payment 
 * @param {{max:Number,min:Number,step:Number}|Number} payment_count 
 * @param {string} deal_title 
 * @returns 
 */
let simple_ware = (
  displayName,
  time_to_trade,
  reward,
  reward_count,
  payment,
  payment_count,
  deal_title
) => {
  return ware_nbt(
    displayName,
    time_to_trade,
    `[{id:${reward},Count:${reward_count}}]`,
    `[{id:${payment},Count:${payment_count}}]`,
    deal_title
  );
};

/**
 * 
 * @param {Internal.ItemStack} item_input 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
let simple_deal = (item_input,min,max) =>{
  return {
    type: "item",
    content: "wares:sealed_delivery_agreement",
    amount: {
      min: 1,
      max: 1,
    },
    unitWorth: 60
  }
}