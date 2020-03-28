import React, { Component } from 'react';
import "./PricingCard.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Typography, Button } from '@material-ui/core';

class PricingCard extends Component {
    render(){
        return (
           <section className="page-section">
               <div className="container">
               <Typography variant="h2">Lorem, ipsum dolor.</Typography>
                   <div className="card-container">
                    {this.props.cards &&
                            this.props.cards.map( (item, idx) => {
                                return (
                                <Card elevation={2} key={idx} className="pricing-card">
                                    <CardContent>
                                        <Typography variant="subtitle2">{item.title}</Typography>
                                        <Typography variant="h3" color="textSecondary">{item.price}</Typography>
                                        <ul>
                                        {item.features.map((feature) => {
                                            return <Typography component="li" variant="body1">{feature}</Typography>
                                        })}
                                        </ul>
                                        
                                    </CardContent>
                                    <CardActions>
                                            <Button fullWidth color="primary" variant="contained">Learn More</Button>
                                        </CardActions>
                                </Card>)
                    })}
                    </div>
               </div>
           </section>
        )
    };
}

export { PricingCard };