import logo from './images/logo.png';
import item1 from './images/item1.png';
import item2 from './images/item2.png';
import item3 from './images/item3.png';

import './App.css';
import Menu from './Component/Menu';
import Banner from './Component/Banner';
import Item from './Component/Item';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <div className='cover-main'>
        <div className='menu'>
         <Menu/>
        </div>
        <div className='main'>
        <div className='main-content'>
          <div className='logo'>
            <img id='logo' src ={logo} />
          </div>
          <div className='banner'>
            <Banner/>
          </div>
          <div className='page-content'>
            <Item title='Lorem ipsum dolor sit amet' image={item1} content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.'/>
            <Item title='Lorem ipsum dolor sit amet' image={item2} content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.'/>
            <Item title='Lorem ipsum dolor sit amet' image={item3} content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.'/>
          </div>
        </div>
        <Footer/>
        </div>

      </div>
    </div>
  );
}

export default App;
