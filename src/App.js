import './App.css';
import Logo from '../src/assets/icons/LogoApp.png';
import { IoMdMenu } from 'react-icons/io'
import HomeView from './HomeView/index.js';
import DetailView from './DetailView/index.js';
import DownloadView from './DownloadView/index.js';
import FooterView from './FooterView/index.js';
import './Style/stylesheet.css';

function App() {
  return (
    <div className="App">
      <div className='containerHeader'>
        <img src={Logo}></img>
        <div className='containerHeaderTag'>
          <a href='#'>Home</a>
          <a href='#'>Product</a>
          <a href='#'>Faq</a>
          <a href='#'>Contact</a>
        </div>
        <IoMdMenu className="IconMobile"></IoMdMenu>
      </div>
      

      <HomeView></HomeView>
      <div className='underline'></div>
      <DetailView></DetailView>
      <DownloadView></DownloadView>
      <FooterView></FooterView>


    </div>
  );
}

export default App;
