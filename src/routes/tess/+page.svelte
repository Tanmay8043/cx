<script>
    import { svelteStore } from "$lib/stores.js";

    let newTodo = "";

    const addTodo = () => {
      const value = newTodo && newTodo.trim();

      if (!value) {
        return;
      }
      $svelteStore.todos.push({
        title: value,
        completed: false
      });
      newTodo = "";
    };

    const removeTodo = todo => {
      $svelteStore.todos.splice($svelteStore.todos.indexOf(todo), 1);
    };
</script>

<main id="app">
    <h1>Todo Svelte</h1>
    <form on:submit|preventDefault={addTodo}>
        <input
                class="new-todo"
                autocomplete="off"
                placeholder="What needs to be done?"
                bind:value={newTodo}
            />
        </form>
    <ul class="todo-list">
        {#each $svelteStore.todos as todo}
                <li class="todo">
                    <div>
                        <label>
                            <input class="toggle" type="checkbox" bind:checked={todo.completed} />
                            { todo.title }
                        </label>
                        <button class="destroy" on:click={() => removeTodo(todo)}>Delete</button>
                    </div>
                </li>
            {/each}
        </ul>
</main>
