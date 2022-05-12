import axios from "axios"

const getAllPokemons = async (position) => {

  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=${position + 20}`
  const request = await axios.get(URL)

  return request
}

export default getAllPokemons