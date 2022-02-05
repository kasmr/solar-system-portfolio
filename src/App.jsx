import { Three } from './Three';
import './App.css';

import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Header } from './components/Header';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Blockquote } from './components/Blockquote';


const App = () => {
    Three();

    return (
        <div className="App">
            <main>
                <Header/>
                <About/>
                <Skills/>
                <Blockquote id="quote" text="“Expect the best, plan for the worst, and prepare to be surprised.”"/>
                <Projects/>
                <Blockquote id="contact" text="The ways you can contact me"/>
                <Contacts/>
            </main>
        </div>
    );
};

export { App };
