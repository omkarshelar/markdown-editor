<script>
  import Download from "./Download.svelte";

  export let name;
</script>

<nav>
  <h1>{name}</h1>
  <div>
    <Download />
  </div>
</nav>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-weight: 200;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
