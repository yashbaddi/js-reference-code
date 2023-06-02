<script>
  //Section 4
  let count = 0;

  const incrementCount = () => {
    count++;
  };

  $: console.log(`This will react to change in ${count}`);
  $: {
    //You can use curly braces too....
    console.log(`the count is ${count}`);
    console.log(`double the count is ${count * 2}`);
  }
</script>

<main>s</main>

<style>
</style>
