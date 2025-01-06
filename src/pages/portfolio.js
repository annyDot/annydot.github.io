import React from 'react';

//assets
import portfolio from './assets/portfoliodesigns/portfolio.pdf'

//fullsizes
import flowbook from './assets/portfoliodesigns/flowbook.png';
import landingpage from './assets/portfoliodesigns/landingpage.png';
import PrettyPuzzled2 from './assets/portfoliodesigns/PrettyPuzzled2.png';
import tasteslikestrawberries2 from './assets/portfoliodesigns/tasteslikestrawberries2.png';
import MachineManLayout from './assets/portfoliodesigns/MachineManLayout.png';
import passionpages from './assets/portfoliodesigns/passionpages.png';
import rollerskates from './assets/portfoliodesigns/rollerskates.png';
import Furnessence from './assets/portfoliodesigns/Furnessence.png';
import MyCalendar from './assets/portfoliodesigns/MyCalendar.png';
import Bubbly from './assets/portfoliodesigns/Bubbly.png';
import Happier from './assets/portfoliodesigns/Happier.png';
import darkwillow from './assets/portfoliodesigns/darkwillow.png';
import Licitar from './assets/portfoliodesigns/Licitar.png';
//thumbs
import thumbflowbook from './assets/portfoliodesigns/thumbflowbook.png';
import thumblandingpage from './assets/portfoliodesigns/thumblandingpage.png';
//import thumbPrettyPuzzled1 from './assets/portfoliodesigns/thumbPrettyPuzzled1.png';
import thumbPrettyPuzzled2 from './assets/portfoliodesigns/thumbPrettyPuzzled2.png';
import thumbtasteslikestrawberries2 from './assets/portfoliodesigns/thumbtasteslikestrawberries2.png';
import thumbMachineManLayout from './assets/portfoliodesigns/thumbMachineManLayout.png';
import thumbpassionpages from './assets/portfoliodesigns/thumbpassionpages.png';
import thumbMonochromeParticlesLayout2 from './assets/portfoliodesigns/thumbMonochromeParticlesLayout2.png';
import thumbrollerskates from './assets/portfoliodesigns/thumbrollerskates.png';
import thumbFurnessence from './assets/portfoliodesigns/thumbFurnessence.png';
import thumbMyCalendar from './assets/portfoliodesigns/thumbMyCalendar.png';
import thumbBubbly from './assets/portfoliodesigns/thumbBubbly.png';
import thumbHappier from './assets/portfoliodesigns/thumbHappier.png';
import thumbdarkwillow from './assets/portfoliodesigns/thumbdarkwillow.png';
import thumblicitar from './assets/portfoliodesigns/thumbLicitar.png';


const Portfolio = () => {
    return (
    <>
        <div className='contentContainer'>

            <h2>Portfolio.</h2>

        <div className='hr'/>

            <div className='contentPortfolio'>
                <a href= {portfolio} target='_blank' rel='noreferrer'>Download my portfolio (April 2021, PDF)</a>
            <br/><br/>

                <h2>Web design</h2>
                <a href={flowbook} target='_blank' rel='noreferrer'><img src={thumbflowbook} alt='flowbook' ></img></a>
                <a href={landingpage} target='_blank' rel='noreferrer'><img src={thumblandingpage} alt='landingpage' ></img></a>
                <a href={PrettyPuzzled2} target='_blank' rel='noreferrer'><img src={thumbPrettyPuzzled2} alt='prettypuzzled' ></img></a>
                <a href={passionpages} target='_blank' rel='noreferrer'><img src={thumbpassionpages} alt='passionledushere'></img></a>
                <a href={rollerskates} target='_blank' rel='noreferrer'><img src={thumbrollerskates} alt='rollerskates'></img></a>
                <a href={Furnessence} target='_blank' rel='noreferrer'><img src={thumbFurnessence} alt='furnessence' ></img></a>
                <a href={tasteslikestrawberries2} target='_blank' rel='noreferrer'><img src={thumbtasteslikestrawberries2} alt='tasteslikestrawberries' ></img></a>
                <a href={MachineManLayout} target='_blank' rel='noreferrer' ><img src={thumbMachineManLayout} alt='machineman' style={{width:'initial'}}></img></a>
                <a href='https://annydot.github.io/layouts/monochromeparticles/shop.html' target='_blank' rel='noreferrer'><img src={thumbMonochromeParticlesLayout2} alt='monochromeparticles' style={{width:'initial'}}></img></a>

            <br/>

                <h2>App design</h2>
                <a href={MyCalendar} target='_blank' rel='noreferrer'><img src={thumbMyCalendar} alt='bubbly'></img></a>
                <a href={Bubbly} target='_blank' rel='noreferrer'><img src={thumbBubbly} alt='bubbly'></img></a>
                <a href={Happier} target='_blank' rel='noreferrer'><img src={thumbHappier} alt='happier'></img></a>


            <br/>
                <h2>Other work</h2>
                <a href={darkwillow} target='_blank' rel='noreferrer'><img src={thumbdarkwillow} alt='darkwillow'></img></a>
                <a href={Licitar} target='_blank' rel='noreferrer'><img src={thumblicitar} alt='licitar'></img></a>

            </div>

        </div>

    </>
    )
}

export default Portfolio