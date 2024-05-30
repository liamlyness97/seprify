<script lang="ts">
	let { url, text }: { url: string; text: string } = $props();
</script>

<a
	class="font-body inline-block self-start rounded-lg border border-white px-8 py-4 text-sm font-semibold text-white"
	href={url}>{text}</a
>
