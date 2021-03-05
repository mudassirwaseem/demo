import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Footer from './component/Footer'

function App() {
  return (
    <div style={{margin:10}}>
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
