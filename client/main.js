'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import Index from './components/Index/index.js';
import Detail from './components/detail/index.js';
import Contact from './components/contact/index.js';
import About from './components/about/index.js';

require('smoothscroll-polyfill').polyfill();

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }, 0);
  }
}

render((
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
    onUpdate={hashLinkScroll}>
    <Route path="/">
      <IndexRoute component={Index} />
    </Route>
    <Route path="/detail/:category/:item" component={Detail}/>
  </Router>
), document.getElementById('js-main'));
