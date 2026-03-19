import Logo from "../asset/img/Logo.png"
import Titulos from "../Componentes/Titulos"
import Campos from "../Componentes/Campos"
import Boton from "../Componentes/Botones"

export default function Formulario({palabra,campos,boton,onSubmit,formData,onChange}){
    return(
        <div>
            <img src={Logo} alt="" />
            <Titulos
                key={palabra}
                palabra={palabra}
            />
            <form onSubmit={onSubmit}>
                {campos.map((camp)=>(
                    <Campos
                        key={camp.name}
                        text={camp.text}
                        name={camp.name}
                        typo={camp.typo}
                        value={formData[camp.name]}
                        onChange={onChange}
                    />
                ))}
                {boton.map((btn)=>(
                    <Boton
                        key={btn.texto}
                        texto={btn.texto}
                        type={btn.typo}
                    />
                ))}
            </form>
        </div>
    )
}