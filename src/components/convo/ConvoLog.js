import React from 'react'

// avatars
import J from '../../assets/J.png'
import M from '../../assets/M.png'

class ConvoLog extends React.Component {
  checkUser = () => {
    if (this.props.userLetter === 'J') {
      return (
        <li className="media mb-3">
          <p>
            <img src={J} className="mr-3 user-avatar" alt="user-avatar" />
          </p>
          <div className="media-body">
            <p className="convo-message-left">
              {this.props.message}
            </p>
            {this.props.imageURL === '' ? null : <p><img src={ this.props.imageURL } className="img-fluid mt-1" style={{height: '175px'}} alt="anything" /></p> }
          </div> 
        </li>
      )
    } else {
      return (
        <li className="media mb-3 text-right">
          <div className="media-body">
            <p className="convo-message-right">
              {this.props.message}
            </p>
            {this.props.imageURL === '' ? null : <p><img src={this.props.imageURL} className="img-fluid mt-1" style={{ height: '175px' }} alt="anything" /></p>}
          </div>
          <p>
            <img src={M} className="ml-3 float-right user-avatar" alt="user-avatar" />
          </p>
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

export default ConvoLog
