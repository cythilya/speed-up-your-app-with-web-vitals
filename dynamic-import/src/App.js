import './styles.css';

export const App = () => {
  return (
    <div className='App'>
      <button
        onClick={() => {
          import('./module.js').then((module) => {
            module.sayHi('John');
          });
        }}
      >
        點我！
      </button>
    </div>
  );
};
