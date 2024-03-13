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
      <Title>loading</Title>
      <h1>加载中...</h1>
      
    </main>
  );
}
