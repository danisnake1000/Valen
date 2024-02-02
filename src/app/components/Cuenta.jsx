"use client"

import { useState, useEffect } from 'react';

const Cuenta = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Cuenta regresiva</h1>
      </div>
      
      <div className="flex justify-center">
        <div className="bg-black text-white p-4 rounded-lg mr-2 ">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="bg-black text-white p-4 rounded-lg mr-2">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div className="bg-black text-white p-4 rounded-lg mr-2">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="bg-black text-yellow-200 p-4 rounded-lg">
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
