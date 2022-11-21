import './App.css';
import { Header, Main, AboutUs, HowToApply, Faq, AboutUsSlider, ContactUs, Footer } from './sections';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
