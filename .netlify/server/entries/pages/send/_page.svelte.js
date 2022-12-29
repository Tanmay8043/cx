import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Peer-to-Peer Cue System --- Sender</h1>

<table class="${"control"}"><tr><td class="${"title"}">Status:</td>
    <td class="${"title"}">Messages:</td></tr>
  <tr><td><span style="${"font-weight: bold"}">ID: </span>
      <input type="${"text"}" id="${"receiver-id"}" title="${"Input the ID from receive.html"}">
      <button id="${"connect-button"}">Connect</button></td>
    <td><input type="${"text"}" id="${"sendMessageBox"}" placeholder="${"Enter a message..."}" autofocus="${"true"}">
      <button type="${"button"}" id="${"sendButton"}">Send</button>
      <button type="${"button"}" id="${"clearMsgsButton"}">Clear Msgs (Local)</button></td></tr>
  <tr><td><div id="${"status"}" class="${"status"}"></div></td>
    <td><div class="${"message"}" id="${"message"}"></div></td></tr>
  <tr><td><button type="${"button"}" class="${"control-button"}" id="${"resetButton"}">Reset</button></td>
    <td><button type="${"button"}" class="${"control-button"}" id="${"goButton"}">Go</button></td></tr>
  <tr><td><button type="${"button"}" class="${"control-button"}" id="${"fadeButton"}">Fade</button></td>
    <td><button type="${"button"}" class="${"control-button"}" id="${"offButton"}">Off</button></td></tr></table>`;
});
export {
  Page as default
};
