import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PokeItem from "../components/PokeItem"
import getAllPokemons from "../services/getAllPokemons"


const PokemonList = () => {

  const [pokeList, setPokeList] = useState([])
  const [arrOffsetPosition, setArrOffseetPosition] = useState(0)

  const userName = useSelector((state => state.userName))

  useEffect(() => {
    getAllPokemons(arrOffsetPosition)
      .then((response) => {
        setPokeList(response.data.results);
      })
  }, [arrOffsetPosition])

  const list = pokeList.map((item) => <PokeItem key={item.url} url={item.url}/>)

  return (
    <div>
      <h2>Welcome {userName} to your Pokedex!</h2>
      {arrOffsetPosition === 0 ? (
        <button onClick={() => setArrOffseetPosition(arrOffsetPosition + 20)}>Next 20</button>
      ) : (
        <>
          <button onClick={() => setArrOffseetPosition(arrOffsetPosition - 20)}>Prev 20</button>
          <button onClick={() => setArrOffseetPosition(arrOffsetPosition + 20)}>Next 20</button>
        </>
      )}
      {list}
      {arrOffsetPosition === 0 ? (
        <button onClick={() => setArrOffseetPosition(arrOffsetPosition + 20)}>Next 20</button>
      ) : (
        <>
          <button onClick={() => setArrOffseetPosition(arrOffsetPosition - 20)}>Prev 20</button>
          <button onClick={() => setArrOffseetPosition(arrOffsetPosition + 20)}>Next 20</button>
        </>
      )}
      
    </div>
  )
}

export default PokemonList