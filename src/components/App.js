import React from 'react'
import { Helmet } from 'react-helmet'
import { Animated } from 'react-animated-css'

import {
  Row,
  Col
} from 'react-flexbox-grid'

// import { mainData } from '../lib/data'

import ConvoMain from './convo/ConvoMain'
import ConvoLog from './convo/ConvoLog'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bots: null
    };
  }


  // Render main convo
  renderConvoMain = (
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
        <ConvoMain
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
          <Col lg className="left-col" style={{ paddingRight: '48%' }}>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={14500}
            >
              <ul className="unstyled-list">
                <ConvoLog
                  userLetter={`J`}
                  message={`Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`}
                  imageURL={``}
                />
                <ConvoLog
                  userLetter={`M`}
                  message={`Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`}
                  imageURL={``}
                />
              </ul>
              <hr className="border-red mt-5 mb-5" />
            </Animated>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={16500}
            >
              <ul className="unstyled-list">
                <ConvoLog
                  userLetter={`J`}
                  message={`Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`}
                  imageURL={``}
                />
                <ConvoLog
                  userLetter={`M`}
                  message={`Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`}
                  imageURL={``}
                />
              </ul>
              <hr className="border-green mt-5 mb-5" />
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
          <Col lg className="main-col">
            <ul className="unstyled-list">
              {this.renderConvoMain(
                "J",
                "Is there life in space?",
                "https://media.giphy.com/media/xUA7aW1ddSxtVT5zzi/giphy.gif",
                1000,
                1500,
                550,
                2500
              )}
              {this.renderConvoMain(
                "M",
                "We can survive in the most hostile environment known as space.",
                '',
                3500,
                4000,
                550,
                5500
              )}
              {this.renderConvoMain(
                "J",
                "Man can only live in space with the help of advanced equipment.",
                "",
                6000,
                6500,
                550
              )}
              {this.renderConvoMain(
                "M",
                "One idea was to use the Saturn V to launch a small space station that would itself be constructed out of the second stage of a Saturn rocket.",
                '',
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
          <Col lg className="right-col" style={{ paddingLeft: '48%' }}>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={20000}
            >
              <ul className="unstyled-list">
                <ConvoLog
                  userLetter={`M`}
                  message={`Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`}
                  imageURL={``}
                />
                <ConvoLog
                  userLetter={`J`}
                  message={`Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`}
                  imageURL={``}
                />
                <ConvoLog
                  userLetter={`M`}
                  message={`Duis autem vel eum iriure dolor in hendrerit in vvulputate velit esse molestie consequat.`}
                  imageURL={`https://cdn2.vox-cdn.com/uploads/chorus_asset/file/3905550/memefontsocial.0.jpg`}
                />
              </ul>
              <hr className="border-purple mt-5 mb-5" />
            </Animated>
          </Col>
        </Row>
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>AI Love</title>
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
      </React.Fragment>;
  }
}

export default App
