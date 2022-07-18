import { useEffect, useRef } from "react";

function Clock({
  name,
  tz,
  twitter,
}: {
  name: string;
  tz: string;
  twitter: string;
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
        <img
          className="absolute rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
          src={`https://unavatar.io/twitter/${twitter}`}
        />
      </div>
      <p className="text-center text-2xl mt-2">{name}</p>
    </div>
  );
}

function App() {
  return (
    <div className="m-[15%]">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        <Clock
          name="Quartz"
          tz="America/Los_Angeles"
          twitter="piezo_electric"
        />
        <Clock name="Ava" tz="America/Los_Angeles" twitter="avaaa_42" />
        <Clock name="Kay" tz="America/New_York" twitter="ffoorrggg" />
        <Clock name="Ula" tz="America/New_York" twitter="oh_jeez_bees" />
        <Clock name="Aster" tz="Europe/Rome" twitter="Aster_ie" />
      </div>
    </div>
  );
}

export default App;
