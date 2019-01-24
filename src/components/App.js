import React from 'react'
import _ from 'lodash'
import { Helmet } from 'react-helmet'

import {
  Row,
  Col
} from 'react-flexbox-grid'

// import { mainData } from '../lib/data'

import Convo from './convo/Convo';

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bots: null 
    }
  }

  componentDidMount() {
  }

  renderLeftPanel = () => {
    return (
      <React.Fragment>
        <Row>
          <Col lg>
            <ul className="unstyled-list">
              <Convo
                userLetter={'J'}
                message={'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}
                animationInDelay={14000}
                textAnimDelay={14500}
                textAnimDuration={550}
                imageURL={``}
                imageAnimationDelay={16500}
              />
              <Convo
                userLetter={'M'}
                message={'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}
                animationInDelay={17000}
                textAnimDelay={17500}
                textAnimDuration={550}
                imageURL={``}
                imageAnimationDelay={19500}
              />
              <Convo
                userLetter={'J'}
                message={'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}
                animationInDelay={21000}
                textAnimDelay={21500}
                textAnimDuration={550}
                imageURL={``}
                imageAnimationDelay={23500}
              />
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    )
  }

  renderMainPanel = () => {
    return (
      <React.Fragment>
        <Row>
          <Col lg>
            <ul className="unstyled-list">
              <Convo
                userLetter={'J'}
                message={'Is there life in space?'}
                animationInDelay={1000}
                textAnimDelay={1500}
                textAnimDuration={550}
                imageURL={`https://media.giphy.com/media/xUA7aW1ddSxtVT5zzi/giphy.gif`}
                imageAnimationDelay={2500}
                style={{ wordWrap: 'break-word' }}
              />
              <Convo
                userLetter={'M'}
                message={'We can survive in the most hostile environment known as space.'}
                animationInDelay={3500}
                textAnimDelay={4000}
                textAnimDuration={550}
                imageURL={``}
                imageAnimationDelay={5500}
                style={{ wordWrap: 'break-word' }}
              />
              <Convo
                userLetter={'J'}
                message={'Man can only live in space with the help of advanced equipment.'}
                animationInDelay={6000}
                textAnimDelay={6500}
                textAnimDuration={550}
                imageURL={``}
                style={{ wordWrap: 'break-word' }}
              />
              <Convo
                userLetter={'M'}
                message={'One idea was to use the Saturn V to launch a small space station that would itself be constructed out of the second stage of a Saturn rocket.'}
                animationInDelay={9000}
                textAnimDelay={9500}
                textAnimDuration={550}
                imageURL={`https://media.giphy.com/media/3ohs4gSs3V0Q7qOtKU/giphy.gif`}
                imageAnimationDelay={11500}
                style={{ wordWrap: 'break-word' }}
              />
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    )
  }

  renderRightPanel = () => {
    return (
      <React.Fragment>
        <Row>
          <Col lg>
            <Convo
              userLetter={'M'}
              message={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}
              animationInDelay={14000}
              textAnimDelay={14500}
              textAnimDuration={550}
              imageURL={``}
              imageAnimationDelay={16500}
            />
            <Convo
              userLetter={'J'}
              message={'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}
              animationInDelay={17000}
              textAnimDelay={17500}
              textAnimDuration={550}
              imageURL={``}
              imageAnimationDelay={19500}
            />
            <Convo
              userLetter={'M'}
              message={'Duis autem vel eum iriure dolor in hendrerit in vvulputate velit esse molestie consequat.'}
              animationInDelay={21000}
              textAnimDelay={21500}
              textAnimDuration={550}
              imageURL={`https://cdn2.vox-cdn.com/uploads/chorus_asset/file/3905550/memefontsocial.0.jpg`}
              imageAnimationDelay={23500}
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chatbot</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Row around={'lg'}>
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
    )
  }
}

export default App
