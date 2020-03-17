import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from './Avatar';
import './AvatarStyle.css'

import * as serviceWorker from './serviceWorker';
import Login from './Login'

ReactDOM.render(<div className="AvatarStyle bg-light-yellow">
	<Avatar />
	</div>, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
