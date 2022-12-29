import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1glu1jc.svelte-1glu1jc{margin:0;padding:0}.svelte-1glu1jc.svelte-1glu1jc::-webkit-scrollbar{height:0;overflow:visible;width:10px;border-left:1px solid rgb(229, 229, 229)}.svelte-1glu1jc.svelte-1glu1jc::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, .2);background-clip:padding-box;min-height:28px;padding:100px 0 0;box-shadow:inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);border-width:1px 1px 1px 6px}.svelte-1glu1jc.svelte-1glu1jc::-webkit-scrollbar-button{height:0;width:0}.svelte-1glu1jc.svelte-1glu1jc::-webkit-scrollbar-track{background-clip:padding-box;border:solid transparent;border-width:0 0 0 4px}.svelte-1glu1jc.svelte-1glu1jc::-webkit-scrollbar-corner{background:transparent}.overlay.svelte-1glu1jc.svelte-1glu1jc{position:absolute;top:0;left:0;right:0;bottom:0;background:black;z-index:1}.btn-select-file.svelte-1glu1jc.svelte-1glu1jc{position:absolute;z-index:2;left:40%;top:40%;width:100px;height:100px;-webkit-user-select:none;border-radius:50%;text-shadow:2px 2px white;border:1px solid #1B1B1B;background-color:#D5D8D8;cursor:pointer;background-image:url(https://www.webrtc-experiment.com/images/btn-select-file.png);outline:none}.btn-select-file.svelte-1glu1jc.svelte-1glu1jc:hover{background-color:#BBBBBB}.btn-select-file.svelte-1glu1jc.svelte-1glu1jc:active{background-color:#7F7B7B}iframe.svelte-1glu1jc.svelte-1glu1jc{position:absolute;width:80%;height:96%;top:87px;left:0;right:20;bottom:0;border:0;outline:0;z-index:5;display:none}#logs.svelte-1glu1jc.svelte-1glu1jc{position:absolute;background:white;border-left:1px solid black;width:20%;top:87px;right:0;bottom:0;z-index:6;font-size:medium;overflow:auto;height:100%;border-top-left-radius:5px;font-size:22px}#logs.svelte-1glu1jc p.svelte-1glu1jc{padding:2px 4px;border-bottom:1px solid black}header.svelte-1glu1jc.svelte-1glu1jc{position:absolute;text-align:center;width:100%;height:61px;top:0;right:0;left:0;z-index:7;padding-top:8px;background:#EFEBEB;border-bottom:1px solid white}#number-of-users.svelte-1glu1jc.svelte-1glu1jc{position:absolute;right:60px;top:16px;width:36px;height:30px;-webkit-user-select:none;border-radius:5px;border:1px solid #FFFFFF;background-color:#E83930;z-index:8;text-align:center;padding-top:6px;color:white}#room-id.svelte-1glu1jc.svelte-1glu1jc{outline:none;border:1px solid black;padding:1px 3px;font-size:100%;background:rgba(255, 255, 255, 0.28);border-top-left-radius:5px;border-bottom-left-radius:5px}#join-room.svelte-1glu1jc.svelte-1glu1jc{border:1px solid black;background:rgba(255, 255, 255, 0.28);padding:1px 3px;border-left:0;font-size:100%;border-top-right-radius:5px;border-bottom-right-radius:5px}@media all and (max-width: 500px){#logs.svelte-1glu1jc.svelte-1glu1jc{position:fixed;bottom:0;left:0;width:100%;top:auto;height:40%;border-left:0;border-top:1px solid black;font-size:18px}.btn-select-file.svelte-1glu1jc.svelte-1glu1jc{top:20%;left:40%}#room-id.svelte-1glu1jc.svelte-1glu1jc{width:40%}.ribbon.svelte-1glu1jc.svelte-1glu1jc{height:150%;width:80%}.ribbon.svelte-1glu1jc h1.svelte-1glu1jc{font-size:20px!important}#number-of-users.svelte-1glu1jc.svelte-1glu1jc{right:50px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1w4g46z_START --><script src="${"https://muazkhan.com:9001/dist/RTCMultiConnection.min.js"}" class="${"svelte-1glu1jc"}"><\/script><script src="${"https://webrtc.github.io/adapter/adapter-latest.js"}" class="${"svelte-1glu1jc"}"><\/script><script src="${"https://cdn.webrtc-experiment.com/FileBufferReader.js"}" class="${"svelte-1glu1jc"}"><\/script><script src="${"https://muazkhan.com:9001/socket.io/socket.io.js"}" class="${"svelte-1glu1jc"}"><\/script><!-- HEAD_svelte-1w4g46z_END -->`, ""}




<div class="${"overlay svelte-1glu1jc"}"></div>
    <button class="${"btn-select-file svelte-1glu1jc"}"></button>

    <iframe class="${"svelte-1glu1jc"}"></iframe>

    <header class="${"svelte-1glu1jc"}"><div class="${"ribbon svelte-1glu1jc"}"><div class="${"ribbon-stitches-top svelte-1glu1jc"}"></div><strong class="${"ribbon-content svelte-1glu1jc"}"><h1 class="${"svelte-1glu1jc"}"><input type="${"text"}" id="${"room-id"}" placeholder="${"room-id"}" class="${"svelte-1glu1jc"}"><button id="${"join-room"}" class="${"svelte-1glu1jc"}">Join</button></h1></strong><div class="${"ribbon-stitches-bottom svelte-1glu1jc"}"></div></div></header>

    <div id="${"number-of-users"}" title="${"Number of online users."}" class="${"svelte-1glu1jc"}">0</div>
    <div id="${"logs"}" class="${"svelte-1glu1jc"}"><p class="${"svelte-1glu1jc"}">Peer-to-Peer (private) file sharing.
      </p>
      <p class="${"svelte-1glu1jc"}">You can share/receive files from any platform/device e.g. destkop operating systems, Android, iOS etc.
      </p>
      <p class="${"svelte-1glu1jc"}">Create or join a room &amp; select file using &quot;+&quot; button.
      </p>
    </div>`;
});
export {
  Page as default
};
