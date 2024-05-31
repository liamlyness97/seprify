<script lang="ts">
	import Outline from '$lib/components/buttons/Outline.svelte';
</script>

<div
	class="h-[500px] w-full rounded-lg bg-cover bg-fixed bg-bottom bg-no-repeat md:h-[650px]"
	style="background-image: url('/strap-bg.png')"
>
	<div class="mx-auto flex h-full max-w-7xl items-center p-10 md:p-0">
		<div class="flex w-full flex-col gap-5 md:w-[40%] md:pr-14">
			<p class="font-display text-2xl font-semibold leading-tight text-white md:text-4xl">
				Super-White material inspired by the Cyphochilus Beetle
			</p>
			<p class="font-body leading-normal text-white">
				Our material design has been inspired by the ultra-thin, brilliant white structure found in
				the scales of the Cyphochilus beetle.
			</p>
			<Outline text="Find out more" url="/" />
		</div>
	</div>
</div>
