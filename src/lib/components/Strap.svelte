<script lang="ts">
	import Outline from '$lib/components/buttons/Outline.svelte';
</script>

<div
	class="h-[650px] w-full rounded-lg bg-cover bg-bottom bg-no-repeat"
	style="background-image: url('/strap-bg.png')"
>
	<div class="mx-auto flex h-full max-w-7xl items-center">
		<div class="flex w-[40%] flex-col gap-5 pr-14">
			<p class="font-display text-4xl font-semibold leading-tight text-white">
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
