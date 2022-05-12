import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import getPokemonById from "../services/getPokemonById"


const Pokemon = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [pokeImg, setPokeImg] = useState('')
  const [pokeName, setPokeName] = useState('')
  const [pokeNumber, setPokeNumber] = useState(0)
  const [pokeHeight, setPokeHeight] = useState(0)
  const [pokeWeight, setPokeWeight] = useState(0)
  const [pokeAbilities, setPokeAbilities] = useState([])
  const [pokeMoves, setPokeMoves] = useState([])

  useEffect(() => {
    getPokemonById(id)
      .then((response) => {
        console.log(response.data)
        setPokeImg(response.data.sprites.front_default)
        setPokeName(response.data.name)
        setPokeNumber(response.data.order)
        setPokeHeight(response.data.height)
        setPokeWeight(response.data.weight)
        setPokeMoves(response.data.moves)
        setPokeAbilities(response.data.abilities)
      })
  }, [id])

  const abilitiesList = pokeAbilities?.map((ability) => <span style={{backgroundColor: '#494c52', margin: '10px 10px'}} key={ability.ability.name}>{ability.ability.name}</span>)

  const movesList = pokeMoves?.map((move) => <span style={{textTransform: 'capitalize', backgroundColor: '#494c52', margin: '10px 10px'}} key={move.move.name}>{move.move.name} </span>)

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <br />
      <Link to={`/pokedex/${id}/encounters`}><button>Encounters</button></Link>
      <div>
        <img style={{width: '200px', height: 'auto'}} src={pokeImg} alt={pokeName} />
        <h1 style={{textTransform: 'capitalize'}}>{pokeName}</h1>
        <h3>#{pokeNumber}</h3>
        <h6>Height: {pokeHeight} decimeters</h6>
        <h6>Weight: {pokeWeight} hectograms</h6>
        <h2>Abilities:</h2>
        {abilitiesList}
        <h2>Moves:</h2>
        {movesList}
      </div>
    
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Pokemon