<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let { mobileNav = $bindable() } = $props();
</script>

{#if mobileNav}
	<div
		class="fixed left-0 top-0 z-50 box-border flex h-dvh w-full flex-col justify-between overflow-hidden bg-[#0C2D56] bg-opacity-95 p-10"
		transition:fade={{ duration: 300, easing: quadInOut }}
	>
		<div class="flex items-center justify-between">
			<img class="h-10" src="/seprify.png" alt="Seprify" />
			<button class="text-4xl text-white" onclick={() => (mobileNav = false)}
				><iconify-icon icon="ic:twotone-close"></iconify-icon></button
			>
		</div>

		<nav class="flex flex-col gap-5 font-body text-5xl font-semibold text-white">
			<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="About">About</a>
			<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="Technology"
				>Technology</a
			>
			<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="Products">Products</a>
			<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="News">News</a>
			<a class="duration-300 ease-out hover:text-[#80A1F8]" href="/" title="Careers">Careers</a>
		</nav>
		<div class="flex flex-col gap-5">
			<p class="font-body text-white md:text-lg">
				info@impossiblematerials.com<br />+44 6546 5465654
			</p>
			<p class="font-body text-white md:text-lg">
				Route de l’Ancienne Papeterie 106<br />1723 Marly, Switzerland
			</p>
			<a
				class="hover rounded-lg bg-[#80A1F8] px-6 py-3 text-sm font-bold text-[#0C2D56] duration-500 ease-in-out hover:bg-[#0C2D56] hover:text-[#80A1F8]"
				href="/">Get in touch</a
			>
		</div>
	</div>
{/if}
