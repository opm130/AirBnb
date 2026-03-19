import { useState } from "react";

export function useFormulario(campos){
    const estadoInicial=campos.reduce((acc,campo)=>{
        acc[campo.name]=""
        return acc
    },{})
    const[formData,setFormData]=useState(estadoInicial)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData(prev=>({...prev,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Sus datos",formData)
    }
    return {formData,handleChange,handleSubmit}
}