import { useState } from "react";

import { Card , styled ,Box ,Typography} from "@mui/material";

const Image = styled('img')({
    width: '100%',
    height:300
})

const Component = styled(Card) `
position:  relative;
width:200px;
margin : 10px
`

const Container = styled(Box)`
    position:  absolute;
    top:0;
    color: #fff;
    height: 300;
    width:300
    background:#000;
    opacity: 0.5;
`

const Charector = ({value}) =>{
const [ toggle,setToggle] = useState(false);

    const toggleHover = ()=>{
        setToggle(!toggle);
    }

    return (
        value.characterImageFull ?
     <Component onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <Image src= { value.characterImageFull } alt="picture"/>
        {
            toggle ? 
        <Container>
       <Typography>Name: { value.characterName}</Typography>
       <Typography> Actor Name : { value.actorName} </Typography>
       <Typography> House : {value.houseName} </Typography>
       {/* <Typography> NickName : {value.} </Typography> */}
        </Container>
        : ''
        }
     </Component>
     : ''
    )
}

export default Charector;