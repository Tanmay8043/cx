import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1se8vhu_START --><script src="${"https://www.WebRTC-Experiment.com/RecordRTC.js"}"><\/script><script src="${"https://cdnjs.cloudflare.com/ajax/libs/RecordRTC/5.6.2/RecordRTC.js"}"><\/script><script src="${"node_modules/recordrtc/RecordRTC.js"}"><\/script><!-- HEAD_svelte-1se8vhu_END -->`, ""}



<p>Record your video</p>
<video class="${"w-80 h-80"}" autoplay playsinline muted></video>
<button class="${"border-2 m-2 px-2 py-1 rounded-lg"}">Click to RECORD</button>

<button class="${"border-2 m-2 px-2 py-1 rounded-lg"}">Stop</button>


<hr>`;
});
export {
  Page as default
};
