import React from 'react'
import _ from 'lodash'
import { Helmet } from 'react-helmet';

import {
  Row,
  Col
} from 'react-flexbox-grid'

import { data } from '../lib/data'

import Convo from './convo/Convo';

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    if (_.isEmpty(this.state.data)) {
      return;
    }

    this.setState({
      data: data
    })
  }

  renderLeftPanel = () => {
    return (
      <React.Fragment>
        <Convo
          userLetter={'J'}
          message={'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '}
        />
        <Convo
          userLetter={'M'}
          message={'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '}
        />
      </React.Fragment>
    )
  }

  renderMainPanel = () => {
    return (
      <React.Fragment>
        <Convo
          userLetter={'J'}
          message={'Is there life in space?'}
          animationInDelay={1000}
          textAnimDelay={1500}
          textAnimDuration={550}
          imageURL={`https://media.giphy.com/media/xUA7aW1ddSxtVT5zzi/giphy.gif`}
          imageAnimationDelay={2500}
        />
        <Convo
          userLetter={'M'}
          message={'We can survive in the most hostile environment known as space.'}
          animationInDelay={3500}
          textAnimDelay={4000}
          textAnimDuration={550}
          imageURL={`https://www.thoughtco.com/thmb/DQr-0CmApI5s4F6NW9XEUxrXUaA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/1tcq9g-597f51e068e1a20011a86fa4.jpg`}
          imageAnimationDelay={5500}
        />
        <Convo
          userLetter={'J'}
          message={'Man can only live in space with the help of advanced equipment.'}
          animationInDelay={6000}
          textAnimDelay={6500}
          textAnimDuration={550}
          imageURL={``}
        />
        <Convo
          userLetter={'M'}
          message={'One idea was to use the Saturn V to launch a small space station that would itself be constructed out of the second stage of a Saturn rocket.'}
          animationInDelay={9000}
          textAnimDelay={9500}
          textAnimDuration={550}
          imageURL={`https://media.giphy.com/media/3ohs4gSs3V0Q7qOtKU/giphy.gif`}
          imageAnimationDelay={11500}
        />
      </React.Fragment>
    )
  }

  renderRightPanel = () => {
    return (
      <React.Fragment>
        <Convo 
          userLetter={'M'}
          message={'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}
        />
        <Convo
          userLetter={'J'}
          message={'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}
        />
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
        <Row>
          <Col lg id="left-panel" className="invisible d-none d-sm-block">
            {this.renderLeftPanel()}
          </Col>
          <Col lg={4} id="main-panel">
            {this.renderMainPanel()}
          </Col>
          <Col lg id="right-panel" className="invisible d-none d-sm-block">
            {this.renderRightPanel()}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default App
