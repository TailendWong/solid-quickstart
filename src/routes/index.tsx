import { Title } from "solid-start";
import { createSignal, onMount } from 'solid-js';
import Counter from "~/components/Counter";

export default function Home() {
  const [navigate, setNavigate] = createSignal();
 
  onMount(() => {
    setNavigate(() => {
      window.location.href = '/qatest.html';
    });
  });
  
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
