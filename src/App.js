import React, { Component } from 'react';
import './App.css';
import BirdCard from "./components/BirdCard";
import Grid from "./components/Grid";
import Nav from "./components/Nav";
//import Wrapper from "./components/Wrapper";
import birds from "./birds.json";


class App extends Component {
  // Setting this.state.birds to the birds json array
  state = {
    birds,
    score: 0,
    highScore: 0,
    gameStatus: "Click all images ONLY ONCE to win!!"
  }

  handleCardClick = id => {
    let bSecondClick = false;

    let update = {
      birds: [ ...this.state.birds ],
      score: this.state.score,
      highScore: this.state.highScore,
      gameStatus: this.state.gameStatus
    }

    update.birds.forEach( bird => {
      if ( bird.id === id ) {
        if ( bird.clicked ) {
          bSecondClick = true;
        } else {
          bird.clicked = true;
          update.score++;
          if ( update.score > update.highScore ) {
            update.highScore = update.score;
          }
        }
      }
    })

    if ( bSecondClick ) {
      update.birds.forEach( bird => bird.clicked = false );
      update.gameStatus = "Dho!!  You already clicked on THAT one!!  Your score was:   " + update.score;
      update.score = 0;
    } else if ( update.score && !( update.score % update.birds.length )) {
      // Perfect score!  Starting over!!
      update.gameStatus = "Congratulations!!  Perfect Score!!";
      update.birds.forEach( bird => bird.clicked = false );
      update.score = 0;
    } else {
      // Sailing smoothly through.. Set the message to "encourage"!!!
      update.gameStatus = "Click all images ONLY ONCE to win!!";
    }

    update.birds = update.birds.sort(() => 0.5 - Math.random());

    this.setState({ birds: update.birds, score: update.score, highScore: update.highScore, gameStatus: update.gameStatus });
  }

  // Map over this.state.birds and render a BirdCard component for each bird object
  render() {
  
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore} gameStatus={this.state.gameStatus}/>
        <Grid shake={!this.state.score && this.state.highScore}>
          {this.state.birds.map( bird => (
            <BirdCard
              id={bird.id}
              key={bird.id}
              image={bird.image}
              bFinished={this.state.score && !(this.state.score % this.state.birds.length )}
              handleCardClick={()=>this.handleCardClick( bird.id )}
            />
          ))}
        </Grid>
      </div>
    )
  }
}

export default App;
