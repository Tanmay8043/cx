import { c as create_ssr_component, e as escape, j as add_attribute } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let codeid = "";
  let videocurrent;
  let videoEl;
  let youid = "";
  return `<div>you id cam  = ${escape(youid)}
  <br>
  code : <input type="${""}" name="${""}"${add_attribute("value", codeid, 0)}>
  
  <button>connect</button>

  
  <video width="${"400"}" height="${"400"}" autoplay="${"true"}"${add_attribute("this", videoEl, 0)}><track kind="${"captions"}" src="${""}"></video>
  <br>

  
  <video width="${"400"}" height="${"400"}" autoplay="${"true"}"${add_attribute("this", videocurrent, 0)}><track kind="${"captions"}" src="${""}"></video></div>`;
});
export {
  Page as default
};
