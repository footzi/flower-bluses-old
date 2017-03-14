import React from "react";
import lessons from "./Data/data-lessons.js";
import { Link } from "react-router";
import { browserHistory } from 'react-router';

let LessonsInfo = React.createClass({
    componentDidMount() {
                    (function(){
                emailjs.init("user_jmnF1YC49paVFwkbJRipP");
            })();

            var orderform = $("#lessonsform");
            orderform.submit(function(event){
                event.preventDefault();

            // Change to your service ID, or keep using the default service
            var service_id = "mail_ru";
            var template_id = "lessons";

            orderform.find("#lessonsform-button").text("Отправляется...");
            emailjs.sendForm(service_id,template_id,"lessonsform")
                .then(function(){ 
                    console.log("Sent!");
                orderform.find("#lessonsform-button").text("Отправлено");
                }, function(err) {
                console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                orderform.find("#lessonsform-button").text("Oшибка");
                });
            return false;
            });

    },
	getInitialState() {
        let { lessonId } = this.props.params;

        return {
            lesson: lessons.find(lesson => lesson.id === lessonId)
        };
    },
    componentWillReceiveProps(nextProps) {
        let { lessonId: prevId } = this.props.params;
        let { lessonId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                lesson: lessons.find(lesson => lesson.id === nextId)
            });
        }
    },
	render () {

        let { lesson }=this.state;
		function close(e) {
            e.preventDefault();
            document.getElementById("lessons-b-popup").style="display:none";
         }
      
		
		return (
            
			<div id="lessons-b-popup">
                <div className="lessons-b-popup-content">
                    <div id="b-popup-lesson-close-button" onClick={close}>
                        <Link to="/lessons"><img src="/./images/catalog/close.png" /> </Link>
                    </div>
                    <div className="lesson-order">
                        <div className="lesson-title">ЗАПИСАТЬСЯ</div>
                    </div>
                    
                    <form id="lessonsform" method="post">
                            
                            <div className="lesson-form">
                                <img src={lesson.image1} />
                                <div className="lesson-input">
                                    <input className="lesson-form-input" name="product" type="text" readonly placeholder="Название мастер-класса" value={lesson.name}/>
                                    <input className="lesson-form-input" name="name" type="text" required placeholder="Ваше имя:" />
                                    <input className="lesson-form-input" name="email" type="email" required placeholder="Ваш e-mail:" />
                                    <select className="lesson-form-input lesson-form-input-date" required name="date">
                                        <option hidden>Дата мастер класса:</option>
                                        <option className="lesson-form-option">10.05.1990</option>
                                        <option>11.05.1990</option>
                                        <option>12.05.1990</option>
                                    </select>
                                    <textarea className="lesson-form-input lesson-form-input-message" name="info" type="text" placeholder="Сообщение:" />
                                </div>

                            </div>
                             <button id="lessonsform-button" className="lesson-form-button">Отправить</button>
                    </form>

                </div>            
			</div>
            
            
			)
	}
});

export default LessonsInfo;