import Logo from "../Componentes/Logo"
import Titulos from "../Componentes/Titulos"
import Campos from "../Componentes/Campos"
import Boton from "../Componentes/Botones"
const campos=[
    {text:"Nombre",name:"Nombre",typo:"text"},
    {text:"Apellido",name:"Apell",typo:"text"},
    {text:"Usuario",name:"User",typo:"text"},
    {text:"Contraseña",name:"Pass",typo:"password"},
    {text:"Telefono",name:"Tel",typo:"text"}
]
const palabra=[
    "Registrese como usuario"
]
const boton=[
    "Registrese","Inicio"
]
export default function Registro(){
    return(
        <div>
            <img src={Logo} alt="" />
            <Titulos
                key={palabra}
                palabra={palabra}
            />
            <form action="">
                {campos.map((camp)=>(
                    <Campos
                        key={camp.name}
                        text={camp.text}
                        name={camp.name}
                        typo={camp.typo}
                    />
                ))}
                {boton.map((btn)=>(
                    <Boton
                        key={btn}
                        texto={btn}
                    />
                ))}
            </form>
        </div>
    )
}