import React from "react";
import './App.css';
import AddPhoto from "./components/addPhoto";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Background from "./components/background";
import TextButton from "./components/TextButton";


function App() {

  return (
      <Box m={6}>
          <Grid container spacing={3}>
            <Background/>
            <AddPhoto/>
            <TextButton/>

          </Grid>
      </Box>

  )
}

export default App;
