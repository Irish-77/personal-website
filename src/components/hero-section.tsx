"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { HeroHighlight } from "./ui/hero-highlight";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const HeroSection = () => {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageLoaded(true);
        }, 500); // 0.5 seconds delay to sync with text animation
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="flex flex-col md:flex-row items-start max-w-full mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="flex-1"
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-left">
                    My name is Bastian Berle. I&apos;m a master student and a passionate{" "}
                    <HeroHighlight className="text-black dark:text-white">
                        Machine Learning Enthusiast
                    </HeroHighlight>
                </h1>
            </motion.div>
            <div className="flex-1 flex justify-center md:justify-end mt-4 md:mt-0">
        <div className="w-full md:w-auto md:max-w-sm h-64 md:h-auto relative">
          <motion.div
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: imageLoaded ? "blur(0px)" : "blur(10px)" }}
            transition={{ duration: 1.5, delay: 0.1 }} // 0.5 seconds delay
            className="relative w-full h-full"
          >
            <Avatar className="rounded-lg">
              <AvatarImage className="rounded-lg" src="/assets/me.jpg" alt="Bastian Berle" />
              <AvatarFallback>BB</AvatarFallback>  
                
              
            {/* <img
              
              className={`w-full h-full object-cover rounded-lg transition-filter duration-500 ease-in-out ${
                imageLoaded ? "blur-0" : "blur-lg"
              }`}
              onLoad={() => setImageLoaded(true)}
            /> */}
            </Avatar>
            
          </motion.div>
        </div>
      </div>

        </div>
    );
};


