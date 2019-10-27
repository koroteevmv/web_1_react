import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class About extends Component {
   render() {
       return (
           <React.Fragment>
               <br/>
               <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title"><h2>О приложении <span class="badge badge-secondary">New</span></h2></h5>
                    <p class="card-text">Это приложение "Список дел" версии 1.0.0.
                   Это часть учебного курса 
                   "Основы библиотеки React.js"</p>
                    <a href="#" class="btn btn-primary">Вжух!</a>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
                </div>
           </React.Fragment>
       );
   }
}

export default About;
