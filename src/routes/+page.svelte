<script>
	import Awards from '$lib/components/Awards.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import News from '$lib/components/News.svelte';
	import Strap from '$lib/components/Strap.svelte';
	import Usp from '$lib/components/Usp.svelte';
	import Outline from '$lib/components/buttons/Outline.svelte';
</script>

<Hero />

<Usp />

<Awards />

<Strap />

<News />

<div class="-mt-64 w-full rounded-lg bg-[#0C2D56] pb-32 pt-96">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto w-1/4 text-center">
			<p class="font-display mb-3 text-4xl font-semibold text-white">Our Markets</p>
			<p class="font-body text-white">
				Functional ingredients produced from renewable resources. View All
			</p>
		</div>
		<div class="mt-20 grid w-full grid-cols-4 grid-rows-2 gap-20">
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/food.png" alt="" />
				<p class="font-display text-3xl font-semibold text-white">Food</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/feed.png" alt="" />
				<p class="font-display text-3xl font-semibold text-white">Feed</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/cosmetics.png" alt="Cosmetics" />
				<p class="font-display text-3xl font-semibold text-white">Cosmetics</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/personal-care.png" alt="Personal Care" />
				<p class="font-display text-3xl font-semibold text-white">Personal Care</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/pharma.png" alt="Pharma" />
				<p class="font-display text-3xl font-semibold text-white">Pharma</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/personal-care.png" alt="Coatings" />
				<p class="font-display text-3xl font-semibold text-white">Coatings</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/inks.png" alt="Inks" />
				<p class="font-display text-3xl font-semibold text-white">Inks</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
			<div class="flex flex-col gap-3">
				<img class="h-12 w-fit" src="/markets/paints.png" alt="Paints" />
				<p class="font-display text-3xl font-semibold text-white">Paints</p>
				<p class="text-lg text-white">Our products are bio degradable, produced responsibly.</p>
			</div>
		</div>
		<div class="mt-20 flex justify-center">
			<Outline text="Find out more" url="/" />
		</div>
	</div>
</div>
