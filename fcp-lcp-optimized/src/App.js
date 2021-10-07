import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './styles.css.js';
import './lib/newsticker';

const Home = lazy(() => import('./Home'));
const News = lazy(() => import('./News'));

const App = () => (
  <div className='App'>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Switch>
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
      </Suspense>
    </Router>
  </div>
);

export default App;
