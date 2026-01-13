import React from 'react';
import { motion } from 'framer-motion';

const SeedToCodeAnimation = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent opacity-50" />

            <motion.div
                className="relative w-48 h-48 flex items-center justify-center"
                initial="seed"
                animate="cycle"
                variants={{
                    cycle: {
                        transition: {
                            staggerChildren: 2,
                            repeat: Infinity,
                            repeatDelay: 1, // Pause before restarting
                            duration: 10 // Total loop duration
                        }
                    }
                }}
            >
                {/* Stage 1: The Seed */}
                <motion.div
                    className="absolute"
                    variants={{
                        seed: { y: -100, opacity: 0, scale: 0 },
                        cycle: {
                            y: [null, -100, 0, 0, 0, 50], // Drop, hold, then fall away
                            opacity: [null, 0, 1, 1, 0, 0],
                            scale: [null, 0.5, 1, 1, 0.5, 0],
                            transition: { duration: 4, times: [0, 0.2, 0.4, 0.7, 0.8, 1] }
                        }
                    }}
                >
                    <div className="w-4 h-4 bg-amber-700 rounded-full shadow-[0_0_15px_rgba(180,83,9,0.5)]" />
                </motion.div>

                {/* Stage 2: The Sprout */}
                <motion.div
                    className="absolute bottom-16"
                    variants={{
                        seed: { scale: 0, opacity: 0 },
                        cycle: {
                            scale: [0, 1, 1.2, 0],
                            opacity: [0, 1, 1, 0],
                            transition: { delay: 1.5, duration: 3, times: [0, 0.2, 0.8, 1] }
                        }
                    }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]">
                        <path d="M12 22v-12" />
                        <path d="M12 10a5 5 0 0 1 5 5v7" />
                        <path d="M12 10a5 5 0 0 0-5 5v7" />
                    </svg>
                </motion.div>

                {/* Stage 3: The Code Symbols */}
                <motion.div
                    className="absolute flex gap-4 items-center justify-center"
                    variants={{
                        seed: { opacity: 0, scale: 0.5 },
                        cycle: {
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1.1, 1, 0.8],
                            y: [20, 0, 0, -20],
                            transition: { delay: 4, duration: 4, times: [0, 0.2, 0.8, 1] }
                        }
                    }}
                >
                    <span className="text-3xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">{`{ }`}</span>
                    <span className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">{`</>`}</span>
                    <span className="text-3xl font-bold text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.8)] animate-pulse">_</span>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default SeedToCodeAnimation;
