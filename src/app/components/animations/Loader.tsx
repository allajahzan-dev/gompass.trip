"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

// Loader
export default function Loader({ children }: { children: ReactNode }) {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Loading animation
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 2000);
                    return 100;
                }
                return prev + 1;
            });
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="fixed z-50 inset-0 bg-black flex items-center justify-center">
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Title */}
                        <motion.h1
                            initial={{ scale: 0.6 }}
                            animate={progress === 100 ? { scale: 1 } : { scale: 0.6 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                            className="relative z-10 font-bold text-[160px] text-white"
                        >
                            Gompass.trip
                        </motion.h1>

                        {/* Expanding circle */}
                        {progress === 100 ? (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 100 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#f15b34] rounded-full"
                            />
                        ) : (
                            /* Progress bar */
                            <div className="absolute bottom-0 w-[400px] h-6 bg-zinc-800 rounded-full overflow-hidden">
                                <div
                                    style={{ width: `${progress}%` }}
                                    className="bg-white h-full transition-all duration-100"
                                />
                                <p className="absolute inset-0 flex items-center justify-center text-black text-base font-medium">
                                    {progress}%
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {children}
        </>
    );
}
