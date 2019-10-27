import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";

class DowloadTodos extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.downloadTxtFile();
    };
    
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type='submit'
                       value='Скачать список дел'
                       className='btm'
                       style={{flex: '5'}}
                       class="btn btn-primary"
                />
            </form>
        );
    }
}

export default DowloadTodos;