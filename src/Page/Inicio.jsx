import Formulario from "../Orquestador/Formulario"
import { useFormulario } from "../Hook/UseFormulario"
const campos=[
    {text:"Usuario",name:"User",typo:"text"},
    {text:"Contraseña",name:"Pass",typo:"password"}
]

const boton=[
    {texto:"Registrese",typo:"submit"},
    {texto:"Inicio",typo:"button"},
    
]
export default function Inicio(){
    const {formData,handleChange,handleSubmit}=useFormulario(campos)
    return(
            <Formulario
                key={boton}
                palabra="Inicie sesion"
                boton={boton}
                campos={campos}
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        )
}