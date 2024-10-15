global.utils = {mods : []}
Platform.getMods().forEach(e=>{
  global.utils.mods.push(e)
})

const lowPriorityWords = new Set(["minecraft", "chemlib"]);

global.utils.mods.sort((a, b) => {
  const aLowPriority = lowPriorityWords.has(a) ? 1 : 0;
  const bLowPriority = lowPriorityWords.has(b) ? 1 : 0;

  // If both words are low priority, sort normally
  if (aLowPriority === bLowPriority) {
      return a.localeCompare(b);
  }

  // If 'a' is low priority and 'b' is not, 'b' comes first
  return aLowPriority - bLowPriority;
});
