import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import cat_logo from '../images/cat.jpg';

class Contacts extends Component {
   render() {
       return (
           <React.Fragment>
               <br/>
                <h5 class="card-title"><h2>Контакты <span class="badge badge-secondary">New</span></h2></h5>
               <div class="card" style={{ width: "18rem", float: "none", margin: "0 auto"}}>
                <img class="card-img-top" src={cat_logo} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Создатель</h5>
                    <p class="card-text">Голышков Илья Алексеевич - ПИ4-2</p>
                    <a href="#" class="btn btn-primary">Вжух!</a>
                </div>
                </div>
           </React.Fragment>
       );
   }
}

export default Contacts;