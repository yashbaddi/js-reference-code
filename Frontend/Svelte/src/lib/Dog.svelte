<script>
  //Section 1
  import Props from "./Props.svelte";
  import Slots from "./Slots.svelte";

  export let name;
  $: console.log("the dog is called");
</script>

<main>
  <Slots>This is the parent level</Slots>
  <Props text={"Hey this is yash"} />
  <h1>The Dog Name is {name}</h1>
</main>

<style>
  h1 {
    color: purple;
  }
</style>
