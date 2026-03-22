import { motion } from 'framer-motion';
import React from 'react';


// Explicitly not using Tailwind, sticking to inline styles or CSS modules would be fine,
// but for "Senior" feel, reusable styled components or clean BEM CSS is good.
// I will use standard CSS classes defined in index.css for simplicity as per "Vanilla CSS" preference in prompt, 
// wrapped in framer-motion components.

const ButtonCallback = ({ children, onClick, variant = 'primary', type = 'button' }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`btn btn-${variant}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </motion.button>
    );
};

export default ButtonCallback;
