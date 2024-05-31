<script lang="ts">
	let { title, link, date, image }: { title: string; image: string; date: string; link: string } =
		$props();
</script>

<div
	style="background-image: url({image});"
	class="newsItem relative flex h-[500px] w-full flex-col justify-end rounded-lg bg-cover bg-top bg-no-repeat bg-blend-multiply drop-shadow-xl duration-1000 ease-out"
>
	<div
		class="absolute left-10 top-0 rounded-b-lg bg-[#7EA1F8] px-5 py-3 font-body text-sm font-semibold text-[#0C2D56]"
	>
		<p>Insights</p>
	</div>
	<div class="flex w-full flex-col gap-3 p-10 md:w-3/4">
		<p class="font-body text-lg font-medium text-white">{date}</p>
		<p class="font-display text-2xl font-semibold text-white">
			{title}
		</p>
		<a
			class="justify-items-end self-start border-b border-white py-3 font-body font-bold text-white duration-300 ease-in-out hover:border-[#80A1F8] hover:text-[#80A1F8]"
			href={link}>Find out more</a
		>
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
	}

	@media (max-width: 768px) {
		.newsItem {
			background-size: cover;
		}
	}
</style>
