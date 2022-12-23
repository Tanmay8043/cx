<script>
    import { Button, Modal } from 'sveltestrap/src';
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';

    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
  </script>
  
  <Button class="dark:bg-blue-200 dark:border-blue-200" color="primary" on:click={toggle}>Hello World!</Button>
  <Modal body {isOpen} {toggle} header="Hello World!">
    <p>There's a song that we're singing. Come on</p>
    <img
      src="https://i.ytimg.com/vi/NUJIRujygvY/hqdefault.jpg"
      alt="Come on Get Happy"
      class="img-fluid"
    />
  </Modal>

    <h1 class="text-3xl font-bold underline dark:text-yellow-300 ">
      Hello world!
    </h1>

    <ThemeSwitch/>


