<script>
	import MobileNav from './MobileNav.svelte';
	import Nav from './Nav.svelte';
	import Outline from './buttons/Outline.svelte';

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

<MobileNav bind:mobileNav />
