export default function Campos({name,text,typo}){
    return(
        <div>
            <label htmlFor={name}>{text}</label>
            <input type={typo} name={name} id={name} />
        </div>
    )
}