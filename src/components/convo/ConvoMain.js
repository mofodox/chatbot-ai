import React from 'react'
import TextyAnim from 'rc-texty'
import {Animated} from 'react-animated-css'
import PropTypes from 'prop-types'

// avatars
import J from '../../assets/J.png'
import M from '../../assets/M.png'

class ConvoMain extends React.Component {
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
        <li className="media mb-5" style={this.props.style}>
          <Animated
            animationIn={`bounceIn`}
            animationInDelay={this.props.animationInDelay}
            animationOut={ `bounceOut` }
            animationOutDelay={ this.props.animationOutDelay }
            isVisible={this.props.isVisible}
          >
            <p>
              <img src={J} className="mr-3 user-avatar" alt="user-avatar" />
            </p>
          </Animated>
          <div className="media-body">
            <TextyAnim
              type={`left`}
              mode={`smooth`}
              delay={this.props.textAnimDelay}
              duration={this.props.textAnimDuration}
              split={this.getSplit}
              onEnd={this.props.onEnd}
              className="convo-message-left-main"
            >
              {this.props.message}
            </TextyAnim>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={this.props.imageAnimationDelay}
              animationOut={`fadeOut`}
              animationOutDelay={this.props.animationOutDelay}
              isVisible={this.props.isVisible}
            >
              {this.props.imageURL === '' ? null : <p><img src={this.props.imageURL} className="img-fluid mt-4" style={{ height: '175px' }} alt="anything" /></p>}
            </Animated>
          </div>
        </li>
      )
    } else {
      return (
        <li className="media text-right mb-5" style={this.props.style}>
          <div className="media-body">
            <TextyAnim
              type={`right`}
              mode={`smooth`}
              delay={this.props.textAnimDelay}
              duration={this.props.textAnimDuration}
              split={this.getSplit}
              leave={this.props.leave}
              className="convo-message-right-main"
            >
              {this.props.message}
            </TextyAnim>
            <Animated
              animationIn={`fadeIn`}
              animationInDelay={this.props.imageAnimationDelay}
              animationOut={`fadeOut`}
              animationOutDelay={this.props.animationOutDelay}
              isVisible={this.props.isVisible}
            >
              {this.props.imageURL === '' ? null : <p><img src={this.props.imageURL} className="img-fluid mt-4" style={{ height: '175px' }} alt="anything" /></p>}
            </Animated>
          </div>
          <Animated
            animationIn={`bounceIn`}
            animationInDelay={this.props.animationInDelay}
            animationOut={`bounceOut`}
            animationOutDelay={this.props.animationOutDelay}
            isVisible={this.props.isVisible}
          >
            <img src={M} className="ml-3 float-right user-avatar" alt="user-avatar" />
          </Animated>
        </li>
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

ConvoMain.propTypes = {
  textAnimDelay: PropTypes.number.isRequired,
  textAnimDuration: PropTypes.number.isRequired,
  animationInDelay: PropTypes.number.isRequired,
  userLetter: PropTypes.string.isRequired,
  imageAnimationDelay: PropTypes.number,
  imageURL: PropTypes.string
}

export default ConvoMain
