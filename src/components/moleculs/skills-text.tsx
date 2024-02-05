import React from 'react'
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
  } from "@/utils/motion";
import { SparklesIcon } from '@heroicons/react/24/solid';

export default function SkillsText() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#6cf8428b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#9eff9b] h-5  w-5" />
          <h1 className="Welcome-text text-[13px]">Worth to buy</h1>
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Never miss a buy
      </motion.div>
    </div>
  )
}
