import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import s from './styles'
import Image from "next/image";
export default class Example extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 150,
    showNavigation: false,
    config: config.stiff,
    xDown: null,
    yDown: null
  };

  slides = this.props.content.map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });
  componentDidMount() {
    this.setState({ gotoSlide: 0 });
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  xDown = null;
  yDown = null;

  getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); 
  };

  handleTouchStart = (evt) => {
    const firstTouch = this.getTouches(evt)[0];
    this.setState({xDown: firstTouch.clientX})
    this.setState({yDown: firstTouch.clientY})
  };

  handleTouchMove = (evt) => {
    if (!this.state.xDown || !this.state.yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        this.setState({ goToSlide: this.state.goToSlide + 1 });
      } else {
        /* right swipe */
        this.setState({ goToSlide: this.state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    this.setState({xDown: null})
    this.setState({yDown: null})
  };

  render() {
    return (
      <div
        style={{ width: "80%", height: "500px", margin: "0 auto" }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}

        />
        <div {...s.dots}>
          <div style={{cursor: "pointer"}}>
          <Image
            src={this.state.goToSlide == 0 ? "/hexagon-active.svg" : "/hexagon-inactive.svg"}
            width={this.state.goToSlide == 0 ? 15 :12}
            height={this.state.goToSlide == 0 ? 15 : 12}
            alt="hexagon"
            onClick={() => this.setState({ goToSlide: 0 })}
          />
          </div>
          <div style={{cursor: "pointer"}}>
          <Image
            src={this.state.goToSlide == 1 ? "/hexagon-active.svg" : "/hexagon-inactive.svg"}
            width={this.state.goToSlide == 1 ? 15 :12}
            height={this.state.goToSlide == 1 ? 15 : 12}
            alt="hexagon"
            onClick={() => this.setState({ goToSlide: 1 })}

            />
          </div>
          <div style={{cursor: "pointer"}}>

          <Image
            src={this.state.goToSlide == 2 ? "/hexagon-active.svg" : "/hexagon-inactive.svg"}
            width={this.state.goToSlide == 2 ? 15 :12}
            height={this.state.goToSlide == 2 ? 15 : 12}
            alt="hexagon"
            onClick={() => this.setState({ goToSlide: 2 })}
            />
            </div>
        </div>
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "none",
            justifyContent: "space-around",
          }}
        >
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div>
        </div>
      </div>
    );
  }
}
