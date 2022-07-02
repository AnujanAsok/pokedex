const preloadedPokemonData = () => {
  const pokeData = [
    {
      abilities: [
        {
          ability: "overgrow",
        },
        {
          ability: "chlorophyll",
        },
      ],
      name: "bulbasaur",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      stats: [
        {
          base_stat: 45,
          name: "hp",
        },
        {
          base_stat: 49,
          name: "attack",
        },
        {
          base_stat: 49,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "overgrow",
        },
        {
          ability: "chlorophyll",
        },
      ],
      name: "ivysaur",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "vine-whip",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 62,
          name: "attack",
        },
        {
          base_stat: 63,
          name: "defense",
        },
        {
          base_stat: 80,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "overgrow",
        },
        {
          ability: "chlorophyll",
        },
      ],
      name: "venusaur",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "vine-whip",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 82,
          name: "attack",
        },
        {
          base_stat: 83,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 100,
          name: "special-defense",
        },
        {
          base_stat: 80,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "blaze",
        },
        {
          ability: "solar-power",
        },
      ],
      name: "charmander",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "scratch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      stats: [
        {
          base_stat: 39,
          name: "hp",
        },
        {
          base_stat: 52,
          name: "attack",
        },
        {
          base_stat: 43,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 65,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "blaze",
        },
        {
          ability: "solar-power",
        },
      ],
      name: "charmeleon",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "scratch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      stats: [
        {
          base_stat: 58,
          name: "hp",
        },
        {
          base_stat: 64,
          name: "attack",
        },
        {
          base_stat: 58,
          name: "defense",
        },
        {
          base_stat: 80,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 80,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "blaze",
        },
        {
          ability: "solar-power",
        },
      ],
      name: "charizard",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "scratch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      stats: [
        {
          base_stat: 78,
          name: "hp",
        },
        {
          base_stat: 84,
          name: "attack",
        },
        {
          base_stat: 78,
          name: "defense",
        },
        {
          base_stat: 109,
          name: "special-attack",
        },
        {
          base_stat: 85,
          name: "special-defense",
        },
        {
          base_stat: 100,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "torrent",
        },
        {
          ability: "rain-dish",
        },
      ],
      name: "squirtle",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "mega-kick",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      stats: [
        {
          base_stat: 44,
          name: "hp",
        },
        {
          base_stat: 48,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 64,
          name: "special-defense",
        },
        {
          base_stat: 43,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "torrent",
        },
        {
          ability: "rain-dish",
        },
      ],
      name: "wartortle",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "mega-kick",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      stats: [
        {
          base_stat: 59,
          name: "hp",
        },
        {
          base_stat: 63,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 58,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "torrent",
        },
        {
          ability: "rain-dish",
        },
      ],
      name: "blastoise",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "mega-kick",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      stats: [
        {
          base_stat: 79,
          name: "hp",
        },
        {
          base_stat: 83,
          name: "attack",
        },
        {
          base_stat: 100,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 105,
          name: "special-defense",
        },
        {
          base_stat: 78,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shield-dust",
        },
        {
          ability: "run-away",
        },
      ],
      name: "caterpie",
      moves: [
        {
          move: "tackle",
        },
        {
          move: "string-shot",
        },
        {
          move: "snore",
        },
        {
          move: "bug-bite",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      stats: [
        {
          base_stat: 45,
          name: "hp",
        },
        {
          base_stat: 30,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 20,
          name: "special-attack",
        },
        {
          base_stat: 20,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shed-skin",
        },
      ],
      name: "metapod",
      moves: [
        {
          move: "string-shot",
        },
        {
          move: "harden",
        },
        {
          move: "iron-defense",
        },
        {
          move: "bug-bite",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 20,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 25,
          name: "special-attack",
        },
        {
          base_stat: 25,
          name: "special-defense",
        },
        {
          base_stat: 30,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "compound-eyes",
        },
        {
          ability: "tinted-lens",
        },
      ],
      name: "butterfree",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "whirlwind",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 90,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shield-dust",
        },
        {
          ability: "run-away",
        },
      ],
      name: "weedle",
      moves: [
        {
          move: "poison-sting",
        },
        {
          move: "string-shot",
        },
        {
          move: "bug-bite",
        },
        {
          move: "electroweb",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 35,
          name: "attack",
        },
        {
          base_stat: 30,
          name: "defense",
        },
        {
          base_stat: 20,
          name: "special-attack",
        },
        {
          base_stat: 20,
          name: "special-defense",
        },
        {
          base_stat: 50,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shed-skin",
        },
      ],
      name: "kakuna",
      moves: [
        {
          move: "string-shot",
        },
        {
          move: "harden",
        },
        {
          move: "iron-defense",
        },
        {
          move: "bug-bite",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      stats: [
        {
          base_stat: 45,
          name: "hp",
        },
        {
          base_stat: 25,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 25,
          name: "special-attack",
        },
        {
          base_stat: 25,
          name: "special-defense",
        },
        {
          base_stat: 35,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swarm",
        },
        {
          ability: "sniper",
        },
      ],
      name: "beedrill",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
        {
          move: "fury-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 90,
          name: "attack",
        },
        {
          base_stat: 40,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 75,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "keen-eye",
        },
        {
          ability: "tangled-feet",
        },
        {
          ability: "big-pecks",
        },
      ],
      name: "pidgey",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "wing-attack",
        },
        {
          move: "whirlwind",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 40,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 35,
          name: "special-defense",
        },
        {
          base_stat: 56,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "keen-eye",
        },
        {
          ability: "tangled-feet",
        },
        {
          ability: "big-pecks",
        },
      ],
      name: "pidgeotto",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "wing-attack",
        },
        {
          move: "whirlwind",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      stats: [
        {
          base_stat: 63,
          name: "hp",
        },
        {
          base_stat: 60,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 71,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "keen-eye",
        },
        {
          ability: "tangled-feet",
        },
        {
          ability: "big-pecks",
        },
      ],
      name: "pidgeot",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "wing-attack",
        },
        {
          move: "whirlwind",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      stats: [
        {
          base_stat: 83,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 75,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 101,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "run-away",
        },
        {
          ability: "guts",
        },
        {
          ability: "hustle",
        },
      ],
      name: "rattata",
      moves: [
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      stats: [
        {
          base_stat: 30,
          name: "hp",
        },
        {
          base_stat: 56,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 25,
          name: "special-attack",
        },
        {
          base_stat: 35,
          name: "special-defense",
        },
        {
          base_stat: 72,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "run-away",
        },
        {
          ability: "guts",
        },
        {
          ability: "hustle",
        },
      ],
      name: "raticate",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 81,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 97,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "keen-eye",
        },
        {
          ability: "sniper",
        },
      ],
      name: "spearow",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 60,
          name: "attack",
        },
        {
          base_stat: 30,
          name: "defense",
        },
        {
          base_stat: 31,
          name: "special-attack",
        },
        {
          base_stat: 31,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "keen-eye",
        },
        {
          ability: "sniper",
        },
      ],
      name: "fearow",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 90,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 61,
          name: "special-attack",
        },
        {
          base_stat: 61,
          name: "special-defense",
        },
        {
          base_stat: 100,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "intimidate",
        },
        {
          ability: "shed-skin",
        },
        {
          ability: "unnerve",
        },
      ],
      name: "ekans",
      moves: [
        {
          move: "bind",
        },
        {
          move: "slam",
        },
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      stats: [
        {
          base_stat: 35,
          name: "hp",
        },
        {
          base_stat: 60,
          name: "attack",
        },
        {
          base_stat: 44,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 54,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "intimidate",
        },
        {
          ability: "shed-skin",
        },
        {
          ability: "unnerve",
        },
      ],
      name: "arbok",
      moves: [
        {
          move: "bind",
        },
        {
          move: "slam",
        },
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 69,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 79,
          name: "special-defense",
        },
        {
          base_stat: 80,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "static",
        },
        {
          ability: "lightning-rod",
        },
      ],
      name: "pikachu",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      stats: [
        {
          base_stat: 35,
          name: "hp",
        },
        {
          base_stat: 55,
          name: "attack",
        },
        {
          base_stat: 40,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "static",
        },
        {
          ability: "lightning-rod",
        },
      ],
      name: "raichu",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 90,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 90,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 110,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "sand-veil",
        },
        {
          ability: "sand-rush",
        },
      ],
      name: "sandshrew",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "sand-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 75,
          name: "attack",
        },
        {
          base_stat: 85,
          name: "defense",
        },
        {
          base_stat: 20,
          name: "special-attack",
        },
        {
          base_stat: 30,
          name: "special-defense",
        },
        {
          base_stat: 40,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "sand-veil",
        },
        {
          ability: "sand-rush",
        },
      ],
      name: "sandslash",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "sand-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
      stats: [
        {
          base_stat: 75,
          name: "hp",
        },
        {
          base_stat: 100,
          name: "attack",
        },
        {
          base_stat: 110,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 65,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "poison-point",
        },
        {
          ability: "rivalry",
        },
        {
          ability: "hustle",
        },
      ],
      name: "nidoran-f",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "cut",
        },
        {
          move: "double-kick",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 47,
          name: "attack",
        },
        {
          base_stat: 52,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 40,
          name: "special-defense",
        },
        {
          base_stat: 41,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "poison-point",
        },
        {
          ability: "rivalry",
        },
        {
          ability: "hustle",
        },
      ],
      name: "nidorina",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "cut",
        },
        {
          move: "double-kick",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
      stats: [
        {
          base_stat: 70,
          name: "hp",
        },
        {
          base_stat: 62,
          name: "attack",
        },
        {
          base_stat: 67,
          name: "defense",
        },
        {
          base_stat: 55,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 56,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "poison-point",
        },
        {
          ability: "rivalry",
        },
        {
          ability: "sheer-force",
        },
      ],
      name: "nidoqueen",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 92,
          name: "attack",
        },
        {
          base_stat: 87,
          name: "defense",
        },
        {
          base_stat: 75,
          name: "special-attack",
        },
        {
          base_stat: 85,
          name: "special-defense",
        },
        {
          base_stat: 76,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "poison-point",
        },
        {
          ability: "rivalry",
        },
        {
          ability: "hustle",
        },
      ],
      name: "nidoran-m",
      moves: [
        {
          move: "cut",
        },
        {
          move: "double-kick",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
      stats: [
        {
          base_stat: 46,
          name: "hp",
        },
        {
          base_stat: 57,
          name: "attack",
        },
        {
          base_stat: 40,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 40,
          name: "special-defense",
        },
        {
          base_stat: 50,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "poison-point",
        },
        {
          ability: "rivalry",
        },
        {
          ability: "hustle",
        },
      ],
      name: "nidorino",
      moves: [
        {
          move: "cut",
        },
        {
          move: "double-kick",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
      stats: [
        {
          base_stat: 61,
          name: "hp",
        },
        {
          base_stat: 72,
          name: "attack",
        },
        {
          base_stat: 57,
          name: "defense",
        },
        {
          base_stat: 55,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 65,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "poison-point",
        },
        {
          ability: "rivalry",
        },
        {
          ability: "sheer-force",
        },
      ],
      name: "nidoking",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
      stats: [
        {
          base_stat: 81,
          name: "hp",
        },
        {
          base_stat: 102,
          name: "attack",
        },
        {
          base_stat: 77,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 85,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "cute-charm",
        },
        {
          ability: "magic-guard",
        },
        {
          ability: "friend-guard",
        },
      ],
      name: "clefairy",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      stats: [
        {
          base_stat: 70,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 48,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 35,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fairy",
            url: "https://pokeapi.co/api/v2/type/18/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "cute-charm",
        },
        {
          ability: "magic-guard",
        },
        {
          ability: "unaware",
        },
      ],
      name: "clefable",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
      stats: [
        {
          base_stat: 95,
          name: "hp",
        },
        {
          base_stat: 70,
          name: "attack",
        },
        {
          base_stat: 73,
          name: "defense",
        },
        {
          base_stat: 95,
          name: "special-attack",
        },
        {
          base_stat: 90,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fairy",
            url: "https://pokeapi.co/api/v2/type/18/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "flash-fire",
        },
        {
          ability: "drought",
        },
      ],
      name: "vulpix",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "body-slam",
        },
        {
          move: "take-down",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
      stats: [
        {
          base_stat: 38,
          name: "hp",
        },
        {
          base_stat: 41,
          name: "attack",
        },
        {
          base_stat: 40,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 65,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "flash-fire",
        },
        {
          ability: "drought",
        },
      ],
      name: "ninetales",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "body-slam",
        },
        {
          move: "take-down",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      stats: [
        {
          base_stat: 73,
          name: "hp",
        },
        {
          base_stat: 76,
          name: "attack",
        },
        {
          base_stat: 75,
          name: "defense",
        },
        {
          base_stat: 81,
          name: "special-attack",
        },
        {
          base_stat: 100,
          name: "special-defense",
        },
        {
          base_stat: 100,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "cute-charm",
        },
        {
          ability: "competitive",
        },
        {
          ability: "friend-guard",
        },
      ],
      name: "jigglypuff",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      stats: [
        {
          base_stat: 115,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 20,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 25,
          name: "special-defense",
        },
        {
          base_stat: 20,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "fairy",
            url: "https://pokeapi.co/api/v2/type/18/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "cute-charm",
        },
        {
          ability: "competitive",
        },
        {
          ability: "frisk",
        },
      ],
      name: "wigglytuff",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      stats: [
        {
          base_stat: 140,
          name: "hp",
        },
        {
          base_stat: 70,
          name: "attack",
        },
        {
          base_stat: 45,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "fairy",
            url: "https://pokeapi.co/api/v2/type/18/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "inner-focus",
        },
        {
          ability: "infiltrator",
        },
      ],
      name: "zubat",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "wing-attack",
        },
        {
          move: "whirlwind",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 30,
          name: "special-attack",
        },
        {
          base_stat: 40,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "inner-focus",
        },
        {
          ability: "infiltrator",
        },
      ],
      name: "golbat",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "wing-attack",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
      stats: [
        {
          base_stat: 75,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "run-away",
        },
      ],
      name: "oddish",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
        {
          move: "take-down",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
      stats: [
        {
          base_stat: 45,
          name: "hp",
        },
        {
          base_stat: 50,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 75,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 30,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "stench",
        },
      ],
      name: "gloom",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
        {
          move: "take-down",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 40,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "effect-spore",
        },
      ],
      name: "vileplume",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
      stats: [
        {
          base_stat: 75,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 85,
          name: "defense",
        },
        {
          base_stat: 110,
          name: "special-attack",
        },
        {
          base_stat: 90,
          name: "special-defense",
        },
        {
          base_stat: 50,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "effect-spore",
        },
        {
          ability: "dry-skin",
        },
        {
          ability: "damp",
        },
      ],
      name: "paras",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
      stats: [
        {
          base_stat: 35,
          name: "hp",
        },
        {
          base_stat: 70,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 25,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "effect-spore",
        },
        {
          ability: "dry-skin",
        },
        {
          ability: "damp",
        },
      ],
      name: "parasect",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 30,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "compound-eyes",
        },
        {
          ability: "tinted-lens",
        },
        {
          ability: "run-away",
        },
      ],
      name: "venonat",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 55,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shield-dust",
        },
        {
          ability: "tinted-lens",
        },
        {
          ability: "wonder-skin",
        },
      ],
      name: "venomoth",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "whirlwind",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
      stats: [
        {
          base_stat: 70,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 90,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "sand-veil",
        },
        {
          ability: "arena-trap",
        },
        {
          ability: "sand-force",
        },
      ],
      name: "diglett",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "cut",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
      stats: [
        {
          base_stat: 10,
          name: "hp",
        },
        {
          base_stat: 55,
          name: "attack",
        },
        {
          base_stat: 25,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 95,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "sand-veil",
        },
        {
          ability: "arena-trap",
        },
        {
          ability: "sand-force",
        },
      ],
      name: "dugtrio",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "cut",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
      stats: [
        {
          base_stat: 35,
          name: "hp",
        },
        {
          base_stat: 100,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 120,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "pickup",
        },
        {
          ability: "technician",
        },
        {
          ability: "unnerve",
        },
      ],
      name: "meowth",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "scratch",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 40,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "limber",
        },
        {
          ability: "technician",
        },
        {
          ability: "unnerve",
        },
      ],
      name: "persian",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "scratch",
        },
        {
          move: "cut",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 70,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 115,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "damp",
        },
        {
          ability: "cloud-nine",
        },
        {
          ability: "swift-swim",
        },
      ],
      name: "psyduck",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "ice-punch",
        },
        {
          move: "scratch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 52,
          name: "attack",
        },
        {
          base_stat: 48,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "damp",
        },
        {
          ability: "cloud-nine",
        },
        {
          ability: "swift-swim",
        },
      ],
      name: "golduck",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "ice-punch",
        },
        {
          move: "scratch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 82,
          name: "attack",
        },
        {
          base_stat: 78,
          name: "defense",
        },
        {
          base_stat: 95,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 85,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "vital-spirit",
        },
        {
          ability: "anger-point",
        },
        {
          ability: "defiant",
        },
      ],
      name: "mankey",
      moves: [
        {
          move: "karate-chop",
        },
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "vital-spirit",
        },
        {
          ability: "anger-point",
        },
        {
          ability: "defiant",
        },
      ],
      name: "primeape",
      moves: [
        {
          move: "karate-chop",
        },
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 105,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 95,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "intimidate",
        },
        {
          ability: "flash-fire",
        },
        {
          ability: "justified",
        },
      ],
      name: "growlithe",
      moves: [
        {
          move: "double-kick",
        },
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
        {
          move: "take-down",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 70,
          name: "attack",
        },
        {
          base_stat: 45,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "intimidate",
        },
        {
          ability: "flash-fire",
        },
        {
          ability: "justified",
        },
      ],
      name: "arcanine",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 110,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 95,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "water-absorb",
        },
        {
          ability: "damp",
        },
        {
          ability: "swift-swim",
        },
      ],
      name: "poliwag",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 50,
          name: "attack",
        },
        {
          base_stat: 40,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 40,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "water-absorb",
        },
        {
          ability: "damp",
        },
        {
          ability: "swift-swim",
        },
      ],
      name: "poliwhirl",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "water-absorb",
        },
        {
          ability: "damp",
        },
        {
          ability: "swift-swim",
        },
      ],
      name: "poliwrath",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 90,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "synchronize",
        },
        {
          ability: "inner-focus",
        },
        {
          ability: "magic-guard",
        },
      ],
      name: "abra",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
      stats: [
        {
          base_stat: 25,
          name: "hp",
        },
        {
          base_stat: 20,
          name: "attack",
        },
        {
          base_stat: 15,
          name: "defense",
        },
        {
          base_stat: 105,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "synchronize",
        },
        {
          ability: "inner-focus",
        },
        {
          ability: "magic-guard",
        },
      ],
      name: "kadabra",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 35,
          name: "attack",
        },
        {
          base_stat: 30,
          name: "defense",
        },
        {
          base_stat: 120,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 105,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "synchronize",
        },
        {
          ability: "inner-focus",
        },
        {
          ability: "magic-guard",
        },
      ],
      name: "alakazam",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 50,
          name: "attack",
        },
        {
          base_stat: 45,
          name: "defense",
        },
        {
          base_stat: 135,
          name: "special-attack",
        },
        {
          base_stat: 95,
          name: "special-defense",
        },
        {
          base_stat: 120,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "guts",
        },
        {
          ability: "no-guard",
        },
        {
          ability: "steadfast",
        },
      ],
      name: "machop",
      moves: [
        {
          move: "karate-chop",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
      stats: [
        {
          base_stat: 70,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 35,
          name: "special-defense",
        },
        {
          base_stat: 35,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "guts",
        },
        {
          ability: "no-guard",
        },
        {
          ability: "steadfast",
        },
      ],
      name: "machoke",
      moves: [
        {
          move: "karate-chop",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 100,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 60,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "guts",
        },
        {
          ability: "no-guard",
        },
        {
          ability: "steadfast",
        },
      ],
      name: "machamp",
      moves: [
        {
          move: "karate-chop",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 130,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 85,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "gluttony",
        },
      ],
      name: "bellsprout",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 75,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 30,
          name: "special-defense",
        },
        {
          base_stat: 40,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "gluttony",
        },
      ],
      name: "weepinbell",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 90,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "gluttony",
        },
      ],
      name: "victreebel",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "vine-whip",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 105,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "clear-body",
        },
        {
          ability: "liquid-ooze",
        },
        {
          ability: "rain-dish",
        },
      ],
      name: "tentacool",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 40,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 100,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "clear-body",
        },
        {
          ability: "liquid-ooze",
        },
        {
          ability: "rain-dish",
        },
      ],
      name: "tentacruel",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 70,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 80,
          name: "special-attack",
        },
        {
          base_stat: 120,
          name: "special-defense",
        },
        {
          base_stat: 100,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "rock-head",
        },
        {
          ability: "sturdy",
        },
        {
          ability: "sand-veil",
        },
      ],
      name: "geodude",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "sand-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 100,
          name: "defense",
        },
        {
          base_stat: 30,
          name: "special-attack",
        },
        {
          base_stat: 30,
          name: "special-defense",
        },
        {
          base_stat: 20,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "rock-head",
        },
        {
          ability: "sturdy",
        },
        {
          ability: "sand-veil",
        },
      ],
      name: "graveler",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "sand-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 115,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 35,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "rock-head",
        },
        {
          ability: "sturdy",
        },
        {
          ability: "sand-veil",
        },
      ],
      name: "golem",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "mega-kick",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 120,
          name: "attack",
        },
        {
          base_stat: 130,
          name: "defense",
        },
        {
          base_stat: 55,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "run-away",
        },
        {
          ability: "flash-fire",
        },
        {
          ability: "flame-body",
        },
      ],
      name: "ponyta",
      moves: [
        {
          move: "stomp",
        },
        {
          move: "double-kick",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-drill",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 85,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "run-away",
        },
        {
          ability: "flash-fire",
        },
        {
          ability: "flame-body",
        },
      ],
      name: "rapidash",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "swords-dance",
        },
        {
          move: "stomp",
        },
        {
          move: "double-kick",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 100,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 80,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 105,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "oblivious",
        },
        {
          ability: "own-tempo",
        },
        {
          ability: "regenerator",
        },
      ],
      name: "slowpoke",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "stomp",
        },
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 40,
          name: "special-defense",
        },
        {
          base_stat: 15,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "oblivious",
        },
        {
          ability: "own-tempo",
        },
        {
          ability: "regenerator",
        },
      ],
      name: "slowbro",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "ice-punch",
        },
        {
          move: "stomp",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
      stats: [
        {
          base_stat: 95,
          name: "hp",
        },
        {
          base_stat: 75,
          name: "attack",
        },
        {
          base_stat: 110,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 30,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "magnet-pull",
        },
        {
          ability: "sturdy",
        },
        {
          ability: "analytic",
        },
      ],
      name: "magnemite",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
      stats: [
        {
          base_stat: 25,
          name: "hp",
        },
        {
          base_stat: 35,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 95,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
        {
          slot: 2,
          type: {
            name: "steel",
            url: "https://pokeapi.co/api/v2/type/9/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "magnet-pull",
        },
        {
          ability: "sturdy",
        },
        {
          ability: "analytic",
        },
      ],
      name: "magneton",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 60,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 120,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
        {
          slot: 2,
          type: {
            name: "steel",
            url: "https://pokeapi.co/api/v2/type/9/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "keen-eye",
        },
        {
          ability: "inner-focus",
        },
        {
          ability: "defiant",
        },
      ],
      name: "farfetchd",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "gust",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
      stats: [
        {
          base_stat: 52,
          name: "hp",
        },
        {
          base_stat: 90,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 58,
          name: "special-attack",
        },
        {
          base_stat: 62,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "run-away",
        },
        {
          ability: "early-bird",
        },
        {
          ability: "tangled-feet",
        },
      ],
      name: "doduo",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
        {
          move: "jump-kick",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
      stats: [
        {
          base_stat: 35,
          name: "hp",
        },
        {
          base_stat: 85,
          name: "attack",
        },
        {
          base_stat: 45,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 35,
          name: "special-defense",
        },
        {
          base_stat: 75,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "run-away",
        },
        {
          ability: "early-bird",
        },
        {
          ability: "tangled-feet",
        },
      ],
      name: "dodrio",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
        {
          move: "jump-kick",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 110,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 60,
          name: "special-defense",
        },
        {
          base_stat: 110,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "thick-fat",
        },
        {
          ability: "hydration",
        },
        {
          ability: "ice-body",
        },
      ],
      name: "seel",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "slam",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-drill",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "thick-fat",
        },
        {
          ability: "hydration",
        },
        {
          ability: "ice-body",
        },
      ],
      name: "dewgong",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-drill",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 70,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 95,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ice",
            url: "https://pokeapi.co/api/v2/type/15/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "stench",
        },
        {
          ability: "sticky-hold",
        },
        {
          ability: "poison-touch",
        },
      ],
      name: "grimer",
      moves: [
        {
          move: "pound",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 25,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "stench",
        },
        {
          ability: "sticky-hold",
        },
        {
          ability: "poison-touch",
        },
      ],
      name: "muk",
      moves: [
        {
          move: "pound",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
      stats: [
        {
          base_stat: 105,
          name: "hp",
        },
        {
          base_stat: 105,
          name: "attack",
        },
        {
          base_stat: 75,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 100,
          name: "special-defense",
        },
        {
          base_stat: 50,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shell-armor",
        },
        {
          ability: "skill-link",
        },
        {
          ability: "overcoat",
        },
      ],
      name: "shellder",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
      stats: [
        {
          base_stat: 30,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 100,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 25,
          name: "special-defense",
        },
        {
          base_stat: 40,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shell-armor",
        },
        {
          ability: "skill-link",
        },
        {
          ability: "overcoat",
        },
      ],
      name: "cloyster",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 180,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ice",
            url: "https://pokeapi.co/api/v2/type/15/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "levitate",
        },
      ],
      name: "gastly",
      moves: [
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
      stats: [
        {
          base_stat: 30,
          name: "hp",
        },
        {
          base_stat: 35,
          name: "attack",
        },
        {
          base_stat: 30,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 35,
          name: "special-defense",
        },
        {
          base_stat: 80,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ghost",
            url: "https://pokeapi.co/api/v2/type/8/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "levitate",
        },
      ],
      name: "haunter",
      moves: [
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
      stats: [
        {
          base_stat: 45,
          name: "hp",
        },
        {
          base_stat: 50,
          name: "attack",
        },
        {
          base_stat: 45,
          name: "defense",
        },
        {
          base_stat: 115,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 95,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ghost",
            url: "https://pokeapi.co/api/v2/type/8/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "cursed-body",
        },
      ],
      name: "gengar",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 130,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 110,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ghost",
            url: "https://pokeapi.co/api/v2/type/8/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "rock-head",
        },
        {
          ability: "sturdy",
        },
        {
          ability: "weak-armor",
        },
      ],
      name: "onix",
      moves: [
        {
          move: "bind",
        },
        {
          move: "slam",
        },
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
      stats: [
        {
          base_stat: 35,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 160,
          name: "defense",
        },
        {
          base_stat: 30,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "insomnia",
        },
        {
          ability: "forewarn",
        },
        {
          ability: "inner-focus",
        },
      ],
      name: "drowzee",
      moves: [
        {
          move: "pound",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 48,
          name: "attack",
        },
        {
          base_stat: 45,
          name: "defense",
        },
        {
          base_stat: 43,
          name: "special-attack",
        },
        {
          base_stat: 90,
          name: "special-defense",
        },
        {
          base_stat: 42,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "insomnia",
        },
        {
          ability: "forewarn",
        },
        {
          ability: "inner-focus",
        },
      ],
      name: "hypno",
      moves: [
        {
          move: "pound",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
      stats: [
        {
          base_stat: 85,
          name: "hp",
        },
        {
          base_stat: 73,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 73,
          name: "special-attack",
        },
        {
          base_stat: 115,
          name: "special-defense",
        },
        {
          base_stat: 67,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "hyper-cutter",
        },
        {
          ability: "shell-armor",
        },
        {
          ability: "sheer-force",
        },
      ],
      name: "krabby",
      moves: [
        {
          move: "vice-grip",
        },
        {
          move: "guillotine",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
      stats: [
        {
          base_stat: 30,
          name: "hp",
        },
        {
          base_stat: 105,
          name: "attack",
        },
        {
          base_stat: 90,
          name: "defense",
        },
        {
          base_stat: 25,
          name: "special-attack",
        },
        {
          base_stat: 25,
          name: "special-defense",
        },
        {
          base_stat: 50,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "hyper-cutter",
        },
        {
          ability: "shell-armor",
        },
        {
          ability: "sheer-force",
        },
      ],
      name: "kingler",
      moves: [
        {
          move: "vice-grip",
        },
        {
          move: "guillotine",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 130,
          name: "attack",
        },
        {
          base_stat: 115,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 75,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "soundproof",
        },
        {
          ability: "static",
        },
        {
          ability: "aftermath",
        },
      ],
      name: "voltorb",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "sonic-boom",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 30,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 55,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 100,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "soundproof",
        },
        {
          ability: "static",
        },
        {
          ability: "aftermath",
        },
      ],
      name: "electrode",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "sonic-boom",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 50,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 80,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 150,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "harvest",
        },
      ],
      name: "exeggcute",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "headbutt",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 40,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 40,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "harvest",
        },
      ],
      name: "exeggutor",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "stomp",
        },
        {
          move: "headbutt",
        },
        {
          move: "take-down",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
      stats: [
        {
          base_stat: 95,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 85,
          name: "defense",
        },
        {
          base_stat: 125,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "rock-head",
        },
        {
          ability: "lightning-rod",
        },
        {
          ability: "battle-armor",
        },
      ],
      name: "cubone",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "swords-dance",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 50,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 35,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "rock-head",
        },
        {
          ability: "lightning-rod",
        },
        {
          ability: "battle-armor",
        },
      ],
      name: "marowak",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "swords-dance",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 110,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 45,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "limber",
        },
        {
          ability: "reckless",
        },
        {
          ability: "unburden",
        },
      ],
      name: "hitmonlee",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "double-kick",
        },
        {
          move: "mega-kick",
        },
        {
          move: "jump-kick",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 120,
          name: "attack",
        },
        {
          base_stat: 53,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 110,
          name: "special-defense",
        },
        {
          base_stat: 87,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "keen-eye",
        },
        {
          ability: "iron-fist",
        },
        {
          ability: "inner-focus",
        },
      ],
      name: "hitmonchan",
      moves: [
        {
          move: "comet-punch",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
      stats: [
        {
          base_stat: 50,
          name: "hp",
        },
        {
          base_stat: 105,
          name: "attack",
        },
        {
          base_stat: 79,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 110,
          name: "special-defense",
        },
        {
          base_stat: 76,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "own-tempo",
        },
        {
          ability: "oblivious",
        },
        {
          ability: "cloud-nine",
        },
      ],
      name: "lickitung",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 55,
          name: "attack",
        },
        {
          base_stat: 75,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 30,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "levitate",
        },
        {
          ability: "neutralizing-gas",
        },
        {
          ability: "stench",
        },
      ],
      name: "koffing",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "flamethrower",
        },
        {
          move: "psybeam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 35,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "levitate",
        },
        {
          ability: "neutralizing-gas",
        },
        {
          ability: "stench",
        },
      ],
      name: "weezing",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "flamethrower",
        },
        {
          move: "psybeam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 90,
          name: "attack",
        },
        {
          base_stat: 120,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "lightning-rod",
        },
        {
          ability: "rock-head",
        },
        {
          ability: "reckless",
        },
      ],
      name: "rhyhorn",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "stomp",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 85,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 30,
          name: "special-attack",
        },
        {
          base_stat: 30,
          name: "special-defense",
        },
        {
          base_stat: 25,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
        {
          slot: 2,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "lightning-rod",
        },
        {
          ability: "rock-head",
        },
        {
          ability: "reckless",
        },
      ],
      name: "rhydon",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
      stats: [
        {
          base_stat: 105,
          name: "hp",
        },
        {
          base_stat: 130,
          name: "attack",
        },
        {
          base_stat: 120,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 40,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
        {
          slot: 2,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "natural-cure",
        },
        {
          ability: "serene-grace",
        },
        {
          ability: "healer",
        },
      ],
      name: "chansey",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
      stats: [
        {
          base_stat: 250,
          name: "hp",
        },
        {
          base_stat: 5,
          name: "attack",
        },
        {
          base_stat: 5,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 105,
          name: "special-defense",
        },
        {
          base_stat: 50,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "chlorophyll",
        },
        {
          ability: "leaf-guard",
        },
        {
          ability: "regenerator",
        },
      ],
      name: "tangela",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "bind",
        },
        {
          move: "slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 55,
          name: "attack",
        },
        {
          base_stat: 115,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 40,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "early-bird",
        },
        {
          ability: "scrappy",
        },
        {
          ability: "inner-focus",
        },
      ],
      name: "kangaskhan",
      moves: [
        {
          move: "pound",
        },
        {
          move: "comet-punch",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
      stats: [
        {
          base_stat: 105,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "sniper",
        },
        {
          ability: "damp",
        },
      ],
      name: "horsea",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "headbutt",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
      stats: [
        {
          base_stat: 30,
          name: "hp",
        },
        {
          base_stat: 40,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 25,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "poison-point",
        },
        {
          ability: "sniper",
        },
        {
          ability: "damp",
        },
      ],
      name: "seadra",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
        {
          move: "leer",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 95,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 85,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "water-veil",
        },
        {
          ability: "lightning-rod",
        },
      ],
      name: "goldeen",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-attack",
        },
        {
          move: "fury-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
      stats: [
        {
          base_stat: 45,
          name: "hp",
        },
        {
          base_stat: 67,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 35,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 63,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "water-veil",
        },
        {
          ability: "lightning-rod",
        },
      ],
      name: "seaking",
      moves: [
        {
          move: "swords-dance",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-attack",
        },
        {
          move: "fury-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 92,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 68,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "illuminate",
        },
        {
          ability: "natural-cure",
        },
        {
          ability: "analytic",
        },
      ],
      name: "staryu",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
      stats: [
        {
          base_stat: 30,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 85,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "illuminate",
        },
        {
          ability: "natural-cure",
        },
        {
          ability: "analytic",
        },
      ],
      name: "starmie",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 75,
          name: "attack",
        },
        {
          base_stat: 85,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 85,
          name: "special-defense",
        },
        {
          base_stat: 115,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "soundproof",
        },
        {
          ability: "filter",
        },
        {
          ability: "technician",
        },
      ],
      name: "mr-mime",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
      stats: [
        {
          base_stat: 40,
          name: "hp",
        },
        {
          base_stat: 45,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 120,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
        {
          slot: 2,
          type: {
            name: "fairy",
            url: "https://pokeapi.co/api/v2/type/18/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swarm",
        },
        {
          ability: "technician",
        },
        {
          ability: "steadfast",
        },
      ],
      name: "scyther",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
        {
          move: "wing-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
      stats: [
        {
          base_stat: 70,
          name: "hp",
        },
        {
          base_stat: 110,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 55,
          name: "special-attack",
        },
        {
          base_stat: 80,
          name: "special-defense",
        },
        {
          base_stat: 105,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "oblivious",
        },
        {
          ability: "forewarn",
        },
        {
          ability: "dry-skin",
        },
      ],
      name: "jynx",
      moves: [
        {
          move: "pound",
        },
        {
          move: "double-slap",
        },
        {
          move: "mega-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 50,
          name: "attack",
        },
        {
          base_stat: 35,
          name: "defense",
        },
        {
          base_stat: 115,
          name: "special-attack",
        },
        {
          base_stat: 95,
          name: "special-defense",
        },
        {
          base_stat: 95,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ice",
            url: "https://pokeapi.co/api/v2/type/15/",
          },
        },
        {
          slot: 2,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "static",
        },
        {
          ability: "vital-spirit",
        },
      ],
      name: "electabuzz",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 83,
          name: "attack",
        },
        {
          base_stat: 57,
          name: "defense",
        },
        {
          base_stat: 95,
          name: "special-attack",
        },
        {
          base_stat: 85,
          name: "special-defense",
        },
        {
          base_stat: 105,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "flame-body",
        },
        {
          ability: "vital-spirit",
        },
      ],
      name: "magmar",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "thunder-punch",
        },
        {
          move: "mega-kick",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 95,
          name: "attack",
        },
        {
          base_stat: 57,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 85,
          name: "special-defense",
        },
        {
          base_stat: 93,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "hyper-cutter",
        },
        {
          ability: "mold-breaker",
        },
        {
          ability: "moxie",
        },
      ],
      name: "pinsir",
      moves: [
        {
          move: "vice-grip",
        },
        {
          move: "guillotine",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 125,
          name: "attack",
        },
        {
          base_stat: 100,
          name: "defense",
        },
        {
          base_stat: 55,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 85,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "intimidate",
        },
        {
          ability: "anger-point",
        },
        {
          ability: "sheer-force",
        },
      ],
      name: "tauros",
      moves: [
        {
          move: "stomp",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-attack",
        },
        {
          move: "horn-drill",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
      stats: [
        {
          base_stat: 75,
          name: "hp",
        },
        {
          base_stat: 100,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 40,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 110,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "rattled",
        },
      ],
      name: "magikarp",
      moves: [
        {
          move: "tackle",
        },
        {
          move: "hydro-pump",
        },
        {
          move: "splash",
        },
        {
          move: "flail",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
      stats: [
        {
          base_stat: 20,
          name: "hp",
        },
        {
          base_stat: 10,
          name: "attack",
        },
        {
          base_stat: 55,
          name: "defense",
        },
        {
          base_stat: 15,
          name: "special-attack",
        },
        {
          base_stat: 20,
          name: "special-defense",
        },
        {
          base_stat: 80,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "intimidate",
        },
        {
          ability: "moxie",
        },
      ],
      name: "gyarados",
      moves: [
        {
          move: "bind",
        },
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
      stats: [
        {
          base_stat: 95,
          name: "hp",
        },
        {
          base_stat: 125,
          name: "attack",
        },
        {
          base_stat: 79,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 100,
          name: "special-defense",
        },
        {
          base_stat: 81,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "water-absorb",
        },
        {
          ability: "shell-armor",
        },
        {
          ability: "hydration",
        },
      ],
      name: "lapras",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "horn-drill",
        },
        {
          move: "body-slam",
        },
        {
          move: "take-down",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
      stats: [
        {
          base_stat: 130,
          name: "hp",
        },
        {
          base_stat: 85,
          name: "attack",
        },
        {
          base_stat: 80,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 95,
          name: "special-defense",
        },
        {
          base_stat: 60,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ice",
            url: "https://pokeapi.co/api/v2/type/15/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "limber",
        },
        {
          ability: "imposter",
        },
      ],
      name: "ditto",
      moves: [
        {
          move: "transform",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      stats: [
        {
          base_stat: 48,
          name: "hp",
        },
        {
          base_stat: 48,
          name: "attack",
        },
        {
          base_stat: 48,
          name: "defense",
        },
        {
          base_stat: 48,
          name: "special-attack",
        },
        {
          base_stat: 48,
          name: "special-defense",
        },
        {
          base_stat: 48,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "run-away",
        },
        {
          ability: "adaptability",
        },
        {
          ability: "anticipation",
        },
      ],
      name: "eevee",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "double-kick",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      stats: [
        {
          base_stat: 55,
          name: "hp",
        },
        {
          base_stat: 55,
          name: "attack",
        },
        {
          base_stat: 50,
          name: "defense",
        },
        {
          base_stat: 45,
          name: "special-attack",
        },
        {
          base_stat: 65,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "water-absorb",
        },
        {
          ability: "hydration",
        },
      ],
      name: "vaporeon",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "double-kick",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
      stats: [
        {
          base_stat: 130,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 110,
          name: "special-attack",
        },
        {
          base_stat: 95,
          name: "special-defense",
        },
        {
          base_stat: 65,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "volt-absorb",
        },
        {
          ability: "quick-feet",
        },
      ],
      name: "jolteon",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "double-kick",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 65,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 110,
          name: "special-attack",
        },
        {
          base_stat: 95,
          name: "special-defense",
        },
        {
          base_stat: 130,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "flash-fire",
        },
        {
          ability: "guts",
        },
      ],
      name: "flareon",
      moves: [
        {
          move: "pay-day",
        },
        {
          move: "double-kick",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 130,
          name: "attack",
        },
        {
          base_stat: 60,
          name: "defense",
        },
        {
          base_stat: 95,
          name: "special-attack",
        },
        {
          base_stat: 110,
          name: "special-defense",
        },
        {
          base_stat: 65,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "trace",
        },
        {
          ability: "download",
        },
        {
          ability: "analytic",
        },
      ],
      name: "porygon",
      moves: [
        {
          move: "headbutt",
        },
        {
          move: "tackle",
        },
        {
          move: "take-down",
        },
        {
          move: "double-edge",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
      stats: [
        {
          base_stat: 65,
          name: "hp",
        },
        {
          base_stat: 60,
          name: "attack",
        },
        {
          base_stat: 70,
          name: "defense",
        },
        {
          base_stat: 85,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 40,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "shell-armor",
        },
        {
          ability: "weak-armor",
        },
      ],
      name: "omanyte",
      moves: [
        {
          move: "bind",
        },
        {
          move: "slam",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
      stats: [
        {
          base_stat: 35,
          name: "hp",
        },
        {
          base_stat: 40,
          name: "attack",
        },
        {
          base_stat: 100,
          name: "defense",
        },
        {
          base_stat: 90,
          name: "special-attack",
        },
        {
          base_stat: 55,
          name: "special-defense",
        },
        {
          base_stat: 35,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "shell-armor",
        },
        {
          ability: "weak-armor",
        },
      ],
      name: "omastar",
      moves: [
        {
          move: "bind",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-attack",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
      stats: [
        {
          base_stat: 70,
          name: "hp",
        },
        {
          base_stat: 60,
          name: "attack",
        },
        {
          base_stat: 125,
          name: "defense",
        },
        {
          base_stat: 115,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "battle-armor",
        },
        {
          ability: "weak-armor",
        },
      ],
      name: "kabuto",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "sand-attack",
        },
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
      stats: [
        {
          base_stat: 30,
          name: "hp",
        },
        {
          base_stat: 80,
          name: "attack",
        },
        {
          base_stat: 90,
          name: "defense",
        },
        {
          base_stat: 55,
          name: "special-attack",
        },
        {
          base_stat: 45,
          name: "special-defense",
        },
        {
          base_stat: 55,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "swift-swim",
        },
        {
          ability: "battle-armor",
        },
        {
          ability: "weak-armor",
        },
      ],
      name: "kabutops",
      moves: [
        {
          move: "scratch",
        },
        {
          move: "razor-wind",
        },
        {
          move: "swords-dance",
        },
        {
          move: "cut",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
      stats: [
        {
          base_stat: 60,
          name: "hp",
        },
        {
          base_stat: 115,
          name: "attack",
        },
        {
          base_stat: 105,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 80,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "rock-head",
        },
        {
          ability: "pressure",
        },
        {
          ability: "unnerve",
        },
      ],
      name: "aerodactyl",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "wing-attack",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
      stats: [
        {
          base_stat: 80,
          name: "hp",
        },
        {
          base_stat: 105,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 60,
          name: "special-attack",
        },
        {
          base_stat: 75,
          name: "special-defense",
        },
        {
          base_stat: 130,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "immunity",
        },
        {
          ability: "thick-fat",
        },
        {
          ability: "gluttony",
        },
      ],
      name: "snorlax",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
      stats: [
        {
          base_stat: 160,
          name: "hp",
        },
        {
          base_stat: 110,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 65,
          name: "special-attack",
        },
        {
          base_stat: 110,
          name: "special-defense",
        },
        {
          base_stat: 30,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "pressure",
        },
        {
          ability: "snow-cloak",
        },
      ],
      name: "articuno",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 85,
          name: "attack",
        },
        {
          base_stat: 100,
          name: "defense",
        },
        {
          base_stat: 95,
          name: "special-attack",
        },
        {
          base_stat: 125,
          name: "special-defense",
        },
        {
          base_stat: 85,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ice",
            url: "https://pokeapi.co/api/v2/type/15/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "pressure",
        },
        {
          ability: "static",
        },
      ],
      name: "zapdos",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "whirlwind",
        },
        {
          move: "fly",
        },
        {
          move: "headbutt",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 90,
          name: "attack",
        },
        {
          base_stat: 85,
          name: "defense",
        },
        {
          base_stat: 125,
          name: "special-attack",
        },
        {
          base_stat: 90,
          name: "special-defense",
        },
        {
          base_stat: 100,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "pressure",
        },
        {
          ability: "flame-body",
        },
      ],
      name: "moltres",
      moves: [
        {
          move: "razor-wind",
        },
        {
          move: "gust",
        },
        {
          move: "wing-attack",
        },
        {
          move: "whirlwind",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
      stats: [
        {
          base_stat: 90,
          name: "hp",
        },
        {
          base_stat: 100,
          name: "attack",
        },
        {
          base_stat: 90,
          name: "defense",
        },
        {
          base_stat: 125,
          name: "special-attack",
        },
        {
          base_stat: 85,
          name: "special-defense",
        },
        {
          base_stat: 90,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shed-skin",
        },
        {
          ability: "marvel-scale",
        },
      ],
      name: "dratini",
      moves: [
        {
          move: "bind",
        },
        {
          move: "slam",
        },
        {
          move: "headbutt",
        },
        {
          move: "body-slam",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
      stats: [
        {
          base_stat: 41,
          name: "hp",
        },
        {
          base_stat: 64,
          name: "attack",
        },
        {
          base_stat: 45,
          name: "defense",
        },
        {
          base_stat: 50,
          name: "special-attack",
        },
        {
          base_stat: 50,
          name: "special-defense",
        },
        {
          base_stat: 50,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "dragon",
            url: "https://pokeapi.co/api/v2/type/16/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "shed-skin",
        },
        {
          ability: "marvel-scale",
        },
      ],
      name: "dragonair",
      moves: [
        {
          move: "bind",
        },
        {
          move: "slam",
        },
        {
          move: "headbutt",
        },
        {
          move: "horn-drill",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
      stats: [
        {
          base_stat: 61,
          name: "hp",
        },
        {
          base_stat: 84,
          name: "attack",
        },
        {
          base_stat: 65,
          name: "defense",
        },
        {
          base_stat: 70,
          name: "special-attack",
        },
        {
          base_stat: 70,
          name: "special-defense",
        },
        {
          base_stat: 70,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "dragon",
            url: "https://pokeapi.co/api/v2/type/16/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "inner-focus",
        },
        {
          ability: "multiscale",
        },
      ],
      name: "dragonite",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
        {
          move: "thunder-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
      stats: [
        {
          base_stat: 91,
          name: "hp",
        },
        {
          base_stat: 134,
          name: "attack",
        },
        {
          base_stat: 95,
          name: "defense",
        },
        {
          base_stat: 100,
          name: "special-attack",
        },
        {
          base_stat: 100,
          name: "special-defense",
        },
        {
          base_stat: 80,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "dragon",
            url: "https://pokeapi.co/api/v2/type/16/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
    },
    {
      abilities: [
        {
          ability: "pressure",
        },
        {
          ability: "unnerve",
        },
      ],
      name: "mewtwo",
      moves: [
        {
          move: "mega-punch",
        },
        {
          move: "pay-day",
        },
        {
          move: "fire-punch",
        },
        {
          move: "ice-punch",
        },
      ],
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      stats: [
        {
          base_stat: 106,
          name: "hp",
        },
        {
          base_stat: 110,
          name: "attack",
        },
        {
          base_stat: 90,
          name: "defense",
        },
        {
          base_stat: 154,
          name: "special-attack",
        },
        {
          base_stat: 90,
          name: "special-defense",
        },
        {
          base_stat: 130,
          name: "speed",
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
        },
      ],
    },
  ];

  return pokeData;
};

export default preloadedPokemonData;
