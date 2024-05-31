<script lang="ts">
	let {
		title,
		snippet,
		image,
		link
	}: { title: string; snippet: string; image: string; link: string } = $props();
</script>

<div class="usp flex flex-col justify-between gap-5">
	<div class="flex flex-col gap-3">
		<img class="h-14 w-fit" src={image} alt={title} />
		<p class="font-display text-3xl font-semibold text-[#0C2D56]">{title}</p>
		<p class="font-body font-medium text-black">
			{snippet}
		</p>
	</div>
	<div>
		<a
			class="justify-items-end self-start border-b border-black py-3 font-body font-bold duration-300 ease-in-out hover:border-[#80A1F8] hover:text-[#80A1F8]"
			href={link}>Find out more</a
		>
	</div>
</div>
