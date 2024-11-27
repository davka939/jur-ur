import React from 'react';
import '../Styles/home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">

        <div className='banner-home'>
        <img className="banner" src={banner}></img>
            <div className='heroshop-home'>
              <img className="heroshop" src={hero}></img>
              <h2>Шоколадтай жигнэмэг</h2>
              <p>Шоколад, Алмонд самартай жигнэмэг</p>
              <button>Цааш үзэх</button>
            </div>
        </div>
        
        <div className='head-home'>
          <h1>Амтлаг , Чанартай, Үргэлж шинэ</h1>
          <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

    <div class="category-home">
    <div class="_001A">
      <img src={alag}></img>
      <div class ="info">
        <h3>Шинэ бүтээгдэхүүн</h3>
        <p>Бор жигнэмэг юм шиг байна</p>
      </div>
      <button>Цааш үзэх</button>
    </div>
    <div class="_002A">
    <img src={luuvan}></img>
      <div class ="info">
        <h3>Шинэ бүтээгдэхүүн</h3>
        <p>Бор жигнэмэг юм шиг байна</p>
      </div>
    </div>
    <div class="_003A">
      <img src={byluu}></img>
      <div class ="info2">
        <h3>Шинэ бүтээгдэхүүн</h3>
        <p>Бор жигнэмэг юм шиг байна</p>
      </div>
    </div>
    <div class="_004A">
    <img src={keks}></img>
    </div>
    <div class="_005A">
    <img src={cup}></img>
    <div class ="info1">
        <h3>Шинэ бүтээгдэхүүн</h3>
        <p>Бор жигнэмэг юм шиг байна</p>
        <button>Цааш үзэх</button>
      </div>
        
    </div>
</div>


        <div className='heads-home'>
        <h1>Бест селлер</h1>
        <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

        <div class="bestseller-home">
    <div class="item">
      <img className="bestshop" src={item1}></img>
      <h2>Аяган бялуу</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item2}></img>
      <h2>Тахианы чиабатта</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item3}></img>
      <h2>Артизан талх</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item4}></img>
      <h2>Жимстэй талх</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item5}></img>
      <h2>Аз жаргалын бялуу</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item6}></img>
      <h2>Шоколадтай бялуу </h2>
    </div>
  </div>

  <div className='head1-home'>
  <h1>Бест селлер</h1>
  <h2>Шилдэг борлуулалттай бүтээгдэхүүн</h2>
  </div>


  <div className='banner2-home'>
  <div class="zurag1-home">zurag1</div>
  <div class="zurag2-home">zurag2</div>
  </div>


  <div className='banner2-home'>
  <div class="zurag3-home">zurag3</div>
  <div class="zurag4-home">zurag4</div>
  </div>

  <div className='heads-home'>haed4</div>

  <div className='banner2-home'>
  <div class="zurag5-home">zurag5</div>
  <div class="zurag6-home">zurag6</div>
  </div>
        </div>
     

    );
  }
}


export default Home;