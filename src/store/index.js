import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import App from '../containers/App/App.jsx';
import ProfileGames from '../components/ProfileGames/ProfileGames.jsx';
import ProfileGamesList from '../components/ProfileGamesList/ProfileGamesList.jsx';
import ProfileGamesContainer from '../containers/ProfileGamesContainer/ProfileGamesContainer.jsx';

const history = createHashHistory();

const store = createStore(connectRouter(history)(reducer), 
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history), 
			thunk
		)
	)
);

store.subscribe(() => {
	localStorage.setItem('profiles', JSON.stringify(store.getState().profiles));
	localStorage.setItem('games', JSON.stringify(store.getState().games));
	localStorage.setItem('sortFields', JSON.stringify(store.getState().sortFields));
	localStorage.setItem('queries', JSON.stringify(store.getState().queries));
});

store.subscribe(() => {
	console.log('subscribe', store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/games" component={ProfileGamesContainer} />
				</Switch>
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);