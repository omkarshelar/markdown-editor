<script lang="ts">
  import { markdownText, htmlOutput } from "./store";
</script>

<div class="main-area">
  <textarea
    name="markdown-edior"
    id=""
    placeholder="Type some markdown code here..."
    bind:value={$markdownText}
    class="markdown-editor"
  />
  {#if $htmlOutput}
    <div class="output">{@html $htmlOutput}</div>
  {:else}
    <div class="output">Type something in the editor...</div>
  {/if}
</div>

<style>
  .main-area {
    padding: 1em;
    margin: 0 auto;
    display: flex;
  }

  .markdown-editor {
    width: 50%;
    height: 80vh;
  }
  .output {
    border: 1px solid #999;
    width: 50%;
    height: calc(80vh - 1em - 2px);
    overflow: auto;
    padding: 0.5em;
    margin-left: 0.25em;
  }
  textarea {
    border: 1px solid black;
  }
</style>
