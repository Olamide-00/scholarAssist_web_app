// src/routes/appRoutes/index.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/index.jsx';
import { AnimatedBackground } from '../../components/common/animatedBg.jsx';
import { Footer } from '../../components/layout/footer.jsx'; 
import { Order } from '../../pages/order/index.jsx';
import Payment from "../../pages/payment/index.jsx";

export default function AppRoutes() {
    return (
        <Router>
            <AnimatedBackground>
                <div className="min-h-screen flex flex-col">
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path='/order' element={<Order />} />
                            <Route path='/payment' element={<Payment />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </AnimatedBackground>
        </Router>
    );
}