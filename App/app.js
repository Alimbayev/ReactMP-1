import React from 'react';
import './app.css';
import errorBoundary from './errorBoundary';

class App extends Component {
    render() {
        return (
            <div> 
                <label class="redText">netflixroulette</label>
                <label class="whiteText" for="search">FIND YOUR MOVIE</label>
                <input class="search" type="text" placeholder="Search..."/>
                <label class="whiteText">search by</label>
                <button>Title</button>
                <button>Genre</button>
                <button>Search</button>
            </div>
            );
        }
    }

export default errorBoundary(App);