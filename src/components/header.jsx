import { AppBar,Toolbar,styled } from "@mui/material"
import Logo from './images/images.png'

const StyledHeader = styled(AppBar)`
background : #000;
`

const Header = ()=>{
    return(
      <StyledHeader position="static">
        <Toolbar>
<img src={Logo} style={ { width:350 } } alt="logo"></img>
        </Toolbar>
      </StyledHeader>
 
    )
}

export default Header