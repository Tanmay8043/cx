import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table class="${"display"}"><tr><td class="${"title"}">Status:</td>
    <td class="${"title"}">Messages:</td></tr>
  <tr><td><div id="${"receiver-id"}" style="${"font-weight: bold;"}" title="${"Copy this ID to the input on send.html."}">ID:
      </div></td>
    <td><input type="${"text"}" id="${"sendMessageBox"}" placeholder="${"Enter a message..."}" autofocus="${"true"}">
      <button type="${"button"}" id="${"sendButton"}">Send</button>
      <button type="${"button"}" id="${"clearMsgsButton"}">Clear Msgs (Local)</button></td></tr>
  <tr><td><div id="${"status"}" class="${"status"}"></div></td>
    <td><div class="${"message"}" id="${"message"}"></div></td></tr>
  <tr><td class="${"display-box standby"}" id="${"standby"}"><h2>Standby</h2></td>
    <td class="${"display-box hidden"}" id="${"go"}"><h2>Go</h2></td></tr>
  <tr><td class="${"display-box hidden"}" id="${"fade"}"><h2>Fade</h2></td>
    <td class="${"display-box hidden"}" id="${"off"}"><h2>All Off</h2></td></tr></table>`;
});
export {
  Page as default
};
