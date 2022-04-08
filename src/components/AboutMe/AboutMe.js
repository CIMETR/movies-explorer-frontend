import React from "react";
import './AboutMe.css';
import photoMe from '../../images/photo-me.jpg';

function AboutMe() {
    return (<div className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__text-container">
                    <h3 className="about-me__name">Виталий</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 31
                        год</p>
                    <p className="about-me__text">
                        Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил
                        факультет
                        экономики СГУ. У&nbsp;меня есть жена
                        и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё
                        увлекаюсь
                        бегом. Недавно начал кодить. С&nbsp;2015 года работал
                        в&nbsp;компании &laquo;СКБ Контур&raquo;. После того,
                        как
                        прошёл
                        курс по&nbsp;веб-разработке, начал заниматься
                        фриланс-заказами
                        и&nbsp;ушёл с&nbsp;постоянной работы.
                    </p>

                    <div className="about-me__social-media">
                        <a href="https://www.facebook.com/"
                           className="about-me__link"
                           target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://github.com/CIMETR" className="about-me__link"
                           target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
                <img className="about-me__photo" alt="Моя фотография"
                     src={photoMe}/>
            </div>
        </div>
    );
}

export default AboutMe;