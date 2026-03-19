export default function Campos({name,text,typo,value,onChange}){
    return(
        <div>
            <label htmlFor={name}>{text}</label>
            <input 
            type={typo} 
            name={name} 
            id={name} 
            value={value}
            onChange={onChange}
            />
        </div>
    )
}