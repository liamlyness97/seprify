<script>
	import { fade } from 'svelte/transition';
	import Nav from './Nav.svelte';
	import Outline from './buttons/Outline.svelte';
	import { quadInOut } from 'svelte/easing';

	let mobileNav = $state(false);
</script>

<div
	class="relative hidden h-[96vh] w-full rounded-lg bg-cover bg-no-repeat bg-blend-multiply md:block"
	style="background-image: url('/hero-bg.jpg'); background-color: rgba(72, 72, 83, 0.7);"
>
	<Nav />
	<div
		class="absolute left-0 right-0 top-0 mx-auto flex h-full max-w-7xl flex-col justify-center gap-5"
	>
		<p class="w-[55%] text-pretty font-display text-5xl font-semibold leading-tight text-white">
			Cellulose based high value added ingredients and formulations
		</p>
		<p class="mb-5 font-body text-xl text-white shadow-lg">
			Enabling sustainable products – customer driven – performance focused
		</p>
		<Outline text="Find out more" url="/" />
	</div>
</div>

<div
	class="relative flex h-[75vh] w-full flex-col justify-between rounded-lg bg-cover bg-no-repeat p-8 bg-blend-multiply md:hidden"
	style="background-image: url('/hero-mobile.png'); background-color: rgba(72, 72, 83, 0.6);"
>
	<div class="flex items-center justify-between" class:opacity-0={mobileNav}>
		<img class="h-10" src="/seprify.png" alt="Seprify" />
		<button class="text-4xl text-white" onclick={() => (mobileNav = true)}
			><iconify-icon icon="charm:menu-hamburger"></iconify-icon></button
		>
	</div>
	<div class="flex flex-col justify-center gap-5">
		<p class="text-pretty font-display text-3xl font-semibold leading-tight text-white">
			Cellulose based high value added ingredients and formulations
		</p>
		<p class="font-body text-xl text-white shadow-lg">
			Enabling sustainable products – customer driven – performance focused
		</p>
		<Outline text="Find out more" url="/" />
	</div>
</div>

{#if mobileNav}
	<div
		class="fixed left-0 top-0 z-50 box-border flex h-dvh w-full flex-col justify-between bg-[#0C2D56] bg-opacity-95 p-10"
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
