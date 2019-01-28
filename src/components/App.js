import React from 'react'
import { Helmet } from 'react-helmet'
import { Animated } from 'react-animated-css'
import axios from 'axios'
import uuidv1 from 'uuid/v1'

import {
  Row,
  Col
} from 'react-flexbox-grid'

import ConvoMain from './convo/ConvoMain'
import ConvoLog from './convo/ConvoLog'

import './App.css'

let qUserType = '';
let animationInDelay = 1000,
    textAnimDelay = 1500,
    textAnimDuration = 550,
    imageAnimationDelay = 2500,
    animationOutDelay = 3500;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      answers: [],
      finished: 0,
      isVisible: true
    };
  }

  fetchData = () => {
    axios.get("http://chat.enlighted.ru/json.php")
    .then(res => {
      console.log(res.data)
      const questionsData = res.data.question.map(question => ({
        id: question.id,
        text: question.text,
        url_gif: question.url_gif,
        user_type: question.user_type
      }));

      const answersData = res.data.answer.map(answer => ({
        id: uuidv1(),
        text: answer.text,
        url_gif: answer.url_gif,
        user_type: answer.user_type
      }));

      this.setState({
        questions: questionsData,
        answers: answersData,
        finished: res.data.finished
      });
    });
  }

  checkUserType = () => {
    this.state.questions.map(question => {
      return qUserType = question.user_type.toString()
    });
  }

  componentWillMount() {
    this.fetchData()

    if (this.state.finished === 1) {
      this.setState({
        isVisible: false
      })
    }
  }

  renderLeftPanel = () => {
    const { questions, answers } = this.state
    
    return (
      <React.Fragment>
        <Row>
          <Col lg className="left-col" style={{ paddingRight: '48%' }}>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={animationInDelay * 5}
            >
              <ul className="unstyled-list">
                {questions.map(question => {
                  return (
                    <ConvoLog
                      key={question.id}
                      userLetter={question.user_type}
                      message={question.text}
                      imageURL={question.url_gif === null ? '' : question.url_gif}
                    />
                  )
                })}
                { answers.map(answer => {
                  this.checkUserType()

                  return (
                    <ConvoLog 
                      key={ answer.id }
                      userLetter={qUserType === 'M' ? 'J' : 'M'}
                      message={ answer.text }
                      imageURL={ answer.url_gif === null ? '' : answer.url_gif }
                    />
                  )
                })}
              </ul>
              <hr className="border-green mt-2 mb-2" />
            </Animated>
          </Col>
        </Row>
      </React.Fragment>
    );
  };

  renderMainPanel = () => {
    const { questions, answers, finished, isVisible } = this.state;

    console.log("q", questions);
    console.log("a", answers);
    console.log('f', finished);
    console.log('qM', qUserType);

    return (
      <React.Fragment>
        <Row>
          <Col lg className="main-col">
            <ul className="unstyled-list">
              {questions.map(question => {
                return (
                  <ConvoMain 
                    key={question.id}
                    userLetter={question.user_type}
                    message={question.text}
                    imageURL={question.url_gif === null ? "" : question.url_gif}
                    textAnimDelay={textAnimDelay}
                    textAnimDuration={textAnimDuration}
                    animationInDelay={animationInDelay}
                    imageAnimationDelay={imageAnimationDelay} 
                    animationOutDelay={animationOutDelay * 2} 
                    isVisible={ isVisible } 
                  />
                );
              })}
              {answers.map(answer => {
                this.checkUserType() // Check for the user_type
                return (
                  <ConvoMain
                    key={answer.id}
                    userLetter={qUserType === "M" ? "J" : 'M'}
                    message={answer.text}
                    imageURL={answer.url_gif === null ? "" : answer.url_gif}
                    textAnimDelay={textAnimDelay}
                    textAnimDuration={textAnimDuration * 3}
                    animationInDelay={animationInDelay * 2}
                    imageAnimationDelay={imageAnimationDelay * 2}
                    animationOutDelay={animationOutDelay * 2}
                    isVisible={ isVisible } 
                  />
                );
              })}
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    )
  }

  renderRightPanel = () => {
    const { questions, answers } = this.state

    return (
      <React.Fragment>
        <Row>
          <Col lg className="right-col" style={{ paddingLeft: '48%' }}>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={animationInDelay * 8}
            >
              <ul className="unstyled-list">
                { questions.map(question => {
                  return (
                    <ConvoLog
                      key={ question.id }
                      userLetter={question.user_type}
                      message={ question.text }
                      imageURL={ question.url_gif === null ? '' : question.url_gif }
                    />
                  )
                })}

                { answers.map(answer => {
                  this.checkUserType()
                  
                  return (
                    <ConvoLog 
                      key={answer.id}
                      userLetter={qUserType === 'M' ? 'J' : 'M'}
                      message={ answer.text }
                      imageURL={answer.url_gif === null ? '' : answer.url_gif }
                    />
                  )
                })}
              </ul>
              <hr className="border-purple mt-2 mb-2" />
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
