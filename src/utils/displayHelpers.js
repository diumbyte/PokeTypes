export const pokeIdToSpriteURL = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

export const typeToHex = (type) => {
    const colors = {
        bug: "#93BB3A",
        dark: "#595761",
        dragon: "#176CC5",
        electric: "#F1D85A",
        fairy: "#F1D85A",
        fighting: "#D14461",
        fire: "#F9A555",
        flying: "#A2BCEA",
        ghost: "#A2BCEA",
        grass: "#63BC5D",
        ground: "#D87C52",
        ice: "#D87C52",
        normal: "#A0A29F",
        poison: "#B667CD",
        psychic: "#F88684",
        rock: "#C9BB8D",
        steel: "#5995A2",
        water: "#579EDD",
    }

    return colors[type];
}