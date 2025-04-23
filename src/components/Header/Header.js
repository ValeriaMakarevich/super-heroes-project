import styled from 'styled-components';
import { FilterList } from '../Filter/FilterList';

export function Header(){
    return(
<HeaderContainer>
    <ImageLogo src='./image.png'></ImageLogo>
</HeaderContainer>
    ) 
}

const HeaderContainer = styled.div`
width: 100%;
height: 400px;
background-color: black;
margin-bottom: 20px;
`


const ImageLogo = styled.img`
width: 800px;
height: 300px;
padding-top: 50px;
`