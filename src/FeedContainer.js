import React, { Component } from 'react';
import Feed from './Feed';
import FeedForm from './FeedForm';
// import { Redirect } from '../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';
import { Redirect } from 'react-router-dom';
class FeedContainer extends Component {

  render () {
    return (
      <div className="container">
        {this.props.isConnected ?  (() => {
          var feeds = this.props.feeds
        var feedList = feeds.map((feed, index) => {
          return <Feed
            feed={feed}
            key={index}
            setActiveFeed={this.props.setActiveFeed} />
        })

        return feedList

        })()
       : <Redirect to='/login' />}
       
      </div>
    )
  }
};

export default FeedContainer;
