import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { HeroSec } from './components/HeroSec';
import { SecTwo } from './components/SecTwo';
import CardSec from './components/CardSec';
import { WhoSec } from './components/WhoSec';
import Review from './components/Review';
import { Work } from './components/Work';
import { Footer } from './components/Footer';


 
function App() {
  return (
    <div>
      <div> <Navbar/></div>
      <div><HeroSec/></div>
      <div><SecTwo/></div>
      <div><CardSec/></div>
      <div><WhoSec/></div>
      <Review/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
