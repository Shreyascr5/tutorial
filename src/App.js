import './App.css';
import Body from './components/Body';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Name from './components/Name';
import ReducerTutorial from './components/ReducerTutorial';
import Effect from './components/Effect';
import Ref from './components/ref';
import Layout from './components/Layout';
import ImparitiveHandle from './components/ImparitiveHandle';

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
    <Effect/>
    <br />
    <Ref/>
    <Layout/>
    <br />
    <ImparitiveHandle/>
    <Footer/>

    </div>
  );
}

export default App;
