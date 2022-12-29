import { c as create_ssr_component, b as subscribe, j as add_attribute, l as each, e as escape } from "../../../chunks/index.js";
import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";
import { r as readable } from "../../../chunks/index2.js";
import { Observer, reactive } from "@reactivedata/reactive";
function svelteSyncedStore(syncedObject) {
  var set;
  var observer = new Observer(function() {
    if (set) {
      set(store2);
    }
  });
  var store2 = reactive(syncedObject, observer);
  var readableStore = readable(store2, function(newSet) {
    set = newSet;
    return function() {
      set = void 0;
    };
  });
  return {
    subscribe: readableStore.subscribe,
    set: function set2() {
    }
  };
}
const store = syncedStore({ todos: [] });
const svelteStore = svelteSyncedStore(store);
const doc = getYjsDoc(store);
new WebrtcProvider("syncedstore-todos", doc);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $svelteStore, $$unsubscribe_svelteStore;
  $$unsubscribe_svelteStore = subscribe(svelteStore, (value) => $svelteStore = value);
  let newTodo = "";
  $$unsubscribe_svelteStore();
  return `<main id="${"app"}"><h1>Todo Svelte</h1>
    <form><input class="${"new-todo"}" autocomplete="${"off"}" placeholder="${"What needs to be done?"}"${add_attribute("value", newTodo, 0)}></form>
    <ul class="${"todo-list"}">${each($svelteStore.todos, (todo) => {
    return `<li class="${"todo"}"><div><label><input class="${"toggle"}" type="${"checkbox"}"${add_attribute("checked", todo.completed, 1)}>
                            ${escape(todo.title)}</label>
                        <button class="${"destroy"}">Delete</button></div>
                </li>`;
  })}</ul></main>`;
});
export {
  Page as default
};
