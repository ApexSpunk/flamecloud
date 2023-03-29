import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Start from './Start';
import '../App.css';

function Allroutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Start />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    )
}

export default Allroutes