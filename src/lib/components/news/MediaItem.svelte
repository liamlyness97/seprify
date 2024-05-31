<script lang="ts">
	let { image } = $props();
</script>

<div
	style="background-image: url({image});"
	class="newsItem relative aspect-video w-full rounded-lg bg-cover bg-top bg-no-repeat bg-blend-multiply duration-1000 ease-out"
>
	<div
		class="absolute left-10 top-0 rounded-b-lg bg-[#7EA1F8] px-5 py-3 font-body text-sm font-semibold text-[#0C2D56]"
	>
		<p>Media</p>
	</div>
</div>

<style>
	.newsItem {
		background-color: rgba(0, 0, 0, 0.3);
		background-size: 100%;
	}
	.newsItem:hover {
		background-color: rgba(0, 0, 0, 0.6);
		background-size: 105%;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.newsItem {
			background-size: cover;
		}
	}
</style>
