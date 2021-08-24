import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore ,createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

import { composeWithDevTools} from 'redux-devtools-extension'
var firebaseConfig = {
  apiKey: "AIzaSyBWacUhpBt-HOUYHeoOlxjHn4T4yVWJeCQ",
    authDomain: "resume-maker-8a896.firebaseapp.com",
    projectId: "resume-maker-8a896",
    storageBucket: "resume-maker-8a896.appspot.com",
    messagingSenderId: "316859649925",
    appId: "1:316859649925:web:3927304b00934562583eec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase) // redux bindings for firestore,
  )
);
ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);