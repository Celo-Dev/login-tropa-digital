import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SignIn from '../pages/SignIn/SignIn';
import Eventos from '../pages/Eventos/Eventos';

const pageTransition = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: -300, opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
};


const RoutesApp = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div {...pageTransition}>
                            <SignIn />
                        </motion.div>
                    }
                />
                <Route
                    path="/eventos"
                    element={
                        <motion.div {...pageTransition}>
                            <Eventos />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};


export default RoutesApp;
