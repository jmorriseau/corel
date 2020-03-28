import React, { Component } from 'react';
import "./PricingCard.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class PricingCard extends Component {
    render(){
        return (
           <section className="page-section">
               {this.props.cards &&
                    this.props.cards.map( (item, idx) => {
                        return (
                        <Card key={idx}>
                            <CardContent>
                                <h3>{item.title}</h3>
                                <h1>{item.price}</h1>
                                <ul>
                                {item.features.map((feature) => {
                                    return <li>{feature}</li>
                                })}
                                </ul>
                                
                            </CardContent>
                        </Card>)
               })}
           </section>
        )
    };
}

export { PricingCard };