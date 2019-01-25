import React from 'react'
import { Helmet } from 'react-helmet'
import { Animated } from 'react-animated-css'

import {
  Row,
  Col
} from 'react-flexbox-grid'

// import { mainData } from '../lib/data'

import Convo from './convo/Convo'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bots: null
    };
  }

  renderConvo = (
    letter,
    message,
    imageURL = "",
    animationInDelay = 0,
    textAnimDelay = 0,
    textAnimDuration = 0,
    imageAnimationDelay = 0
  ) => {
    return (
      <Animated>
        <Convo
          userLetter={`${letter}`}
          message={`${message}`}
          imageURL={`${imageURL}`}
          animationInDelay={animationInDelay}
          textAnimDelay={textAnimDelay}
          textAnimDuration={textAnimDuration}
          imageAnimationDelay={imageAnimationDelay}
        />
      </Animated>
    );
  };

  renderLeftPanel = () => {
    return (
      <React.Fragment>
        <Row>
          <Col lg className="left-col" style={{ paddingRight: '32%' }}>
            <ul className="unstyled-list">
              {this.renderConvo(
                "J",
                "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
                "",
                25000,
                26000,
                550,
                28500
              )}
              {this.renderConvo(
                "M",
                "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
                '',
                31000,
                31500,
                550,
                33500
              )}
            </ul>

            <Animated
                animationIn={`fadeIn`}
                animationInDelay={ 34000 }
            >
              <hr className="border-red" />
            </Animated>

            <ul className="unstyled-list mt-5">
              {this.renderConvo(
                "M",
                "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
                "",
                25000,
                26000,
                550,
                28500
              )}
              {this.renderConvo(
                "J",
                "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
                '',
                31000,
                31500,
                550,
                33500
              )}
            </ul>

            <Animated
              animationIn={`fadeIn`}
              animationInDelay={34000}
            >
              <hr className="border-green" />
            </Animated>
          </Col>
        </Row>
      </React.Fragment>
    );
  };

  renderMainPanel = () => {
    return (
      <React.Fragment>
        <Row>
          <Col lg>
            <ul className="unstyled-list">
              {this.renderConvo(
                "J",
                "Is there life in space?",
                "https://media.giphy.com/media/xUA7aW1ddSxtVT5zzi/giphy.gif",
                1000,
                1500,
                550,
                2500
              )}
              {this.renderConvo(
                "M",
                "We can survive in the most hostile environment known as space.",
                '',
                3500,
                4000,
                550,
                5500
              )}
              {this.renderConvo(
                "J",
                "Man can only live in space with the help of advanced equipment.",
                "",
                6000,
                6500,
                550
              )}
              {this.renderConvo(
                "M",
                "One idea was to use the Saturn V to launch a small space station that would itself be constructed out of the second stage of a Saturn rocket.",
                'https://media.giphy.com/media/3ohs4gSs3V0Q7qOtKU/giphy.gif',
                9000,
                9500,
                550,
                11500
              )}
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    );
  };

  renderRightPanel = () => {
    return (
      <React.Fragment>
        <Row>
          <Col lg className="right-col" style={{ paddingLeft: '32%' }}>
            {this.renderConvo(
              "M",
              "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
              '',
              14000,
              14500,
              550,
              16500
            )}
            {this.renderConvo(
              "J",
              "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
              '',
              17000,
              17500,
              550,
              19500
            )}
            {this.renderConvo(
              "M",
              "Duis autem vel eum iriure dolor in hendrerit in vvulputate velit esse molestie consequat.",
              'https://cdn2.vox-cdn.com/uploads/chorus_asset/file/3905550/memefontsocial.0.jpg',
              21000,
              21500,
              550,
              23500
            )}

            <Animated
              animationIn={`fadeIn`}
              animationInDelay={24000}
            >
              <hr className="border-purple" />
            </Animated>
          </Col>
        </Row>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chatbot</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Row around={"lg"}>
          <Col lg id="left-panel" className="d-none d-sm-block">
            {this.renderLeftPanel()}
          </Col>
          <Col lg={5} id="main-panel">
            {this.renderMainPanel()}
          </Col>
          <Col lg id="right-panel" className="d-none d-sm-block">
            {this.renderRightPanel()}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default App
