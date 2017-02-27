import React from 'react';
import { Link } from 'react-router';
let Index = React.createClass({
    render () {
        return (
<div>
        <div className="title">
            <h1 className="main-title">ДОБРО ПОЖАЛОВАТЬ НА ВИРТУАЛЬНУЮ СТРАНИЧКУ МОЕЙ ДОМАШНЕЙ МАСТЕРСКОЙ!</h1>
            <p className="main-introduction" >Безусловно, достичь совершенства и соперничать с художником – природой , невозможно... Но, прибли&shy;зиться к природной красоте , так, чтобы захотелось вдохнуть аромат , всколыхнуть воспоминания о ве&shy;сеннем пробуждении или почувствовать грусть осени… эту возможность дает удивительное искусство Керамической флористики! <br/>Для создания этих невероятно живых цветов и цветочных композиций используют специальные полимерные глины - эластичные материалы, которые позволяют максимально имитировать строение цветка. Каждый лепесточек, каждый стебелек создается вручную. Особые свойства материала и авторские методики помогают детально проработать каждый элемент, тем самым достигается невероятное сходство с живыми цветами. </p>
        </div>
        <div className="stock">
            <h1 className="stock-title">УКРАШЕНИЯ В НАЛИЧИИ:</h1>
            <p className="stock-text">Большинство изделий я делаю на заказ, но есть и те которые Вы можете преобрести в самые короткие сроки, не дожидаясь их изготовления. Вот самые свежие готовые новинки В НАЛИЧИИ, успейте сделать заказ и уже через пару* дней Вы его получите!</p>
            <div className="stock-images">
                <ul className="bxslider">
                    <li className="slide"><img className="stock-img" src="images/1.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/2.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/3.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/4.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/1.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/2.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/3.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/4.jpg" /></li>
                </ul>
            </div>
            <div className="stock-images-640">
                <ul className="bxslider-640">
                    <li ><img src="images/1.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/2.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/3.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/1.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/2.jpg" /></li>
                    <li className="slide"><img className="stock-img" src="images/3.jpg" /></li>
                </ul>
            </div>
            <Link to="/catalog"><div className="button">Каталог</div></Link>
        </div>
        <div className="news">
            <h1 className="stock-title">БЛИЖАЙШИЕ МАСТЕР-КЛАССЫ:</h1>
            <p className="stock-text">Если Вы покорены этим видом искусства – созданием цветов из полимерных глин, реалистической флори&shy;стикой и хотите научиться этому виду творчества, то я  Вам помогу осуществить эту мечту!</p>
            <div className="news-content">
               <div className="news-calendar">
                    <img className="news-calendar-img" src="images/calendar.png" />
                </div>
               <div className="news-details">
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">Занятия будут проводиться независимо от количества пришедших на МК учеников, даже для одного человека! (группа небольшая, до 4 человек!)</div>
                  
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">Вы можете выбрать любой из предложенных  МК! И я, лично Вам, буду показывать нюансы и тонкости лепки выбранного вами цветка! </div>
                    
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">С завершенного МК, вы будете уходить с полностью готовой работой. Это может быть просто реалистический цветок, который можно будет поставить в вазу, или это будет брошка, или небольшая заколка- зажим.</div>
                 
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">У вас будет возможность тратить столько часов на одно посещение, сколько вам необходимо. И Вы можете придти в указанные дни в удобное для вас время</div>
                </div>
                <div className="clear"></div>
                <div className="button">Подробнее</div>
            </div>
        </div>
        
</div>
        )
    }
})

export default Index;

// <div className="carousel-fl" data-flickity='{ "cellAlign": "left", "groupCells": 1, "autoPlay": false, "pauseAutoPlayOnHover": false, "adaptiveHeight": true }'>
// <div>    
//                       <div className="carousel-cell"><img className="stock-img" src="images/1.jpg" /></div>
//                       <div className="carousel-cell"><img className="stock-img" src="images/2.jpg" /></div>
//                       <div className="carousel-cell"><img className="stock-img" src="images/3.jpg" /></div>
//                       <div className="carousel-cell"><img className="stock-img" src="images/1.jpg" /></div>
//                       <div className="carousel-cell"><img className="stock-img" src="images/2.jpg" /></div>
//                       <div className="carousel-cell"><img className="stock-img" src="images/3.jpg" /></div>
//                 </div>