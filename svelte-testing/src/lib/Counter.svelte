<script>
  import Reactive from "./Reactive.svelte";
  import { count } from "../stores";
  let rend = 0;
  const increment = () => {
    count.update(($count) => ($count += 1));
    console.log("Dollar Count inside incr", $count);
    console.log(rend);
  };
  console.log("Dollar Count", $count);
  count.subscribe((count) => {});

  $: console.log("Reactive Dollar Count", $count);
</script>

<button on:click={increment}>
  {(rend = rend + 1)}
</button>
<Reactive />
