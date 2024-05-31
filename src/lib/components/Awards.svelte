<script lang="ts">
	import { animate, inView, stagger, timeline, type TimelineDefinition } from 'motion';

	$effect(() => {
		inView('.awardsSection', () => {
			animate(
				'.bubble1',
				{ opacity: [0, 0.3], y: [50, 0] },
				{ delay: 0.5, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				'.bubble2',
				{ opacity: [0, 0.3], y: [50, 0] },
				{ delay: 0.75, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				'.bubble3',
				{ opacity: [0, 1], y: [50, 0] },
				{ delay: 1, duration: 0.75, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				'.bubble4',
				{ opacity: [0, 0.3], y: [50, 0] },
				{ delay: 1.25, duration: 0.75, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				'.bubble5',
				{ opacity: [0, 1], y: [50, 0] },
				{ delay: 1.5, duration: 0.75, easing: [0.17, 0.55, 0.55, 1] }
			);
		});
	});
</script>

<div class=" w-full py-20 md:py-36">
	<div class="relative mx-auto grid max-w-5xl grid-cols-4 grid-rows-3 gap-10 md:gap-10">
		<div class="col-span-4 px-10 md:col-span-2 md:px-0">
			<p
				class="mb-5 text-pretty font-display text-xl font-semibold tracking-wide text-[#7FA1F8] md:text-3xl"
			>
				Play a role in our efforts to improve the health of our planet
			</p>
			<p class="font-body font-semibold md:text-lg">
				Functional ingredients produced from renewable resources
			</p>
		</div>
		<div class="awardsSection relative col-span-4 row-span-3 md:col-span-2">
			<div
				class="bubble3 relative -right-12 z-30 flex aspect-square w-[95%] items-center justify-center rounded-full bg-[#0C2D56] text-white md:right-0 md:w-[85%]"
			>
				<div class="w-3/4 md:w-2/3">
					<p class="mb-3 font-display text-xl font-semibold md:mb-5 md:text-2xl">
						Thinking of<br />the future
					</p>
					<p class="font-body text-sm leading-snug md:text-sm md:leading-loose">
						We envision a future where products are created from functional ingredients produced
						from renewable resources using sustainable and environmentally responsible processes.
					</p>
				</div>
			</div>
			<div
				class="bubble2 absolute -right-10 top-[65%] z-20 aspect-square w-[65%] rounded-full bg-[#39375C] opacity-30 md:top-[30%] md:w-[75%]"
			></div>
			<div
				class="bubble1 absolute bottom-0 left-10 z-30 aspect-square w-[30%] rounded-full bg-[#6B91D8] opacity-30 md:bottom-0 md:left-[25%] md:w-[40%]"
			></div>
			<div
				class="bubble4 absolute top-[90%] z-40 aspect-square w-[40%] rounded-full bg-[#5490BC] opacity-30 md:-left-[25%] md:top-[30%] md:w-[50%]"
			></div>
		</div>
		<div class="col-span-4 row-span-2 md:col-span-2">
			<div
				class="bubble5 relative -left-6 z-40 flex aspect-square w-[95%] items-center justify-center rounded-full bg-[#7FA1F8] text-[#0C2D56] md:left-0 md:ml-auto md:w-[85%]"
			>
				<div class="w-3/4 md:w-2/3">
					<p class="mb-3 font-display text-xl font-semibold md:mb-5 md:text-2xl">
						Enriching<br />the planet
					</p>
					<p class="font-body text-sm leading-snug md:text-sm md:leading-loose">
						We sell plant-based materials to enrich and promote the circular bioeconomy and
						contribute to making the planet a healthier and safer place for generations to come.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-5xl pt-36 text-center">
		<p class="font-display text-3xl text-[#39375C]">
			<span class="font-semibold">Our Awards</span> including
		</p>
		<div class="my-8 flex w-full flex-wrap items-center justify-between">
			<img class="h-20 w-fit" src="/awards/award1.png" alt="Award" />
			<img class="h-20" src="/awards/award5.png" alt="Award" />
			<img class="h-28 w-fit" src="/awards/award2.png" alt="Award" />
			<img class="h-12 w-fit" src="/awards/award4.png" alt="Award" />
			<img class="h-24 w-fit" src="/awards/award3.png" alt="Award" />
		</div>
		<a
			class="justify-items-end self-start border-b border-[#39375C] py-3 font-body font-bold text-[#39375C] duration-300 ease-in-out hover:border-[#80A1F8] hover:text-[#80A1F8]"
			href="/">View all awards</a
		>
	</div>
</div>

<style>
</style>
