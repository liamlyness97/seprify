<script>
	import { slide } from 'svelte/transition';
	import '../app.css';
	import 'iconify-icon';
	let { children } = $props();

	let scrollPos = $state();
	let scrolled = $state(false);

	$effect(() => {
		if (scrollPos > 200) {
			scrolled = true;
		} else {
			scrolled = false;
		}
	});
</script>

<svelte:window bind:scrollY={scrollPos} />

<main class="relative overflow-hidden p-3 md:p-5">
	{#if scrolled}
		<div
			class="fixed left-0 top-0 z-50 hidden w-full justify-between bg-[#0C2D56] px-20 py-5 drop-shadow-md md:flex"
			transition:slide={{ axis: 'y', duration: 200 }}
		>
			<div>
				<a href="/">
					<img class="" src="/seprify.png" alt="Seprify" />
				</a>
			</div>
			<nav class="flex items-center gap-10 font-body font-medium text-white">
				<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="About">About</a>
				<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="Technology"
					>Technology</a
				>
				<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="Products">Products</a>
				<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="News">News</a>
				<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="Careers">Careers</a>
				<a
					class="hover rounded-lg border border-[#80A1F8] bg-[#0C2D56] px-6 py-3 text-sm font-bold text-[#80A1F8] duration-500 ease-in-out hover:bg-[#80A1F8] hover:text-[#0C2D56]"
					href="/">Get in touch</a
				>
			</nav>
		</div>
	{/if}
	{@render children()}
</main>

<style></style>
