import _map from 'lodash/map';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Card from './Card';
import Newsticker from './Newsticker';
import TwitterEmbedCard from './TwitterEmbedCard';
import './styles.css.js';
import './lib/newsticker';
import { stores, twitterPosts } from './data';

const StoreList = ({ list }) => {
  return _map(list, (item) => {
    const { coverImage, description, link, name } = item;

    return (
      <Col xs={12} md={3} key={name}>
        <Card coverImage={coverImage} description={description} link={link} name={name} />
      </Col>
    );
  });
};

const TwitterPostList = ({ list }) => {
  return _map(list, (item) => {
    const { id, content } = item;

    return (
      <Col className='twitter-post' xs={12} md={4} key={id}>
        <TwitterEmbedCard content={content} />
      </Col>
    );
  });
};

export default function App() {
  const [list, setList] = useState([]);

  const fetchMoreData = () => {
    return new Promise((resolve, reject) => {
      const newList = list.concat(stores);
      console.log('newList', newList);
      setList(newList);
    });
  };

  useEffect(async () => {
    fetchMoreData();
  }, []);

  return (
    <div className='App'>
      <Container>
        <Row style={{ margin: '1rem 0 0 0' }}>
          <Col md>
            <Newsticker />
          </Col>
        </Row>
        <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
            <Row className='store-list' style={{ margin: '1rem 0 0 0' }}>
              <Col xs={12} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Spinner animation='grow' />
              </Col>
            </Row>
          }
        >
          {
            <Row className='store-list' style={{ margin: '1rem 0 0 0' }}>
              <StoreList list={list} />
            </Row>
          }
        </InfiniteScroll>
        <Row
          className='twitter-post-list'
          style={{ margin: '1rem 0 0 0', padding: '20px', background: '#eee' }}
        >
          <TwitterPostList list={twitterPosts} />
        </Row>
      </Container>
    </div>
  );
}
