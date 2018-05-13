import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Test from './test'


ReactDOM.render(
    <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/test" component={Test} />
        </div>
    </Router>,
    document.getElementById('root')
  )

