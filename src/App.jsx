import React from "react";
import "./index.css";
import { Header, Hero, HeroText, HeroImage, Footer } from "./components";
import NavItems from "./constants/navmenu.json";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import { Typography, Button } from "@material-ui/core";

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {console.log(theme)}
      <Header nav={NavItems} />
      <main className="main-content">
        
        <Hero>
          <HeroText>
            <Typography variant="h1">Header here</Typography>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nisi nulla maiores, eius quo ea!</Typography>
            <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, possimus, dolores sequi iste necessitatibus obcaecati fuga minus amet quia aut maiores modi!</Typography>
            

            <Button variant="contained" color="primary">Button text</Button>
            <Button variant="outlined" color="primary">Button text</Button>
          </HeroText>
          <HeroImage src="https://image.freepik.com/free-vector/group-business-people-avatar-character_24877-57314.jpg" />
        </Hero>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iure consequuntur quibusdam expedita praesentium ut architecto! Illo porro veritatis ad aliquid quis vero nesciunt illum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iure consequuntur quibusdam expedita praesentium ut architecto! Illo porro veritatis ad aliquid quis vero nesciunt illum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iure consequuntur quibusdam expedita praesentium ut architecto! Illo porro veritatis ad aliquid quis vero nesciunt illum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iure consequuntur quibusdam expedita praesentium ut architecto! Illo porro veritatis ad aliquid quis vero nesciunt illum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iure consequuntur quibusdam expedita praesentium ut architecto! Illo porro veritatis ad aliquid quis vero nesciunt illum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iure consequuntur quibusdam expedita praesentium ut architecto! Illo porro veritatis ad aliquid quis vero nesciunt illum.</p>
      </main>
      <Footer nav={NavItems} />
    </MuiThemeProvider>
  );
}
