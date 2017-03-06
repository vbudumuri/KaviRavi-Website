'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'

import Index from 'components/Index/';
import Detail from 'components/detail/';
import Contact from 'components/contact/';
import About from 'components/about/';


render((
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Index} />
    </Route>
    <Route path="/detail/:item" component={Detail}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('js-main'));
