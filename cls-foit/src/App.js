import _map from 'lodash/map';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Card from './Card';
import Newsticker from './Newsticker';
import './styles.css.js';
import './lib/newsticker';
import { stores } from './data';

const StoreList = ({ list }) => {
  return _map(list, (item) => {
    const { coverImage, description, link, name } = item;

    return (
      <Col key={name} md={3} xs={12}>
        <Card coverImage={coverImage} description={description} link={link} name={name} />
      </Col>
    );
  });
};

const placeholderGenerator = (count) => {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(
      <Card
        coverImage='https://dummyimage.com/246x246/ddd/fff&text=Hi'
        description='Hello!'
        link={null}
        name='Hello!'
      />,
    );
  }

  return list;
};

const Placeholders = () => {
  const PLACEHOLDER_NUMBER = 8;
  const list = placeholderGenerator(PLACEHOLDER_NUMBER);
  const placeholders = _map(list, (item) => {
    const { coverImage, description, link, name } = item;

    return (
      <Col key={name} md={3} xs={12}>
        <Card coverImage={coverImage} description={description} link={link} name={name} />
      </Col>
    );
  });

  return (
    <Row className='store-list' style={{ margin: '1rem 0 0 0' }}>
      {placeholders}
    </Row>
  );
};

const App = () => {
  const [list, setList] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);

  const fetchMoreData = () => {
    return new Promise((resolve, reject) => {
      const newList = list.concat(stores);
      setLoadingStatus(false);
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
            <Row className='spinner' style={{ margin: '1rem 0 0 0' }}>
              <Spinner />
            </Row>
          }
        >
          <>
            {!isLoading && (
              <Row className='store-list' style={{ margin: '1rem 0 0 0' }}>
                <StoreList list={list} />
              </Row>
            )}
            {isLoading && <Placeholders />}
          </>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default App;
