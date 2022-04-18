import React from "react";
import './AboutMe.css';
import photoMe from '../../images/photo-me.jpg';

function AboutMe() {
    return (<div className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__text-container">
                    <h3 className="about-me__name">Константин</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 25
                        лет</p>
                    <p className="about-me__text">
                        Я&nbsp;родился в городе Якутск, а&nbsp;живу в&nbsp;Сочи, закончил
                        факультет
                        спец связи СПбГУТ. У&nbsp;меня есть жена
                        и&nbsp;сын. Я&nbsp;люблю слушать музыку, а&nbsp;ещё
                        занимаюсь
                        спортом. Недавно начал кодить. С&nbsp;2014 года работал
                        в&nbsp;разных компаниях. После того,
                        как
                        пройду
                        курс по&nbsp;веб-разработке, хочу начать заниматься веб-разработкой
                        и&nbsp;уйти с&nbsp;постоянной работы.
                    </p>

                    <div className="about-me__social-media">
                        <a href="https://www.facebook.com/"
                           className="about-me__link"
                           target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://github.com/" className="about-me__link"
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