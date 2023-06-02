<script>
  //Section 3
  let count = 0;
  function incrementCount() {
    count++;
  }

  //Change State expects assignment!!!
  //Object Modification dosent re-render
  let arr = [0, 1, 2, 3];
  arr.push(4); //This wont re-render
  arr = [...arr, 4]; //This works
  //or use
  arr = arr;
</script>

<main>
  {count} <button on:click={incrementCount}>+1</button>
</main>

<style>
</style>
