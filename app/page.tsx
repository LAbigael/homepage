import "../styles/globals.css";
import Hello from "components/Hello";
import Profile from "components/Profile";
import Bio from "components/Bio";
import ILove from "components/ILove";
import Work from "components/Work";
import Projects from "components/Projects";
import Stack from "components/Stack";
import Social from "components/Social";

import ToggleLang from "components/LangToggle";


export default function Home() {
  return (
    <main
      className={
        "w-full h-screen text-rosePineDawn-text bg-rosePineDawn-base px-4"
      }
    >
      <ToggleLang />
      <Hello />
      <Profile />
      <Work />
      <Bio />
      <Projects />
      <Stack />
      <ILove />
      <Social />
      <footer className="text-center mt-8 text-sm my-2 bg-rosePineDawn-base">
        © 2023 Abigaêl Laldji. Tout droit réservé.
      </footer>
    </main>
  );
}
