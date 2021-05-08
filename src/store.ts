import { Writable, Readable, writable, derived } from "svelte/store";
import marked from "marked";

export const markdownText: Writable<string> = writable("");
export const htmlOutput: Readable<string> = derived(
  markdownText,
  ($markdownText) => ($markdownText ? marked($markdownText) : "")
);
