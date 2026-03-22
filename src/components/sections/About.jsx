import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* LARGE BACKGROUND TEXT to fill space */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25vw',
                fontWeight: '900',
                color: 'rgba(255,255,255,0.02)',
                zIndex: 0,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase'
            }}>
                ABOUT
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '900',
                        letterSpacing: '-0.04em'
                    }}
                >
                    About <span style={{ color: 'var(--primary-color)' }}>Me</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: '1.5rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        textAlign: 'center',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '400'
                    }}
                >
                    <p style={{ marginBottom: '30px' }}>
                        I am <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>Aman</span>, a first-year undergraduate fueled by a curiosity for <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>building digital experiences</span>.
                        My journey into software development is driven by a desire to turn ideas into functional, <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>pixel-perfect reality</span>.
                    </p>
                    <p style={{ marginBottom: '30px' }}>
                        I'm currently immersing myself in the modern web ecosystem—mastering <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>React</span>, JavaScript, and CSS to craft intuitive user interfaces.
                        Beyond the code, I believe in learning by doing, constantly pushing the boundaries of my knowledge.
                    </p>
                    <p>
                        I am looking to connect with like-minded developers, collaborate on innovative solutions, and build a robust foundation for a <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>future in software engineering</span>.
                    </p>
                </motion.div>

                {/* Info Tiles to fill bottom space */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '60px'
                }}>
                    {[
                        { label: 'Location', value: 'India', icon: 'fa-location-dot' },
                        { label: 'Education', value: '1st Year BE', icon: 'fa-graduation-cap' },
                        { label: 'Interests', value: 'Web & Crypto', icon: 'fa-laptop-code' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (idx * 0.1) }}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '30px',
                                borderRadius: '24px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'center'
                            }}
                        >
                            <i className={`fa-solid ${item.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '15px', display: 'block' }}></i>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>{item.label}</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)' }}>{item.value}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
