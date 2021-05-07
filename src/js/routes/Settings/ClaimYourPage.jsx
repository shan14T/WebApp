import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { renderLog } from '../../utils/logging';

const TwitterHandleBox = React.lazy(() => import('../../components/Twitter/TwitterHandleBox'));

export default class ClaimYourPage extends Component {
  render () {
    renderLog('ClaimYourPage');  // Set LOG_RENDER_EVENTS to log all renders
    return (
      <div>
        <Helmet title="Claim Your Page - We Vote" />
        <div className="container-fluid well u-stack--md u-inset--md">
          <h3 className="text-center">
            Claim Your Page
          </h3>
          <h1 className="h4 u-stack--md">
            Enter your Twitter handle to create a public voter guide.
          </h1>
          <div>
            <TwitterHandleBox />
          </div>
        </div>
      </div>
    );
  }
}
