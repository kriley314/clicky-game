import React, { Component } from 'react';
import './App.css';
import BirdCard from "./components/BirdCard";
import Grid from "./components/Grid";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import birds from "./birds.json";

class App extends Component {
  // Setting this.state.birds to the birds json array
  state = {
    birds,
    score: 0,
    highScore: 0
  }

  handleCardClick = id => {
    let bSecondClick = false;

    let update = {
      birds: [ ...this.state.birds ],
      score: this.state.score,
      highScore: this.state.highScore
    }

    update.birds.forEach( bird => {
      if ( bird.id === id ) {
        if ( bird.clicked ) {
          bSecondClick = true;
        } else {
          bird.clicked = true;
          update.score++;
          if ( update.score > update.topScore ) {
            update.topScore = update.score;
          }
        }
      }
    })

    if ( bSecondClick ) {
      update.birds.forEach( bird => bird.clicked = false );
      update.score = 0;
    };

    if ( update.score && !( update.score % update.birds.length )) {
      update.birds.forEach( bird => bird.clicked = false );
    };

    update.birds = update.birds.sort(() => 0.5 - Math.random());

    this.setState({ birds: update.birds, score: update.score, topScore: update.topScore });
  }

  // Map over this.state.birds and render a BirdCard component for each bird object
  render() {
  
    return (
      <Wrapper>
        <Nav score={this.state.score} topScore={this.state.highScore}/>
        <Grid shake={!this.state.score && this.state.highScore}>
          {this.state.birds.map( bird => (
            <BirdCard
              id={bird.id}
              key={bird.id}
              image={bird.image}
              bFinished={this.state.score && !(this.state.score % this.state.birds.length )}
              handleCardClick={this.handleCardClick( bird.id )}
            />
          ))}
        </Grid>
      </Wrapper>
    )
  }
}

export default App;
