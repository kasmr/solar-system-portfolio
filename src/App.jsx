import { Three } from './Three';
import './App.css';

import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Header } from './components/Header';
import { About } from './components/About';
import { Contacts } from './components/Contacts';


const App = () => {
    Three();

    return (
        <main>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </main>
    );
};

export { App };
