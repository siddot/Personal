import React from 'react';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { SiSolidity } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaUnity } from "react-icons/fa";




// truffle https://gateway.pinata.cloud/ipfs/QmZvhvrU2ExdPjrVVTvf2XrZpYjdkySrD3nWxpKUudPRdf

// ethers https://gateway.pinata.cloud/ipfs/QmRWPBZMEDP7ivKJoHbMFbQqaF7ay3gYF1D72RdhaYLywM


const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <h1>&#128736; Skillz</h1>
            <h4>Web Frameworks + Languages</h4>
            <p className="skills">
                <FaHtml5 className="i-item" style={{fontSize: 72}}/>
                <FaCss3Alt className="i-item" style={{fontSize: 72}}/>
                <FaJsSquare className="i-item" style={{fontSize: 72}}/>
                <FaPython className="i-item" style={{fontSize: 72}}/>
                <FaReact className="i-item" style={{fontSize: 72}}/>
                <DiDjango className="i-item" style={{fontSize: 72}}/>
                <SiSolidity className="i-item" style={{fontSize: 72}}/> 
                <SiCsharp className="i-item" style={{fontSize: 72}}/>              
            </p>
            <h4 className="tools">Tools</h4>
            <p className="skills">
                <DiGit className="i-item" style={{fontSize: 72}}/>
                <DiNpm className="i-item" style={{fontSize: 72}}/>
                <FaHardHat className="i-item" style={{fontSize: 72}}/>
                <SiWeb3Dotjs className="i-item" style={{fontSize: 72}}/>
                <FaUnity className="i-item" style={{fontSize: 72}}/>
                <img className="i-item" src="https://gateway.pinata.cloud/ipfs/QmZvhvrU2ExdPjrVVTvf2XrZpYjdkySrD3nWxpKUudPRdf" style={{height: 72, width: 72}} />
                <img className="i-item" src="https://gateway.pinata.cloud/ipfs/QmRWPBZMEDP7ivKJoHbMFbQqaF7ay3gYF1D72RdhaYLywM" style={{height: 72, width: 72}}/>
                <img className="i-item" src="https://gateway.pinata.cloud/ipfs/QmRFT5J5HbiSVEe4FfrUCPkEk1dL8m9Czj2Fc831674rxN" style={{height: 72, width: 72}}/>
                
            </p>

        </div>
    );
}

export default Skills;
