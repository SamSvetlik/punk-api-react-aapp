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
        console.log(this.state.arrayOfBeers[index])
        let copy = [...this.state.likedBeers, this.state.arrayOfBeers[index]]
        this.setState({likedBeers: copy})
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
