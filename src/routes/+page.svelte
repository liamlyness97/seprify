<script>
	import Hero from '$lib/components/Hero.svelte';
	import Usp from '$lib/components/Usp.svelte';
</script>

<Hero />

<Usp />

<div class="w-full py-32">
	<div class="relative mx-auto grid max-w-5xl grid-cols-4 grid-rows-3 gap-10">
		<div class="col-span-2">
			<p class="font-display mb-5 text-pretty text-3xl font-semibold tracking-wide text-[#7FA1F8]">
				Play a role in our efforts to improve the health of our planet
			</p>
			<p class="font-body text-lg font-semibold">
				Functional ingredients produced from renewable resources
			</p>
		</div>
		<div class="relative col-span-2 row-span-3">
			<div
				class="relative z-30 flex aspect-square w-[85%] items-center justify-center rounded-full bg-[#0C2D56] text-white"
			>
				<div class="w-2/3">
					<p class="font-display mb-5 text-2xl font-semibold">Thinking of<br />the future</p>
					<p class="font-body text-sm leading-loose">
						We envision a future where products are created from functional ingredients produced
						from renewable resources using sustainable and environmentally responsible processes.
					</p>
				</div>
			</div>
			<div
				class="absolute right-0 top-[30%] z-20 aspect-square w-[75%] rounded-full bg-[#39375C] opacity-30"
			></div>
			<div
				class="absolute bottom-0 left-[25%] z-30 aspect-square w-[40%] rounded-full bg-[#6B91D8] opacity-30"
			></div>
			<div
				class="absolute -left-[25%] top-[30%] z-40 aspect-square w-[50%] rounded-full bg-[#5490BC] opacity-30"
			></div>
		</div>
		<div class="col-span-2 row-span-2">
			<div
				class="relative z-40 ml-auto flex aspect-square w-[85%] items-center justify-center rounded-full bg-[#7FA1F8] text-[#0C2D56]"
			>
				<div class="w-2/3">
					<p class="font-display mb-5 text-2xl font-semibold">Enriching<br />the planet</p>
					<p class="font-body text-sm font-medium leading-loose">
						We sell plant-based materials to enrich and promote the circular bioeconomy and
						contribute to making the planet a healthier and safer place for generations to come.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
