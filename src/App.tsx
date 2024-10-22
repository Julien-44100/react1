import PokemonCard from "./components/PokemonCard.tsx";

function Pokemon() {
  return (
    <div>
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Green Pokémon Bulbasaur with  a white background"
        />
        <figcaption>
          <p>Bulbasaur</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Pokemon;
