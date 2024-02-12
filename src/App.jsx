import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="midudev">
        <h1>Miguel Ángel Durán</h1>
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="pheralb">
        <h1>Pablo Hernandez</h1>
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="elonmusk">
        <h1>Elon Musk</h1>
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="vxnder">
        <h1>Vanderhart</h1>
      </TwitterFollowCard>
    </section>
  );
}
