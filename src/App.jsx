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
        <div className="App">
            <main>
                <Header/>
                <About/>
                <Skills/>

                <blockquote id="quote">
                    <p>“Expect the best, plan for the worst, and prepare to be surprised.”</p>
                </blockquote>

                <Projects/>

                <blockquote id="contact">
                    <p>The ways you can contact me</p>
                </blockquote>

                <Contacts/>
            </main>
        </div>
    );
};

export { App };
