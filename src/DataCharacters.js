import axios from "axios";
import { useEffect, useState, createContext } from "react";

const URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
 export const HeroesContext = createContext([])
export function DataCharacters ({children}){
    const [dataHeroes, setDataHeroes] = useState([])
    useEffect(() =>{
  axios
  .get(URL)
 
    .then((response) => {
        setDataHeroes(response.data)
    }) 
    .catch((error) =>{
       console.log(error)
    })
}, [] 
)
return <HeroesContext.Provider value={dataHeroes}>{children}</HeroesContext.Provider>
}




