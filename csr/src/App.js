import './styles.css';
import Cat from './kitty.png';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div>
          <title>愛看書的貓！</title>
        </div>
        <main>
          <h1 className='title'>愛看書的貓！</h1>
          <div className='grid'>
            <div className='card'>
              <img src={Cat} alt='愛看書的貓！' width='600' />
              <p>愛看書的貓不會變壞</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
