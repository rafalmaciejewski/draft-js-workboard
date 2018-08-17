import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './theme/globalStyle';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
