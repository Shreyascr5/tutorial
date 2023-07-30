import './App.css';
import Body from './components/Body';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Name from './components/Name';
import ReducerTutorial from './components/ReducerTutorial';

function App() {
  return (
    <div className="App">
    <Navbar name="Shreyas c r"
      age="22 years"
      country=
      "India karnataka KA"
    />
    <Counter/>
    <Name/>
    <Body/>
    <ReducerTutorial/>
    <Footer/>

    </div>
  );
}

export default App;
