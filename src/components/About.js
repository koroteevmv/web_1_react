import React from 'react';
import ad from './ad1.png';

const About = () => {
    return (
        <React.Fragment>
            {/*<h1>FUN</h1>*/}
            <h3>О нас</h3>
            {/*<img alt="Картинка с рекламой1" src="/src/components/ad1.png" />*/}
            {/*<br/>*/}

            {/*<img alt="Картинка с рекламой2" src={ad} width="100px" height="100px" title="Тут есть картинка!"/>*/}
            {/*картинка вверху*/}
            {/*<br/>*/}

            {/*<img alt="Картинка с рекламой4" src={require('./images/ad1.png')} />*/}
            {/*<img src={process.env.PUBLIC_URL + '/images/ad1.png'} alt="logo" />*/}
            {/*<img alt="Картинка с рекламой3" src="/images/ad1.png" />*/}
            {/*<img src={require('/src/ad1.png')}/>*/}
            здесь всякая инфа о нас
        </React.Fragment>
    )
};

export default About;