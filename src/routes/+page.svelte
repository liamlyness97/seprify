<script>
	import Awards from '$lib/components/Awards.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Markets from '$lib/components/Markets.svelte';
	import News from '$lib/components/News.svelte';
	import Strap from '$lib/components/Strap.svelte';
	import Usp from '$lib/components/Usp.svelte';
</script>

<Hero />

<Usp />

<Awards />

<Strap />

<News />

<Markets />

<footer
	class="mt-5 flex h-[500px] w-full justify-between rounded-lg bg-cover bg-center bg-no-repeat px-20 py-14 bg-blend-multiply"
	style="background-image: url('/footer-bg.png'); background-color: rgba(22, 20, 54, 0.7)"
>
	<div class="flex flex-col justify-between">
		<div class="flex flex-col gap-8">
			<img class="h-12 w-fit" src="/seprify.png" alt="Seprify" />
			<p class="font-body text-lg text-white">info@impossiblematerials.com<br />+44 6546 5465654</p>
			<p class="font-body text-lg text-white">
				Route de l’Ancienne Papeterie 106<br />1723 Marly, Switzerland
			</p>
		</div>
		<div class="font-body flex gap-8 text-sm text-white">
			<p>Terms of use</p>
			<p>Privacy</p>
		</div>
	</div>
	<div class="flex flex-col justify-between">
		<div class="flex flex-col gap-8 text-right text-[#7EA1F8]">
			<p class="font-display text-3xl font-medium">
				Contribute to our mission of<br />creating a healthier world
			</p>
			<p class="font-body text-lg">Functional ingredients produced from renewable resources</p>
		</div>
		<div class="font-body flex justify-end gap-8 text-sm text-white">
			<p>Site by Alt</p>
			<p>© 2023 Seprify</p>
		</div>
	</div>
</footer>
