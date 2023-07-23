<script context="module">
  //Section 2
  //To Export a specific function instead of default module
  //you need to specify context="module"
  export function changeColor() {}
</script>

<script></script>

<main>
  <button on:click={changeColor}> Hey </button>
</main>

<style>
</style>
