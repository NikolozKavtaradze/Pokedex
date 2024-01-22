document.addEventListener("DOMContentLoaded", () => {

    const group_container = document.getElementById('group-container');
    
    const selectedPokemon = JSON.parse(localStorage.getItem("selectedPokemon")) || []

    shuffleArray(selectedPokemon)

    
    const colors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };
    
    const main_types = Object.keys(colors)

    const createPokemonCard = () => {

        selectedPokemon.forEach(pokemon => {
            
            const pokemonEl = document.createElement('div')
            pokemonEl.classList.add('flip-card','pokemon')
           
            const id = pokemon.id.toString().padStart(3, '0')
            const name = pokemon.name
            
            const base_experience = pokemon.base_experience
        
            const weight = pokemon.weight
            
            const poke_type = pokemon.types.map(type => type.type.name)
            
            const type = main_types.find(type => poke_type.indexOf(type) > -1)
            
            const color = colors[type]
            
        
            const flipCardInner = document.createElement('div');
            flipCardInner.classList.add('flip-card-inner');
        
            const flipCardFront = document.createElement('div');
            flipCardFront.classList.add('flip-card-front');
            flipCardFront.style.backgroundColor = color;
        
            const flipCardBack = document.createElement('div');
            flipCardBack.classList.add('flip-card-back');
        
            flipCardFront.innerHTML = `
                <span class="number">#${id}</span>
                <div class="img_container">
                    <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" alt="${name}">
                </div>
                <div class="info">
                    <h3 class="name">${name}</h3>
                    <small class="type">Type: ${type}</small>
                </div>
            `;
        
            flipCardBack.innerHTML = `
                <h2 class="weight">Weight: ${weight}</h2>
                <h2 class="experience">Experience: ${base_experience}</h2>
            `;
        
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            pokemonEl.appendChild(flipCardInner);
        
            group_container?.appendChild(pokemonEl)

        });
    }

    createPokemonCard();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}