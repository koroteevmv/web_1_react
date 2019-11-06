import React from 'react';
import picture1 from './IMG_4321.JPG';

class Contacts extends React.Component {
    render() {
        return (<div className="row">
            
            <div className="col">
                <h2 id="get-involved"><span class="bd-content-title">О нас</span></h2>
                <span class="text-left">
                <p>Как правило на страничке с названием "О нас" ожидаешь увидеть адрес, или может быть телефон, по которому можно связаться. Возможно ещё какую-то информацию, которая позволит выстроить коммуникацию, однако это не тот случай... Просто текст, чтобы страничка выглядела не слишком пустой и бесполезной. Да и к тому же, о ком "о нас"? Я тут один.</p>
                <p>Вот симпатичная фоточка</p>
                <img src={picture1} width="320" height="500"/> 
                </span>
            </div>

        </div>)
    }
}

export default Contacts;