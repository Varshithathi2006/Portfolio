import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import storyBeginning from '../assets/story_beginning.png';
import storyGrowth from '../assets/story_growth.png';
import storyVision from '../assets/story_vision.png';

const StoryText = ({ text }) => {
    return (
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
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
                className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 w-full max-w-5xl h-[60vh] md:h-[500px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl sticky"
            >
                {/* Visual Side */}
                <div className="w-full md:w-1/2 h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/5 relative group">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="w-full h-full flex items-center justify-center relative z-10 transition-transform duration-700 hover:scale-105">
                        {imageUrl ? (
                            <motion.img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-full object-cover opacity-90"
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
                    <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
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
            text: "Every great journey starts with a single line of code. It began with curiosity—a simple 'Hello World' that opened the door to infinite possibilities. Late nights, endless documentation, and the thrill of solving the puzzle.",
            imageUrl: storyBeginning
        },
        {
            title: "The Growth",
            text: "Challenges became stepping stones. Learning React, mastering data structures, and understanding that styling is an art form. Each project added a new layer of depth, transforming isolated scripts into cohesive applications.",
            imageUrl: storyGrowth
        },
        {
            title: "The Vision",
            text: "Now, the focus shifts to creating experiences that matter. Building interfaces that feel alive, intuitive, and seamless. It's not just about functionality anymore; it's about the story the content tells as it flows across the screen.Long term goal is to fuse AI,Music and writings. ",
            imageUrl: storyVision
        }
    ];

    return (
        <div ref={containerRef} className="relative bg-slate-950 pb-40">
            <div className="pt-20 pb-10 text-center sticky top-0 z-0 opacity-50">
                <h2 className="text-4xl font-bold text-white mb-2">My Journey</h2>
                <p className="text-gray-400">Scroll to explore</p>
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
