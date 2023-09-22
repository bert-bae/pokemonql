const fs = require("fs/promises");

const pokemap = {};
const readFile = async () => {
  const content = await fs.readFile("./pokedex.json", { encoding: "utf-8" });
  const parsed = JSON.parse(content);
  const types = new Set();
  parsed.forEach((poke) => {
    pokemap[poke.id] = {
      id: poke.id,
      name: poke.name.english,
      type: poke.type,
      base: poke.base,
    };

    poke.type.forEach((t) => types.add(t));
  });

  await fs.writeFile("./pokedexmapped.json", JSON.stringify(pokemap, null, 2));
};

readFile();
