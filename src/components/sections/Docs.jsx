import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaFilePdf, FaEye, FaDownload, FaFileAlt, FaHdd, FaSearch,
    FaStar, FaClock, FaTrash, FaShareAlt, FaPlus, FaThLarge, FaList,
    FaInfoCircle, FaRegFolder, FaChevronRight, FaCloud, FaExclamationTriangle
} from 'react-icons/fa';
import Resume from './Resume';
import html2pdf from 'html2pdf.js';

const Docs = () => {
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [activeTab, setActiveTab] = useState('drive');
    const [isGenerating, setIsGenerating] = useState(false);

    const sidebarItems = [
        { id: 'priority', label: 'Priority', icon: <FaStar size={16} /> },
        { id: 'drive', label: 'My Drive', icon: <FaHdd size={16} />, active: true },
        { id: 'shared', label: 'Shared with me', icon: <FaShareAlt size={16} /> },
        { id: 'recent', label: 'Recent', icon: <FaClock size={16} /> },
        { id: 'starred', label: 'Starred', icon: <FaStar size={16} /> },
        { id: 'trash', label: 'Trash', icon: <FaTrash size={16} /> },
    ];

    const docsData = [
        {
            id: 'resume-interactive',
            title: 'Aman_Kumar_Interactive.os',
            type: 'System File',
            owner: 'me',
            lastModified: 'Apr 18, 2026',
            fileSize: '452 KB',
            description: 'Dynamic React-based professional operating system resume.',
            icon: <FaFileAlt className="text-blue-500" size={24} />,
            color: '#4285F4' // Google Blue
        },
        {
            id: 'resume-static',
            title: 'Aman_Kumar_Professional.pdf',
            type: 'PDF Document',
            owner: 'me',
            lastModified: 'Apr 17, 2026',
            fileSize: '1.2 MB',
            description: 'Static high-fidelity professional resume for corporate applications.',
            icon: <FaFilePdf className="text-red-500" size={24} />,
            color: '#EA4335' // Google Red
        }
    ];

    const handleDownload = async () => {
        if (selectedDoc === 'resume-interactive') {
            const element = document.querySelector('.resume-paper-viewer');
            if (!element) return;

            setIsGenerating(true);

            // Wait for animations to finish and layout to stabilize
            await new Promise(resolve => setTimeout(resolve, 800));

            const opt = {
                margin: 0,
                filename: 'Aman_Kumar_Interactive_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    backgroundColor: '#0a0a0a',
                    logging: true
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            try {
                await html2pdf().set(opt).from(element).save();
            } finally {
                setIsGenerating(false);
            }
        } else if (selectedDoc === 'resume-static') {
            window.open('/aman_kumar.pdf', '_blank');
        }
    };

    return (
        <section id="docs" className="h-screen bg-[#0d1117] flex flex-col overflow-hidden font-sans">
            {/* Top Navigation Bar */}
            <div className="h-16 border-b border-white/10 flex items-center px-4 md:px-6 justify-between bg-[#161b22] z-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center text-[var(--primary-color)] shadow-lg">
                        <FaCloud size={20} />
                    </div>
                    <span className="text-xl font-bold text-white hidden sm:block tracking-tight">Drive</span>
                </div>

                <div className="flex-1 max-w-2xl mx-10 hidden md:block">
                    <div className="relative group">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[var(--primary-color)] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search in Drive"
                            className="w-full bg-white/5 border border-transparent focus:bg-[#1c2128] focus:border-[var(--primary-color)]/50 rounded-xl py-2.5 pl-12 pr-4 text-white text-sm transition-all outline-none"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-white/5 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/40 hover:bg-white/5'}`}
                        >
                            <FaThLarge size={14} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-white/40 hover:bg-white/5'}`}
                        >
                            <FaList size={14} />
                        </button>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] border border-white/20 flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-inner">
                        AK
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-16 md:w-64 border-r border-white/10 flex flex-col py-6 px-3 bg-[#0d1117]">
                    <button className="flex items-center justify-center md:justify-start gap-3 bg-white text-black rounded-2xl md:rounded-xl px-4 py-4 md:py-3.5 mb-8 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-95 transition-all">
                        <FaPlus size={16} />
                        <span className="font-bold text-sm hidden md:block uppercase tracking-wider">New</span>
                    </button>

                    <div className="space-y-1">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center justify-center md:justify-start gap-4 px-3 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-[var(--primary-color)]/10 text-[var(--primary-color)] border border-[var(--primary-color)]/20' : 'text-white/40 hover:bg-white/5'}`}
                            >
                                <span className={activeTab === item.id ? 'text-[var(--primary-color)] shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]' : ''}>
                                    {item.icon}
                                </span>
                                <span className="text-sm font-semibold hidden md:block">{item.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto md:p-4 hidden md:block">
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Storage</div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                            <div className="h-full bg-[var(--primary-color)] w-[65%]" />
                        </div>
                        <div className="text-[10px] text-white/40">1.6 MB of 15 GB used</div>
                        <button className="mt-4 w-full py-2 border border-white/10 rounded-lg text-[10px] font-bold text-[var(--primary-color)] uppercase tracking-widest hover:bg-[var(--primary-color)]/5 transition-all">Get more storage</button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto bg-[#0d1117] p-6 md:p-8 scrollbar-hide">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-white/40 text-sm mb-8 font-medium">
                        <span className="hover:text-white cursor-pointer transition-colors">My Drive</span>
                        <FaChevronRight size={10} />
                        <span className="text-white font-bold">Public Documents</span>
                    </div>

                    {/* Files Section */}
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {docsData.map((doc) => (
                                <motion.div
                                    key={doc.id}
                                    whileHover={{ y: -5 }}
                                    className="bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-[var(--primary-color)]/30 transition-all group shadow-sm hover:shadow-2xl"
                                >
                                    <div className="h-40 bg-[#0d1117] flex items-center justify-center relative border-b border-white/5">
                                        <div className="opacity-40 group-hover:scale-110 transition-transform duration-500 transform-gpu">
                                            {React.cloneElement(doc.icon, { size: 64 })}
                                        </div>
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
                                                <FaInfoCircle size={12} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="opacity-80">{React.cloneElement(doc.icon, { size: 16 })}</span>
                                            <span className="text-white font-bold text-sm truncate">{doc.title}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-[10px] text-white/30 uppercase tracking-tighter">{doc.lastModified}</span>
                                            <div className="flex gap-1.5">
                                                <button
                                                    onClick={() => setSelectedDoc(doc.id)}
                                                    className="px-3 py-1.5 bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-[10px] font-black rounded-lg hover:bg-[var(--primary-color)]/20 transition-all uppercase tracking-widest border border-[var(--primary-color)]/20"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (doc.id === 'resume-static') window.open('/aman_kumar.pdf', '_blank');
                                                        else setSelectedDoc(doc.id);
                                                    }}
                                                    className="p-1.5 text-white/20 hover:text-white transition-colors"
                                                >
                                                    <FaDownload size={12} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="text-[10px] text-white/30 border-b border-white/5 uppercase tracking-[0.2em] font-black">
                                    <tr>
                                        <th className="px-6 py-4 font-black">Name</th>
                                        <th className="px-6 py-4 font-black hidden sm:table-cell">Owner</th>
                                        <th className="px-6 py-4 font-black hidden md:table-cell">Last modified</th>
                                        <th className="px-6 py-4 font-black hidden lg:table-cell">File size</th>
                                        <th className="px-6 py-4 font-black underline underline-offset-4 decoration-[var(--primary-color)] decoration-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white/80">
                                    {docsData.map((doc) => (
                                        <tr
                                            key={doc.id}
                                            className="hover:bg-white/[0.02] cursor-pointer group border-b border-white/5 last:border-0 transition-colors"
                                            onClick={() => setSelectedDoc(doc.id)}
                                        >
                                            <td className="px-6 py-4 flex items-center gap-4">
                                                {React.cloneElement(doc.icon, { size: 18 })}
                                                <span className="font-bold text-sm group-hover:text-[var(--primary-color)] transition-colors">{doc.title}</span>
                                            </td>
                                            <td className="px-6 py-4 text-xs hidden sm:table-cell text-white/50">{doc.owner}</td>
                                            <td className="px-6 py-4 text-xs hidden md:table-cell text-white/50">{doc.lastModified}</td>
                                            <td className="px-6 py-4 text-xs hidden lg:table-cell text-white/50">{doc.fileSize}</td>
                                            <td className="px-6 py-4">
                                                <button className="text-[var(--primary-color)] hover:underline font-black text-[10px] uppercase tracking-widest">Open</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Viewer */}
            <AnimatePresence>
                {selectedDoc && (
                    <motion.div
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/98" onClick={() => setSelectedDoc(null)} />

                        <motion.div
                            className="relative w-full max-w-6xl h-[95vh] bg-[#0d1117] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
                            initial={{ scale: 0.95, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 30, opacity: 0 }}
                        >
                            {/* Toolbar */}
                            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#161b22]">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
                                    </div>
                                    <div className="h-4 w-px bg-white/10 mx-2" />
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] truncate max-w-[200px]">
                                        {docsData.find(d => d.id === selectedDoc)?.title}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 md:gap-4">
                                    {selectedDoc === 'resume-interactive' && (
                                        <button
                                            onClick={handleDownload}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl text-[10px] font-black hover:bg-white/90 active:scale-95 transition-all shadow-lg uppercase tracking-widest"
                                        >
                                            <FaDownload className={isGenerating ? "animate-bounce" : ""} /> {isGenerating ? "PREPARING..." : "GENERATE"}
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setSelectedDoc(null)}
                                        className="w-10 h-10 flex items-center justify-center bg-white/5 text-white/40 hover:bg-white/10 hover:text-white rounded-full transition-all border border-white/10"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* Viewer Content */}
                            <div className="flex-grow overflow-y-auto bg-black scrollbar-hide relative flex flex-col items-center">
                                {selectedDoc === 'resume-interactive' ? (
                                    <div className="w-full p-2 md:p-12 min-h-full flex items-center justify-center bg-[var(--bg-dark)]">
                                        <div className={`resume-paper-viewer origin-top transform transition-all duration-500 ${isGenerating ? "scale-100" : "scale-[0.6] sm:scale-100"} shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)]`}>
                                            <Resume isViewer={true} isGenerating={isGenerating} />
                                        </div>
                                    </div>
                                ) : (
                                    <iframe
                                        src="/aman_kumar.pdf"
                                        className="w-full h-full border-none bg-white"
                                        title="Static Resume Viewer"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Docs;
