import './App.css';
import { Header, Main, AboutUs, HowToApply, Faq, AboutUsSlider, Footer } from './sections';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <h1>React SPA delivery service</h1>
      <header className="App-header">
        <Header>
          <Navbar />
        </Header>
        <Main />
        <AboutUs />
        <HowToApply />
        <Faq />
        <AboutUsSlider />
        <Footer />
      </header>
    </div>
  );
}

export default App;
