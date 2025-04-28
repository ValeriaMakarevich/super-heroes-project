import { useContext, useRef, useState } from "react";
import {  HeroesContext  } from "../../DataCharacters";
import styled from 'styled-components';
import { FilterList } from "../Filter/FilterList";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export function CharactersList (){
    const heroes = useContext(HeroesContext)
    const [valueName, setValueName] = useState('')
    const [valueRace, setValueRace] = useState('')
    const [valueGender, setValueGender] = useState('')
    const [statusWindow, setStatusWindow] = useState(false)
    const inputName = useRef(null)
    const inputRace = useRef(null)
  

    const handleChange = (event) =>{
        setValueRace(inputRace.current.value)
        setValueName(inputName.current.value)
        setValueGender(event.target.value)
    }

  const filteredHeroes = heroes.filter((heroe) => {
    if(valueRace === '' && valueName === '' && valueGender === ''){
        return heroes
    }
   else if(valueRace){
    if(heroe.appearance.race !== null){
      return heroe.appearance.race.toLowerCase().includes(valueRace.toLowerCase())
    }
    }else if(valueName){
   return heroe.name.toLowerCase().includes(valueName.toLowerCase())
    }else if(valueGender !== '-'){
      return heroe.appearance.gender.toLowerCase().includes(valueGender.toLowerCase())
    }
  })


const windowOpenClick = () =>{
   setStatusWindow(true)

}

  console.log(statusWindow)
 

   

   
return(
    <>
    <ModalWindow statusWindow ={statusWindow} setStatusWindow={setStatusWindow}/>
       <FilterList  inputName={inputName} inputRace={inputRace} handleChange={handleChange}  />
    <ListContainer >
{filteredHeroes.map((item, id) => {
 return (
    <CharactersContainer key={id} onClick={windowOpenClick}>
 <ImageHero  src={item.images.md}></ImageHero>
 <div>Name: {item.name}</div>
 <div>Gender: {(item.appearance.gender == '-' ? 'Unknown' :  item.appearance.gender)}</div>
 <div>Race: {(item.appearance.race == null) ? 'Unknown' :  item.appearance.race} </div>
 </CharactersContainer>
 )
})}
</ListContainer>

    </>
)
}

const ListContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 400px);
grid-template-rows: repeat(auto-fit);
row-gap:200px;
column-gap:100px;
left: 4%;
color: white;
font-weight: bold;
padding-left: 100px;
`

const CharactersContainer = styled.div`
height: 400px;
width:  360px;
font-size: 20px;
border-radius: 3%;
background: black;
background-color: black;
cursor: pointer;
padding: 5px 2px 120px 2px;
> * {
padding: 4px 0px 0px 4px;
}
`

const ImageHero = styled.img`
height: 400px;
width: 350px;
border-radius: 3%;
`

