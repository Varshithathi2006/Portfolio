import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import storyBeginning from '../assets/story_beginning.png';
import storyGrowth from '../assets/story_growth.png';
import storyVision from '../assets/story_vision.png';

const StoryText = ({ text }) => {
    return (
        <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-gray-300 transition-colors">
            {text}
        </p>
    );
};

const Card = ({ title, text, imageUrl, index, total, range }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]); // Keeping card scale simple for now, can add depth later
    const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });

    // Top position calc: spacing them out so they stack
    const top = 100 + index * 40;

    return (
        <div
            ref={containerRef}
            className="h-[100vh] flex items-start justify-center sticky"
            style={{ top: `0px` }} // Container is tall to allow scroll
        >
            <motion.div
                style={{
                    top: top,
                    scale: smoothScale,
                }}
                className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 w-full max-w-5xl h-[60vh] md:h-[500px] bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-xl dark:shadow-2xl sticky transition-colors duration-300"
            >
                {/* Visual Side */}
                <div className="w-full md:w-1/2 h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-gradient-to-br dark:from-teal-900/20 dark:to-emerald-900/20 border border-slate-200 dark:border-white/5 relative group transition-colors duration-300">
                    <div className="absolute inset-0 bg-transparent dark:bg-black/20 transition-colors" />
                    <div className="w-full h-full flex items-center justify-center relative z-10 transition-transform duration-700 hover:scale-105">
                        {imageUrl ? (
                            <motion.img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-full object-cover opacity-90 transition-opacity"
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                            />
                        ) : null}
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-[#EA4326] dark:text-emerald-400 mb-6 transition-colors">
                        {title}
                    </h3>
                    <StoryText text={text} />
                </div>
            </motion.div>
        </div>
    );
};


const ScrollStory = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const chapters = [
        {
            title: "The Beginning",
            text: "My journey started with a fascination for data and its potential. From building foundational skills in Web Development (MERN) to exploring the depths of Machine Learning, every line of code was a step towards solving real-world challenges.",
            imageUrl: storyBeginning
        },
        {
            title: "The Action",
            text: "I didn't just learn; I built. Competing in hackathons like Cubicle Code 5.0 and GenAI Hackathon pushed me to innovate under pressure. Developing tools like 'GenJournals' proved that AI can create meaningful impacts in people's lives.",
            imageUrl: storyGrowth
        },
        {
            title: "The Vision",
            text: "Today, my focus fuses Artificial Intelligence, Big Data, and Cloud technologies, validated by certifications like Oracle Foundation Associate. From presenting research at IEEE to full-stack implementation, my goal is to architect intelligent systems that blend technical rigor with tangible value.",
            imageUrl: storyVision
        }
    ];

    return (
        <div ref={containerRef} className="relative bg-white dark:bg-slate-950 pb-40 transition-colors duration-300">
            <div className="pt-20 pb-10 text-center sticky top-0 z-0 opacity-80">
                <h2 className="text-4xl font-bold text-[#EA4326] dark:text-white mb-2 transition-colors">My Journey</h2>
                <p className="text-slate-600 dark:text-gray-400 transition-colors">Scroll to explore</p>
            </div>

            <div className="relative">
                {chapters.map((chapter, index) => (
                    <Card
                        key={index}
                        {...chapter}
                        index={index}
                        total={chapters.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScrollStory;
