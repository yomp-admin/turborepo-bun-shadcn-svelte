<script lang="ts">
	import { page } from '$app/stores';
</script>

<div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
	<h1>{$page.status}: {$page.error?.message ?? 'An error occurred'}</h1>
	<h2>Error Page</h2>
</div>
