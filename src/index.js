//import React from 'react';
//import ReactDOM from 'react-dom';
//import './stylesheets/main.scss';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
//import React from 'react';
//import ReactDOM from 'react-dom';
//import './stylesheets/main.scss';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import { Provider} from './react-redux'
//import store from './store'
//
//ReactDOM.render(
//<Provider store={store}>	
//	<App />
// </Provider>	
//	, document.getElementById('root')
//	);
//registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();


