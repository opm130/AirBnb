import Logo from "../Componentes/Logo"
import Titulos from "../Componentes/Titulos"
import Campos from "../Componentes/Campos"
import Boton from "../Componentes/Botones"
const campos=[
    {text:"Usuario",name:"User",typo:"text"},
    {text:"Contraseña",name:"Pass",typo:"password"}
]
const palabra=[
    "Inicie sesion"
]
const boton=[
    "Inicio","Registrese"
]
export default function Inicio(){
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