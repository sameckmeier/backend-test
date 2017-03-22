import React, { Component } from 'react';
import share from '../../assets/images/share.png';
import twitter from '../../assets/images/twitter.png';
import styles from './TwitterWidget.scss';

export default class TwitterWidget extends Component {
  constructor(props) {
    super(props);

    this.toggleTwitterButton = this.toggleTwitterButton.bind(this);
    this.state = { revealTwitterButton: false };
  }

  toggleTwitterButton() {
    this.setState({ revealTwitterButton: !this.state.revealTwitterButton })
  }

  render() {
    const { status } = this.props;

    return <div className={ styles.container }>
       <button className={ styles.shareButton } onClick={ this.toggleTwitterButton }>
         <img src={ share } alt="Share"/>
       </button>
       {
         this.state.revealTwitterButton &&
         <button className={ styles.twitter }>
           <a href={`https://twitter.com/intent/tweet?${status}`} >
             <img src={ twitter } alt="Twitter"/>
             <span>Tweet this event</span>
           </a>
         </button>
       }
    </div>;
  }
}
