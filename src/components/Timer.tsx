"use client";

import { useEffect, useState } from "react";
import { Counter } from "./Counter";

export function Timer() {
  const [time, setTime] = useState(864000);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevValue) => prevValue - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const day = Math.floor(time / 86400);
  const hour = Math.floor(time / 3600) % 24;
  const minute = Math.floor(time / 60) % 60;
  const second = time % 60;

  return (
    <section>
      <h2 className="uppercase text-white mb-14 text-2xl tracking-[.25rem]">
        We're launching soon
      </h2>
      <div className="flex items-center justify-center gap-3 min-[375px]:gap-4">
        <Counter name="Days" value={day} />
        <Counter name="Hours" value={hour} />
        <Counter name="Minutes" value={minute} />
        <Counter name="Seconds" value={second} />
      </div>
    </section>
  );
}

// Math.floor(time / 86400)
// Math.floor(time / 3600 ) % 24
// Math.floor(time / 60) % 60
// time % 60
