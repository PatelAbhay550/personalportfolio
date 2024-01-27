import First from "./components/First";
import Forth from "./components/Forth";
import MouseFollower from "./components/MouseFollower";
import Second from "./components/Second";
import Third from "./components/Third";

export default function Home() {
  return (
    <>
      <div className="mf-container">
        <MouseFollower />
        <First />
        <Second />
        <Third />
        <Forth />
      </div>
    </>
  );
}
