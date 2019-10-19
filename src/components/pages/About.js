import React, {Component} from 'react';
class About extends Component {
   render() {
       return (
           <div className="row">
                <div className="col">
                    <h2 id="get-involved"><span class="bd-content-title">О приложении</span></h2>
					<br/>
					<p className="text-left">Данное приложение поможет вам вести учет важных и не очень дел с указанием крайнего срока выполнения.</p>
                    <p className="text-left">Вы можете фильтровать дела по названию (будь то слово, словосочетание или буква) в поле ввода для поиска нужного дела или дел.</p>
					<p className="text-left">🐈🐈🐈🐈🐈</p>
					<p className="text-left">Разработала Корнева Татьяна, студентка ПИ4-1</p>
                </div>
            </div>
       );
   }
}
export default About;
