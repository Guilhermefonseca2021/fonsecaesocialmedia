import Header from "./components/header";
import "./App.css";
import AboutMe from "./components/aboutme";
import Projetos from "./components/projetos";
import Contato from "./components/contato";

export default function App() {
  return (
    <div className="">
      <Header />
      <div className="py-12 flex flex-col items-center justify-centermin-w-full flex flex-col items-center justify-center gap-8">
        <AboutMe />
        <Projetos />
      </div>
      <Contato />
    </div>
  );
}
