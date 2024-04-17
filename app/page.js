"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import Hero from "./Hero";


import CustomRoulette from "./CustomRoulette";
import GoalSetting from "./GoalSetting";
// import ProgressTracker from "./ProgressTracker";
import PomodoroTimer from "./PomodoroTimer";
import DeepWorkTimer from "./DeepWorkTimer";
import HabitTracking from "./HabitTracking";
import Divider from "./Divider";


export default function Home() {
  return (
    <div>
    <Hero/>
    <Divider type="line"/>
    <CustomRoulette/>
    <Divider type="line"/>
    <GoalSetting/>
    <Divider type="line"/>
    {/* <ProgressTracker/> */}
    <PomodoroTimer/>
    <Divider type="line"/>
    <DeepWorkTimer/>
    <Divider type="line"/>
    <HabitTracking/>
    <Divider type="line"/>
  
  
    </div>
    
  );
}
