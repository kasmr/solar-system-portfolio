import { useEffect } from 'react';

import ReactGA from 'react-ga';

import { Three } from './Three';

import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Header } from './components/Header';
import { About } from './components/About';
import { Contacts } from './components/Contacts';


const App = () => {
    Three();

    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
        ReactGA.pageview('/')
    }, []);

    return (
        <div className="App">
            <main>
                <Header/>
                <About/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </main>
        </div>
    );
};

export { App };
