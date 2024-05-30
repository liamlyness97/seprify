<script>
	import Nav from './Nav.svelte';
	import Outline from './buttons/Outline.svelte';
</script>

<div
	class="relative hidden h-[96vh] w-full rounded-lg bg-cover bg-no-repeat bg-blend-multiply md:block"
	style="background-image: url('/hero-bg.jpg'); background-color: rgba(72, 72, 83, 0.6);"
>
	<Nav />
	<div
		class="absolute left-0 right-0 top-0 mx-auto flex h-full max-w-7xl flex-col justify-center gap-5"
	>
		<p class="font-display w-[55%] text-pretty text-5xl font-medium leading-tight text-white">
			Cellulose based high value added ingredients and formulations
		</p>
		<p class="font-body text-xl text-white shadow-lg">
			Enabling sustainable products – customer driven – performance focused
		</p>
		<Outline text="Find out more" url="/" />
	</div>
</div>

<div
	class="relative flex h-[75vh] w-full flex-col justify-between rounded-lg bg-cover bg-no-repeat px-10 py-10 bg-blend-multiply md:hidden"
	style="background-image: url('/hero-mobile.png'); background-color: rgba(72, 72, 83, 0.6);"
>
	<div class="flex">
		<img src="/seprify.png" alt="" />
	</div>
	<div class="flex flex-col justify-center gap-5">
		<p class="font-display text-pretty text-3xl font-medium leading-tight text-white">
			Cellulose based high value added ingredients and formulations
		</p>
		<p class="font-body text-xl text-white shadow-lg">
			Enabling sustainable products – customer driven – performance focused
		</p>
		<Outline text="Find out more" url="/" />
	</div>
</div>
