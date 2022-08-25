import React from 'react';

const About = () => {
    return (
        <div id="about" className="about-container">
            <h1>&#128196; ARTEM <span className="artemsidnev">SIDNEV</span></h1>        
            <h4>Vesennyaya street, 6, Lyubertsy, Moscow region | +7 910 969 29 22 | <a className="mail" href="mailto:artemsidnev@gmail.com">artemsidnev@gmail.com</a></h4>
            <p className="about-me">
                Hello, I'm Artem Sidnev. My dream at the moment is to help develop applications for the blockchain and for the web3 Internet - the new era of the Internet, which we will dive into in 3 years.
            </p>
            <p>
                <a href="https://github.com/siddot" className="github">
                    <i className="mail fa fa-github" style={{fontSize: 84}}></i>
                </a>
                <a href="https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D0%B5%D0%BC-%D1%81%D0%B8%D0%B4%D0%BD%D0%B5%D0%B2-132b11249/" className="linkedin">
                    <i className="mail fa fa-linkedin-square" style={{fontSize: 84}}></i>
                </a>  
                <a href="https://t.me/sidnevart" className="telegram">
                    <i className="mail fa fa-telegram" style={{fontSize: 84}}></i>
                </a>  
            </p>

        </div>

    );
}

export default About;
