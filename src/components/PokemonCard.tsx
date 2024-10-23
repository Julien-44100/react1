function Pokemoncard() {
  return (
    <figure>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="green Pokemon width background white"
      />
      <figcaption>Bulbasur</figcaption>
    </figure>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default Pokemoncard;
