import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-container">
            <h1>&#128193; My Projects</h1>
            <h4>Here below you can see my portfolio projects. Check my GitHub to see more . . .</h4>

            <div className="projects__cards">
                <div className="projects__card">
                    <h3>NFT Marketplace</h3>
                    <img src="https://gateway.pinata.cloud/ipfs/QmSad3opitSwSUAFKWNLgtqdFRwz2NUY3Pqxvej6TPVxrd" alt="Uniswap Swap Page" />
                    <p> I made dapp where you can do all what you can do at OpenSea (almost all)
                    </p>

                    <a href="https://github.com/siddot/NFT-Marketplace" target="_blank" className="button">Code</a>
                    <a href="" target="_blank" className="button">No site yet</a>
                </div>

                <div className="projects__card">
                    <h3>Staking DApp</h3>
                    <img src="https://gateway.pinata.cloud/ipfs/QmbZhATnsjGfWHPuZWZKxsfT226Un25Y8jiNVd5yZ3NGPF" alt="Compound Landing Page" />
                    <p>I made dapp where you can stake mDAI tokens and as a award for staking you can get native tokens
                    </p>
                    <a href="https://github.com/siddot/staking_dapp" target="_blank" className="button">Code</a>
                    <a href="#" target="_blank" className="button">No site yet</a>

                </div>

                <div className="projects__card">
                    <h3>NFT</h3>
                    <img src="https://gateway.pinata.cloud/ipfs/QmZx8QhXVRAU4YDDieYfJVcdXGasRB1ot9PdXXoLwMaohh" alt="Aave Landing Page" />
                    <p> I coded my own NFT Collectible and published one to OpenSea testnets.
                    </p>
                    <a href="https://testnets.opensea.io/assets/rinkeby/0xa2a76353dbd205b8342054bce70178b47ea2f469/1" target="_blank" className="button">Site</a>
                    <a href="https://github.com/siddot/NFT-Collectible" target="_blank" className="button">Code</a>
                </div>
                <div className="projects__card">
                    <h3>Mood Dapp</h3>
                    <img src="https://gateway.pinata.cloud/ipfs/QmdbW5RM8hS8Q5v14uuorFztHyGdb56E9ogK8aXiDwAgbx" alt="Aave Landing Page" />
                    <p> I created dapp where you can set your mood for native mood tokens which you can get by swapping eth in same dapp &#128514; Cool? I think so too.
                    </p>
                    <a href="#" target="_blank" className="button">No site yet</a>
                    <a href="https://github.com/siddot/mood-app" target="_blank" className="button">Code</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"
