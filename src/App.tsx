import { useEffect, useRef } from "react";

function Clock({
  name,
  tz,
  github,
}: {
  name: string;
  tz: string;
  github?: string;
}) {
  const timeContainer = useRef<HTMLParagraphElement>(null);

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
    <div className="aspect-square border-black border-4 rounded-full flex flex-col justify-center align-center text-3xl relative">
      <p className="text-center font-mono" ref={timeContainer}></p>
      <p className="text-center text-2xl mt-2">{name}</p>
      {github && (
        <img
          className="absolute rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
          src={`https://github.com/${github}.png`}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <div className="grid h-screen w-full grid-cols-[200px] lg:grid-cols-[200px,200px,200px] place-content-center gap-16">
      <Clock name="Ava" tz="America/New_York" github="ava-silver" />
      <Clock name="Vivi" tz="America/New_York" github="viv-codes" />
      <Clock name="Maxine" tz="America/New_York" />
      <Clock name="Mia" tz="America/New_York" github="nkizz" />
      <Clock name="Philo" tz="America/New_York" github="rpg4231" />
      <Clock name="Tris" tz="America/New_York" github="an-empty-string" />
      <Clock name="Liz" tz="America/Los_Angeles" github="selectric401" />
      <Clock name="Charlotte" tz="America/Los_Angeles" github="q3w3e3" />
      <Clock name="Wiggles" tz="America/Los_Angeles" />
    </div>
  );
}

export default App;
