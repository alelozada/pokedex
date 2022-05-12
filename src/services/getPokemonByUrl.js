import axios from "axios";

const getPokemonByUrl = async (url) => {

  const request = await axios.get(url)

  return request
}

export default getPokemonByUrl