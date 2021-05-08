<script lang="ts">
  import Main from "./Main.svelte";
  import Head from "./Head.svelte";
  export let name: string;
</script>

<header>
  <Head {name} />
</header>

<main>
  <Main />
</main>
