import React from 'react'
import TextyAnim from 'rc-texty'
import {Animated} from 'react-animated-css'
import PropTypes from 'prop-types'

class Convo extends React.Component {
  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }

  checkUser = () => {
    if (this.props.userLetter === 'J') {
      return (
        <div className="media mb-5">
          <Animated animationIn={`bounceIn`} animationInDelay={this.props.animationInDelay}>
            <img src={`https://via.placeholder.com/48/ff0090/FFFFFF?text=${this.props.userLetter}`} className="mr-3" alt="user-avatar" />
          </Animated>
          <div className="media-body">
            <TextyAnim
              delay={this.props.textAnimDelay}
              duration={this.props.textAnimDuration}
              split={this.getSplit}
            >
              {this.props.message}
            </TextyAnim>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={this.props.imageAnimationDelay}
            >
              {this.props.imageURL === '' ? null : <img src={this.props.imageURL} className="img-fluid mt-4" alt="anything" /> }
            </Animated>
          </div>
        </div>
      )
    } else {
      return (
        <div className="media text-right mb-5">
          <div className="media-body">
            <TextyAnim
              delay={this.props.textAnimDelay}
              duration={this.props.textAnimDuration}
              split={this.getSplit}
            >
              {this.props.message}
            </TextyAnim>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={this.props.imageAnimationDelay}
            >
              {this.props.imageURL === '' ? null : <img src={this.props.imageURL} className="img-fluid mt-4" alt="anything" /> }
            </Animated>
          </div>
          <Animated animationIn={`bounceIn`} animationInDelay={this.props.animationInDelay}>
            <img src={`https://via.placeholder.com/48/000000/FFFFFF?text=${this.props.userLetter}`} className="ml-3 float-right" alt="user-avatar" />
          </Animated>
        </div>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.checkUser()}
      </React.Fragment>
    )
  }
}

Convo.propTypes = {
  textAnimDelay: PropTypes.number.isRequired,
  textAnimDuration: PropTypes.number.isRequired,
  animationInDelay: PropTypes.number.isRequired,
  userLetter: PropTypes.string.isRequired,
  imageAnimationDelay: PropTypes.number,
  imageURL: PropTypes.string
}

export default Convo
