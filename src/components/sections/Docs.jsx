import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilePdf, FaEye, FaDownload, FaFileAlt, FaSearch } from 'react-icons/fa';
import Resume from './Resume';
import html2pdf from 'html2pdf.js';

const Docs = () => {
    const [selectedDoc, setSelectedDoc] = useState(null);
    const resumeRef = React.useRef(null);

    const docsData = [
        {
            id: 'resume',
            title: 'Professional Resume',
            type: 'PDF / Interactive',
            description: 'Full-stack developer resume featuring project highlights and technical expertise.',
            icon: <FaFilePdf className="text-red-500" size={40} />,
            category: 'Core'
        }
    ];

    const handleDownload = () => {
        const element = document.querySelector('.resume-paper-viewer');
        if (!element) return;

        const opt = {
            margin: 0,
            filename: 'Aman_Kumar_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                backgroundColor: '#0a0a0a'
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    };

    return (
        <section id="docs" className="py-20 md:py-32 bg-[var(--bg-dark)] px-4 sm:px-8 md:px-12 relative min-h-screen">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Professional <span className="text-[var(--primary-color)]">Documents</span>
                    </motion.h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        View and download my professional resume and other career-related documents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {docsData.map((doc) => (
                        <motion.div
                            key={doc.id}
                            className="bg-[var(--bg-card)] border border-white/10 rounded-3xl p-8 hover:border-[var(--primary-color)]/30 transition-all duration-500 group relative overflow-hidden"
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    {doc.icon}
                                </div>
                                <span className="text-[10px] font-black px-3 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full uppercase tracking-widest">
                                    {doc.category}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{doc.title}</h3>
                            <p className="text-white/40 text-sm mb-8 leading-relaxed">
                                {doc.description}
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setSelectedDoc(doc.id)}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-all border border-white/5"
                                >
                                    <FaEye /> View
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedDoc(doc.id);
                                        // We don't auto-download, just show viewer first as per 5.10
                                    }}
                                    className="p-3 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-xl hover:bg-[var(--primary-color)]/20 transition-all"
                                    title="Download"
                                >
                                    <FaDownload />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Viewer */}
            <AnimatePresence>
                {selectedDoc === 'resume' && (
                    <motion.div
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedDoc(null)} />

                        <motion.div
                            className="relative w-full max-w-5xl h-[90vh] bg-[var(--bg-dark)] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                        >
                            {/* Toolbar */}
                            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                <div className="flex items-center gap-4">
                                    <h4 className="text-sm font-bold text-white/70 uppercase tracking-widest hidden sm:block">PDF Viewer</h4>
                                    <div className="h-4 w-px bg-white/10 hidden sm:block" />
                                    <span className="text-xs text-white/40">{docsData[0].title}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg"
                                    >
                                        <FaDownload /> Download PDF
                                    </button>
                                    <button
                                        onClick={() => setSelectedDoc(null)}
                                        className="p-2 text-white/40 hover:text-white transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* Viewer Content */}
                            <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-black/50 scrollbar-hide">
                                <div className="resume-paper-viewer origin-top transform scale-[0.85] sm:scale-100">
                                    <Resume isViewer={true} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Docs;
