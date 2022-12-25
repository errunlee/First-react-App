import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <div className='items'>
        <li>Home</li>
        <li>Profile</li>
        <li>Contact</li>
        </div>
        <div className='search'>
          <input type='search' placeholder='Search Our Product'></input>
        </div>
      </nav>
    </>
  );
}

export default App;
