import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import BeerComponent from './components/BeerComponent'


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
          arrayOfBeers: [],
          likedBeers: []
        }

      }     
      
      componentDidMount() {
      axios.get('https://api.punkapi.com/v2/beers')
        .then(res => {
          const arrayOfBeers = res.data
          arrayOfBeers.forEach(beer => {beer.isLiked = false})
          this.setState({ arrayOfBeers })
        })
      }

      handleClick = (index) => {
        // My first idea was to give each beer an "isLiked" property on import
        // I was able to do this, but then was unable to change it.
        // this.setState({arrayOfBeers[index].isLiked: true}) <-- Doesn't work. Syntax error?

        // My next idea was to grab the beer object, make a copy, and append the beer object to the end of the array.
        console.log(this.state.arrayOfBeers[index])
        // Successfully grabs the beer object
        let copy = [...this.state.likedBeers, this.state.arrayOfBeers[index]]
        // The copy returns as expected, an array with the beer object appended.
        console.log(copy)
        // But when I use setState, likedBeers does not become the copy.
        this.setState({ likedBeers: copy })
        console.log(this.state.likedBeers)
      }

        render() {
          return (
                <div className='App'>
                  <header className='App-header'>
                    <ol>{this.state.arrayOfBeers.map((beer, index) => {
                      const { name, image_url, first_brewed, tagline, abv, description } = beer
                      return (
                        <BeerComponent likedBeers={this.state.likedBeers} key={index} index={index} handleClick={this.handleClick} name={name} image_url={image_url} first_brewed={first_brewed} tagline={tagline} abv={abv} description={description}></BeerComponent>
                      )
                    })}</ol>
                  </header>
                </div>
          )
    }
}

export default App;
