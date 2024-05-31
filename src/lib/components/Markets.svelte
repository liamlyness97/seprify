<script lang="ts">
	import { animate, inView, stagger } from 'motion';
	import Outline from '$lib/components/buttons/Outline.svelte';

	$effect(() => {
		inView('.marketItems', () => {
			animate(
				'.market',
				{ opacity: [0, 1] },
				{ delay: stagger(0.1, { start: 0.5 }), duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
			);
		});
	});
</script>

<div
	class="relative z-10 mt-5 w-full overflow-hidden rounded-lg bg-[#0C2D56] px-10 py-20 md:-mt-64 md:pb-32 md:pt-96"
>
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto w-full text-center md:w-1/4">
			<p class="mb-3 font-display text-4xl font-semibold text-white">Our Markets</p>
			<p class="font-body text-white">
				Functional ingredients produced from renewable resources. View All
			</p>
		</div>
		<div
			class="marketItems relative z-40 mt-14 grid w-full grid-cols-2 grid-rows-2 gap-8 md:mt-20 md:grid-cols-4 md:gap-20"
		>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/food.png" alt="" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Food</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/feed.png" alt="" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Feed</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/cosmetics.png" alt="Cosmetics" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Cosmetics</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/personal-care.png" alt="Personal Care" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Personal Care</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/pharma.png" alt="Pharma" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Pharma</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/personal-care.png" alt="Coatings" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Coatings</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/inks.png" alt="Inks" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Inks</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="market flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/paints.png" alt="Paints" />
				<p class="font-display text-2xl font-semibold text-white md:text-3xl">Paints</p>
				<p class="text-white md:text-lg">Our products are bio degradable, produced responsibly.</p>
			</div>
		</div>
		<div class="relative z-40 mt-20 flex justify-center">
			<Outline text="Find out more" url="/" />
		</div>
	</div>
	<div
		class="absolute -left-[100vh] bottom-[25vh] z-30 h-[125vh] w-[125vh] rounded-full bg-[#6B91D8] opacity-5 md:-bottom-3/4 md:-left-1/3 md:h-[200vh] md:w-[200vh]"
	></div>
	<div
		class="absolute -right-[20vh] top-1/4 z-30 hidden h-[50vh] w-[50vh] rounded-full bg-[#6B91D8] opacity-5 md:block"
	></div>
</div>
