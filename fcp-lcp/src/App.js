import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import News from './News';
import Home from './Home';
import './styles.css.js';
import './lib/newsticker';

export default function App() {
  return (
    <div className='App'>
      <Router>
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
      </Router>
    </div>
  );
}
