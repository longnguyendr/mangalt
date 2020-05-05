import React, {Component} from 'react'
import Carousel from 'react-multi-carousel'
import '../css/home.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Home extends Component {
    render() {
        return (
            <div className="Container">
                <div className="basics">
                <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                </Carousel>
                    <h1>Scratch</h1>
                    <p>Mangalt</p>
                </div>
            </div>
        )
    }
}

export default Home
