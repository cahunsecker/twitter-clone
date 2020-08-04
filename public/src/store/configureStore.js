import userReducer from "../reducers/userReducer";
import tweetReducer from "../reducers/tweetReducer";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
      combineReducers({
        users: userReducer,
        tweets: tweetReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };

  export default configureStore;