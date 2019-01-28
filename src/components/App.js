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

let qUserType = [];
let animationInDelay = 1000,
    textAnimDelay = 1500,
    textAnimDuration = 550,
    imageAnimationDelay = 2500;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      answers: []
    };
  }

  fetchData = () => {
    axios.get("http://chat.enlighted.ru/json.php").then(res => {
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
        answers: answersData
      });
    });
  }

  componentDidMount() {
    this.fetchData()
  }

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
    const { questions, answers } = this.state;

    console.log("q", questions);
    console.log("a", answers);

    return <React.Fragment>
        <Row>
          <Col lg className="main-col">
            <ul className="unstyled-list">
              {questions.map(question => {
                return <ConvoMain key={question.id} userLetter={question.user_type} message={question.text} imageURL={question.url_gif === null ? "" : question.url_gif} textAnimDelay={textAnimDelay} textAnimDuration={textAnimDuration} animationInDelay={animationInDelay} imageAnimationDelay={imageAnimationDelay} />;
              })}
              {answers.map(answer => {
                questions.map(question => {
                  qUserType.push(question.user_type);
                  return qUserType;
                });

                return <ConvoMain key={answer.id} userLetter={qUserType.toString() === "M" ? "J" : "M"} message={answer.text} imageURL={answer.url_gif === null ? "" : answer.url_gif} textAnimDelay={textAnimDelay} textAnimDuration={textAnimDuration * 3} animationInDelay={animationInDelay * 2} imageAnimationDelay={imageAnimationDelay * 2} />;
              })}
            </ul>
          </Col>
        </Row>
      </React.Fragment>;
  }

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
            {/* {this.renderLeftPanel()} */}
          </Col>
          <Col lg={5} id="main-panel">
            {this.renderMainPanel()}
          </Col>
          <Col lg id="right-panel" className="d-none d-sm-block">
            {/* {this.renderRightPanel()} */}
          </Col>
        </Row>
      </React.Fragment>;
  }
}

export default App
