import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/index.jsx';
import { AnimatedBackground } from '../../components/common/animatedBg.jsx';
import { Navbar } from '../../components/layout/nav.jsx';
import { Footer } from '../../components/layout/footer.jsx'; // Import Footer

export default function AppRoutes() {
    return (
        <Router>
            <AnimatedBackground>
                <Navbar />
                <main className="min-h-screen">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </AnimatedBackground>
        </Router>
    );
}