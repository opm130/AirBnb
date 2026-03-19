import Formulario from "../Orquestador/Formulario"
import { useFormulario } from "../Hook/UseFormulario"
const campos=[
    {text:"Nombre",name:"Nombre",typo:"text"},
    {text:"Apellido",name:"Apell",typo:"text"},
    {text:"Usuario",name:"User",typo:"text"},
    {text:"Contraseña",name:"Pass",typo:"password"},
    {text:"Telefono",name:"Tel",typo:"text"},
    {text:"#Documento",name:"Doc",typo:"text"},
]
const boton=[
    {texto:"Registrese",typo:"submit"},
    {texto:"Inicio",typo:"button"},
    
]
export default function Registro(){
    const {formData,handleChange,handleSubmit}=useFormulario(campos)
    return(
        <Formulario
        key={campos}
        palabra="Registrese como usuario"
        boton={boton}
        campos={campos}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    )
}