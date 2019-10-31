import React, {Component} from 'react';
class Contacts extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Контакты</h1>


                <p>
<a href="tel:+73458887723">+7 (345)888-77-23</a>
            </p>
                <p>
<a href="tel:+71238887766">+7 (123)888-77-66</a>
                </p>
                <a class="callibri_email" href="mailto:mail@mail.com">mail@mail.com</a>
            </React.Fragment>
        );
    }
}
export default Contacts;
