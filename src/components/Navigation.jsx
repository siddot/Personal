import React from 'react';
import profile from '../images/profile.png'

const Navigation = () => {
    return (
        <nav className="navbar back-nav-color fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="profile-img" src="https://gateway.pinata.cloud/ipfs/QmUtAuF887qAoHi2RvvCD4Xwo4vro8cbVnAdn9XtAnFvDt"/>
                    &nbsp; Artem Sidnev
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end close-offcanvas-nav-color" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body justify-content-center back-nav-color">
                        <ul className="navbar-nav placement-nav">
                            <li className="nav-item profile-offcanvas">
                                <img src="https://gateway.pinata.cloud/ipfs/QmUtAuF887qAoHi2RvvCD4Xwo4vro8cbVnAdn9XtAnFvDt" style={{height: 175, width: 175}} className="profile-img"/>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link category active" aria-current="page" href="#about">&#128196; <b>About</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link category active" href="#experience">&#128188; <b>Experience</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link category active" href="#education">&#127891; <b>Education</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link category active" href="#skills">&#128736; <b>Skills</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link category active" href="#interests">&#128516; <b>Interests</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link category active" href="#portfolio">&#128193; <b>Portfolio</b></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
