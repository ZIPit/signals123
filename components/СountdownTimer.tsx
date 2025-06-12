'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Clock, CircleCheck, Archive } from "lucide-react";

type CountdownTimerProps = {
  targetTime: string; // ISO-строка (время окончания)
 expiration: number; // время истечения в миллисекундах
};

export default function CountdownTimer({ targetTime, expiration }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime(targetTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime(targetTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);
console.log('timeLeft', timeLeft.total/1000,expiration*60);
  if (timeLeft.total <= 0&&(timeLeft.total/1000)<-1*expiration*60) {
    return <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium'> <Clock className="h-4 w-4 mr-1 text-red-500" />Expired </span>;
  }
  else if (timeLeft.total <= 0) {
    return <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium'> <Clock className="h-4 w-4 mr-1 text-green-500" />Active </span>;
  }
  return (   
    <div>
    <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium'><Clock className="h-4 w-4 mr-1 text-blue-500" /> {timeLeft.minutes}:{timeLeft.seconds}  
    <br/>
    Remaining
    </span>    
    
    </div>
  );

}

function getRemainingTime(target: string) {
  const total =   Date.parse(target) -Date.now() ;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);

  return {
    total,
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}