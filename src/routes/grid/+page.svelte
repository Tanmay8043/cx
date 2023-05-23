<script>
  import { draggable } from '@neodrag/svelte';
</script>

<div use:draggable={{ axis: 'x', grid: [10, 10] }}>Hello</div>