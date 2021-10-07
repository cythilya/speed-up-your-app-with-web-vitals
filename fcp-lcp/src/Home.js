import _map from 'lodash/map';
import { Col, Container, Row } from 'react-bootstrap';
import Card from './Card';
import Nav from './Nav';
import Newsticker from './Newsticker';
import Slideshow from './Slideshow';
import TwitterEmbedCard from './TwitterEmbedCard';
import './styles.css.js';
import './lib/newsticker';
import { stores, twitterPosts } from './data';

const StoreList = ({ list }) => {
  return _map(list, (item) => {
    const { coverImage, description, link, name } = item;

    return (
      <Col sm={3} key={name}>
        <Card coverImage={coverImage} description={description} link={link} name={name} />
      </Col>
    );
  });
};

const TwitterPostList = ({ list }) => {
  return _map(list, (item) => {
    const { id, content } = item;

    return (
      <Col sm={3} key={id}>
        <TwitterEmbedCard content={content} />
      </Col>
    );
  });
};

export default function App() {
  return (
    <div>
      <Container>
        <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Col>
            <Newsticker />
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav />
          </Col>
        </Row>
        <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Col>
            <Slideshow />
          </Col>
        </Row>
        <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <StoreList list={stores} />
        </Row>
        <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <TwitterPostList list={twitterPosts} />
        </Row>
      </Container>
    </div>
  );
}
