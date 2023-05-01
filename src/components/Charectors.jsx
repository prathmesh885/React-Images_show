
import { Box,Grid } from "@mui/material";
import { data } from "../constains/data";
import Charector from "./charector";

const Charectors = ()=>{
    return (
      <Box style = {{ margin: '10px 35px' }}>
        <Grid container>
        {
            data.characters.map(value =>(
                <Grid item>
                    <Charector value={value} />   
                </Grid>
                ))
         }
            </Grid>
      </Box>
    )
}

export default Charectors;