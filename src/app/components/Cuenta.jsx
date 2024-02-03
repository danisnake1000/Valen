"use client";

import { useState, useEffect } from "react";

const Cuenta = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
    <div className="text-center  text-pink-400">
      <div>
        <h1 className="text-3xl font-bold mb-4">CUENTA REGRESIVA</h1>
      </div>

      <div className="flex justify-center text-3xl font-bold  text-pink-400">
        <div className="bg-black p-4 rounded-lg mr-2 ">
          <div>{timeLeft.days}</div>
          <div className="text-sm">Dias</div>
        </div>
        <div className="bg-black  p-4 rounded-lg mr-2">
          <div>{timeLeft.hours}</div>
          <div className="text-sm">Horas</div>
        </div>
        <div className="bg-black p-4 rounded-lg mr-2">
          <div>{timeLeft.minutes}</div>
          <div className="text-sm">Minutos</div>
        </div>
        <div className="bg-black  p-4 rounded-lg">
          <div>{timeLeft.seconds}</div>
          <div className="text-sm">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
