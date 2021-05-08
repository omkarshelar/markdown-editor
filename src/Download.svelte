<script lang="ts">
  import { markdownText, htmlOutput } from "./store";

  function downloadMarkdown() {
    console.log($markdownText);
    const markdownBlob: Blob = new Blob([$markdownText], {
      type: "text/markdown",
    });
    const blobUrl: string = URL.createObjectURL(markdownBlob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "md-file.md";
    link.click();
    link.remove();
  }

  function downloadHtml() {
    console.log($htmlOutput);
    const htmlBlob: Blob = new Blob([$htmlOutput], {
      type: "text/html",
    });
    const blobUrl: string = URL.createObjectURL(htmlBlob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "html-file.html";
    link.click();
    link.remove();
  }
</script>

<div>
  <button on:click={downloadMarkdown} class="btn">Download Markdown</button>
  <button on:click={downloadHtml} class="btn">Download HTML</button>
</div>

<style>
  .btn {
    margin: 0;
  }
</style>
