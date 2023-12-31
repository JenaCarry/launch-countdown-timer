import { useEffect, useState } from "react";

interface CounterProps {
  name: string;
  value: number;
}

export function Counter({ name, value }: CounterProps) {
  const [status, setStatus] = useState("");

  const newValue = () => (value >= 10 ? value : `0${value}`);

  const [top, setTop] = useState(newValue);
  const [bottom, setBottom] = useState(newValue);
  const [flipper, setFlipper] = useState(newValue);

  useEffect(() => {
    setTop(newValue);
    setStatus("top");

    setTimeout(() => {
      setFlipper(newValue);
      setStatus("bot");

      setTimeout(() => {
        setBottom(newValue);
      }, 500);
    }, 250);
  }, [value]);

  return (
    <div>
      <div className="card w-[70px] h-[70px] sm:w-28 sm:h-28 text-soft-red relative">
        <div className="topSide z-10">{top}</div>
        <div className={`flipper ${status} z-20`}>{flipper}</div>
        <div className="botSide bg-dark-desaturated-blue shadow-[0_6px_0_rgb(25,26,36)] sm:shadow-[0_9px_0_rgb(25,26,36)]">
          {bottom}
        </div>
      </div>
      <h3 className="uppercase text-[10px] tracking-wider mt-3 sm:mt-5 sm:text-sm sm:tracking-widest">
        {name}
      </h3>
    </div>
  );
}
