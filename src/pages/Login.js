import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlerOnClick = () => {
    dispatch({
      type: "@user/login",
      payload: userName
    })
    navigate('/pokedex')
  }

  return (
    <div>
      <label htmlFor="setName">Ingresa tu nombre de entrenador: </label>
      <br />
      <input id="setName" onChange={(e) => setUserName(e.target.value)}/>
      <br />
      <button onClick={handlerOnClick}>Iniciar Sesión</button>
    </div>
  )
}

export default Login