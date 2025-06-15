import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import WhyChooseUs from './pages/WhyChooseUs';
import ManagedITServices  from './pages/ManagedITServices';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<WhyChooseUs />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/managed-services" element={<ManagedITServices />} />
            <Route path="/co-managed" element={<div>Co-Managed Coming Soon</div>} />
            <Route path="/server-admin" element={<div>Server Admin Coming Soon</div>} />
            <Route path="/vapt" element={<div>VAPT Coming Soon</div>} />
            <Route path="/app-development" element={<div>App Development Coming Soon</div>} />
            <Route path="/faq" element={<div>FAQ Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;