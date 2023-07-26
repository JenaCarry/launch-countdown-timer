interface CounterProps {
  name: string;
  value: number;
}

export function Counter({ name, value }: CounterProps) {
  return (
    <div>
      <div className="card w-16 h-16 text-soft-red relative">
        <div className="topSide z-10">{value}</div>
        <div className="flipper">{value}</div>
        <div className="botSide bg-dark-desaturated-blue shadow-[0_6px_0_rgb(25,26,36)]">
          {value}
        </div>
      </div>
      <h3 className="uppercase text-[10px] tracking-wider mt-3">{name}</h3>
    </div>
  );
}
