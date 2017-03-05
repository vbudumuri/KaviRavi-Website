'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router'

import Index from 'components/Index/';
import Contact from 'components/contact/';
import About from 'components/about/';


render((
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Index} />
    </Route>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('js-main'));
