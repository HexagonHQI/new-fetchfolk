import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoBackground from './components/VideoBackground';
import Header from './components/Header';
import FindServices from './components/FindServices';
import AboutUs from './components/AboutUs';
import Travelers from './components/Travelers';
import Requesters from './components/Requesters';
import ResearchCategory from './components/ResearchCategory';
import TravelerOptions from './components/TravelerOptions'; 
import RequesterOptions from './components/RequesterOptions'; 
import './styles.css';

import homeVideo from './assets/home-background.mp4';
import requestVideo from './assets/request-background.mp4';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <VideoBackground videoSource={homeVideo} />
                    </Route>
                    <Route path="/services">
                        <VideoBackground videoSource={requestVideo} />
                    </Route>
                    <Route path="/about">
                        <AboutUs />
                    </Route>
                    <Route path="/find-services">
                        <FindServices />
                    </Route>
                    <Route path="/travelers">
                        <Travelers />
                    </Route>
                    <Route path="/requesters">
                        <Requesters />
                    </Route>
                    <Route path="/research/:type" component={ResearchCategory} />
                    <Route path="/traveler-options" component={TravelerOptions} />
                    <Route path="/requester-options" component={RequesterOptions} /> {/* New route for RequesterOptions */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
