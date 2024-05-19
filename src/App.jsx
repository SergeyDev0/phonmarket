import React from 'react';
import Footer from './components/footer/Footer';
import mainLogo from "./assets/icons/logo.svg";
import phoneIcon from "./assets/icons/phone.svg";
import arrowDownIcon from "./assets/icons/arrow_down.svg";
import { Map } from './components/map/Map';

function App() {
  return (
    <>
      <div className='wrapper-content'>
        <main className='main'>
          <img src={mainLogo} className="main__img" />
          <h2 className="main__title"></h2>
          <p className="main__text">Ремонт телефонов и компьютеров. 
          <br /> Отправим обратно доставкой по России.</p>
          <a className='main__link' href="tel:+79283217762">Позвонить сейчас <img className='main__link-icon' src={phoneIcon} /></a>
          <div className="main__arrow-animation">
            <img className='main__arrow-animation__img' src={arrowDownIcon} />
          </div>
        </main>
        <section className="section rates">
          <h2 className="section__title">Цены</h2>
          <h3 className="rates__subtitle">Ремонт мобильных телефонов</h3>
          <div className="rates__wrapper-cards">
            <div className="rates__card">
              <h4 className="rates__card-title">Замена дисплея</h4>
              <p className="rates__card-price">1000 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Замена разъёма телефона</h4>
              <p className="rates__card-price">300 - 1500 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Прошивка</h4>
              <p className="rates__card-price">300 - 1500 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Замена аккумулятора</h4>
              <p className="rates__card-price">1000 - 1500 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Замена динамика</h4>
              <p className="rates__card-price">300 - 1000 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Экспресс ремонт</h4>
              <p className="rates__card-price">от 100 ₽</p>
            </div>
          </div>

          <h3 className="rates__subtitle">Ремонт компьютеров</h3>
          <div className="rates__wrapper-cards">
            <div className="rates__card">
              <h4 className="rates__card-title">Чистка компьютера от пыли</h4>
              <p className="rates__card-price">500 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Замена термоинтерфейсов</h4>
              <p className="rates__card-price">500 - 1500 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Диагностика</h4>
              <p className="rates__card-price">Бесплатно</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Экспресс ремонт</h4>
              <p className="rates__card-price">от 100 ₽</p>
            </div>
          </div>

          <h3 className="rates__subtitle">Ремонт ноутбуков</h3>
          <div className="rates__wrapper-cards">
            <div className="rates__card">
              <h4 className="rates__card-title">Чистка ноутбука от пыли</h4>
              <p className="rates__card-price">1500 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Замена термоинтерфейсов</h4>
              <p className="rates__card-price">500 - 1500 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Экспресс ремонт</h4>
              <p className="rates__card-price">от 100 ₽</p>
            </div>
          </div>

          <h3 className="rates__subtitle">Защитные стёкла</h3>
          <div className="rates__wrapper-cards">
            <div className="rates__card">
              <h4 className="rates__card-title">Поклейка защитного стекла</h4>
              <p className="rates__card-price">100 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Защитные стёкла</h4>
              <p className="rates__card-price">от 250 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Защитные стёкла с поклейкой</h4>
              <p className="rates__card-price">от 250 ₽</p>
            </div>
          </div>

          <h3 className="rates__subtitle">Аксессуары</h3>
          <div className="rates__wrapper-cards">
            <div className="rates__card">
              <h4 className="rates__card-title">Кабели micro USB</h4>
              <p className="rates__card-price">150 - 400 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Кабель USB Type-C - USB</h4>
              <p className="rates__card-price">400 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Кабели mini USB 2.0</h4>
              <p className="rates__card-price">400 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Кабели hdmi</h4>
              <p className="rates__card-price">от 300 ₽</p>
            </div>
            <div className="rates__card">
              <h4 className="rates__card-title">Зарядные устройства</h4>
              <p className="rates__card-price">от 100 ₽</p>
            </div>
          </div>
        </section>
        <section className="section reviews">
          <h2 className="section__title">Отзывы</h2>
          <div className='reviews__wrapper'>
            <div className="sw-app" data-app="b5f777783ddab31af3c1e0668fa72630"></div>
          </div>
        </section>
        <section className="banner">
          <h2 className='banner__title'>Позвонить прямо сейчас?</h2>
          <p className="banner__text">Мы готовы принять вызов <br /> с 9:00 до 18:00</p>
          <a className='banner__link' href="tel:+79283217762">Позвонить сейчас <img className='main__link-icon' src={phoneIcon} /></a>
        </section>
        <section className="section about">
          <h2 className="section__title">О нас</h2>
          <div className='about__wrapper'>
            <div className="about__wrapper-map">
              <Map />
            </div>
            <ul className="about__info-list">
              <li className="about__info-list__item">ИП: <span>Зайцев С. В.</span></li>
              <li className="about__info-list__item">Адрес: <span>просп. Кулакова, 29А, этаж 1</span></li>
              <li className="about__info-list__item">График работы: <span>9:00 - 18:00</span></li>
              <li className="about__info-list__item">Эл. почта: <span>zaitsevsergey@mail.ru</span></li>
              <li className="about__info-list__item">Телефон: <span>+7 (928) 321-77-62</span></li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
