import {  FilterDropdown } from "./FilterDropdown";
import styled from 'styled-components';



export function FilterList ({handleChange, inputName, inputRace }){
    return(
   <>
   <FilterConytainer>
        <InputSearch ref={inputName} onChange={handleChange} placeholder='Name'/>
        <InputSearch ref={inputRace}  onChange={handleChange} placeholder='Race'/>
        <FilterDropdown  handleChange={handleChange} options = {[{ id: 1, placeholder: 'Gender' },{ id: 2, status: 'Male' },{id: 3, status: 'Female'}]}/>
    </FilterConytainer>
       </>
    )
}

const FilterConytainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
padding-left: 100px;
`

const InputSearch = styled.input`
list-style-type: none;
background:rgb(56, 56, 56);
border:rgb(173, 30, 30) 3px solid;
width: 249px;
color: rgb(255, 255, 255);
height: 40px;
border-radius: 7px;
padding: 8px 0 0 3px;
font-size: 16px;
 &:hover{
background:rgb(95, 95, 95);
color: rgb(255, 255, 255);
}
&:focus{
outline: none;
}

`