import React from "react";
import "./index.css";
import { Header, Hero, HeroText, HeroImage, Footer, PricingCard, ContactForm } from "./components";
import NavItems from "./constants/navmenu.json";
import PricingData from "./components/PricingCard/mock.json";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import { Typography, Button } from "@material-ui/core";


export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {console.log(theme)}
      <Header nav={NavItems} />
      <main className="main-content">
        <div className="container">
        <Typography variant="h1">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="h4">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="h5">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="h6">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur.</Typography>
        <Typography variant="subtitle1">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="subtitle2">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="caption">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="overline">Lorem ipsum dolor sit amet.</Typography>


        </div>
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

        <PricingCard cards={PricingData}/>
        <ContactForm />
        

        </main>
      <Footer nav={NavItems} />
    </MuiThemeProvider>
  );
}
