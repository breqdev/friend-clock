import { useEffect, useRef } from "react";

function Clock({
  name,
  tz,
  twitter,
}: {
  name: string;
  tz: string;
  twitter?: string;
}) {
  const timeContainer = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeContainer.current) {
        timeContainer.current.innerText = new Date().toLocaleString("en-US", {
          timeZone: tz,
          hour: "numeric",
          minute: "numeric",
          hourCycle: "h23",
        });
      }
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <div className="p-8">
      <div className="aspect-square border-black border-4 rounded-full grid place-items-center text-3xl relative">
        <span className="font-mono" ref={timeContainer}></span>
        {twitter && <img
          className="absolute rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
          src={`https://unavatar.io/twitter/${twitter}`}
        />}
      </div>
      <p className="text-center text-2xl mt-2">{name}</p>
    </div>
  );
}

function App() {
  return (
    <div className="m-[15%]">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        <Clock name="Ava" tz="America/New_York" twitter="avapsilver" />
        <Clock name="Vivi" tz="America/New_York" twitter="vivi_is_tired" />
        <Clock name="Philo" tz="America/New_York" twitter="flaming_spork" />
        <Clock name="Maxine" tz="America/New_York" twitter="prsmaticwolf" />
        <Clock name="Tris" tz="America/New_York" />
        <Clock name="Liz" tz="America/Los_Angeles" twitter="selectric401" />
        <Clock name="Mia" tz="America/New_York" twitter="nkizz11" />
      </div>
    </div>
  );
}

export default App;
