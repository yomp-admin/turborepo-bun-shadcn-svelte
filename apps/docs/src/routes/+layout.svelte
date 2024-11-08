<script lang="ts">
	import '@repo/ui/globals.css';
	let { children } = $props();
</script>

<div class="container h-screen pt-4">
	{@render children()}
</div>
