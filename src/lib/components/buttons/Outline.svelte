<script lang="ts">
	let { url, text }: { url: string; text: string } = $props();
</script>

<a
	class="inline-block self-start rounded-lg border border-white px-8 py-4 font-body text-sm font-semibold text-white duration-500 ease-in-out hover:bg-white hover:text-[#0C2D56]"
	href={url}>{text}</a
>
