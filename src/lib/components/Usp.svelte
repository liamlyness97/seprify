<script lang="ts">
	import UspItem from './usps/UspItem.svelte';
	import { usps } from '$lib/components/usps/uspData';
</script>

<div class="relative mt-5 w-full overflow-hidden rounded-lg bg-[#E7EEF7] px-10 py-20 md:py-36">
	<div
		class="absolute -right-[150px] -top-[270px] z-10 h-[650px] w-[650px] rounded-full bg-white opacity-40"
	></div>
	<div class="relative z-20 mx-auto max-w-7xl">
		<p
			class="w-full text-balance font-display text-3xl font-semibold text-[#0C2D56] md:w-1/2 md:text-4xl"
		>
			Changing the way we use the most abundant biopolymer on earth
		</p>
		<p class="mt-3 font-body text-lg font-semibold">
			Turning cellulose into functional, high performance ingredients
		</p>
		<div class="mt-16 grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-36">
			{#each usps as usp, idx (idx)}
				<UspItem title={usp.title} snippet={usp.snippet} image={usp.image} link={usp.link} />
			{/each}
		</div>
	</div>
</div>
