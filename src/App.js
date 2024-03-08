import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { history} from './helpers/history';
import {Nav} from './components/Nav';
import {Alert} from './components/Alert';
import {PrivateRoute} from './components/privateroute';
import { Home} from './home/home';
import AccountLayout from './account/AccountLayout';
import { Dashboard } from './home/dashboard';
import { About } from './home/about';
export { App };

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Routes>
                    {/* private */}
                    <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/home" element={<Home />} />
                         <Route path="/about" element={<About />} /> 
                    </Route>
                    {/* public */}
                    <Route path="account/*" element={<AccountLayout />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </div>
        </div>
    );
}