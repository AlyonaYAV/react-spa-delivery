import './App.css';
import { Header, Main, AboutUs, HowToApply, Faq, AboutUsSlider, ContactUs, Footer } from './sections';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>
          <Navbar />
        </Header>
        <Main />
        <AboutUs />
        <HowToApply />
        <Faq />
        <AboutUsSlider />
        <ContactUs />
        <Footer />
      </header>
    </div>
  );
}

export default App;
