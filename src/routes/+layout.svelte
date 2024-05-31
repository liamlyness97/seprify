<script>
	import '../app.css';
	import 'iconify-icon';
	let { children } = $props();
</script>

<main class="overflow-hidden p-3 md:p-5">
	{@render children()}
</main>

<style></style>
