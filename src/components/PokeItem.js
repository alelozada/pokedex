import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getPokemonByUrl from "../services/getPokemonByUrl";
import PokeType from "./PokeType";

const PokeItem = ({url}) => {

  const [pokeObj, setPokeObj] = useState({})
  const [img, setImg] = useState('')
  const [arrTypes, setArrTypes] = useState([])
  const [hp, setHp] = useState(0)
  const [attack, setAttack] = useState(0)
  const [defense, setDefense] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [pokeId, setPokeId] = useState(null)


  useEffect(() => {
    getPokemonByUrl(url)
      .then((response) => {
        setPokeObj(response.data)
        setImg(response.data.sprites.front_default)
        setArrTypes(response.data.types)
        setHp(response.data.stats[0].base_stat)
        setAttack(response.data.stats[1].base_stat)
        setDefense(response.data.stats[2].base_stat)
        setSpeed(response.data.stats[5].base_stat)
        setPokeId(response.data.id)
      })
  }, [url])

  return (
    <Link to={`/pokedex/${pokeId}`} >
      <div style={{margin: "15px", backgroundColor: "#333", borderRadius: "8px"}}>
        <img src={img} alt={pokeObj.name} />
        <h1>{pokeObj.name}</h1>
        {arrTypes.map((item) => <PokeType key={item.slot} type={item.type} />)}
        <h3>HP: {hp}</h3>
        <h3>Attack: {attack}</h3>
        <h3>Defense: {defense}</h3>
        <h3>Speed: {speed}</h3>
      </div>
    </Link>
  );
};

export default PokeItem;