<script lang="ts">
	const news = [
		{
			title: 'A Friborg start-up is developing an alternative to titanium dioxide with cellulose',
			date: '15/04/23',
			category: 'Media',
			image: '/news2.png'
		},
		{
			title: 'A Friborg start-up is developing an alternative to titanium dioxide with cellulose',
			date: '15/04/23',
			category: 'Insights',
			image: '/news1.png'
		},
		{
			title: 'A Friborg start-up is developing an alternative to titanium dioxide with cellulose',
			date: '15/04/23',
			category: 'Insights',
			image: '/news3.png'
		},
		{
			title: 'A Friborg start-up is developing an alternative to titanium dioxide with cellulose',
			date: '15/04/23',
			category: 'Media',
			image: '/news2.png'
		}
	];
</script>

<div class="w-full pt-20 md:pt-36">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
		<div class="flex flex-col gap-5">
			<div class="w-full px-10 md:w-1/2 md:px-0">
				<p class="font-display text-3xl font-semibold md:text-4xl">Insights & Media</p>
				<p class="font-body my-5 text-balance text-lg font-medium leading-normal">
					Take a look at our recent articles and news headlines. View all
				</p>
			</div>
			<div
				style="background-image: url('/news2.png'); "
				class="relative aspect-video w-full rounded-lg bg-cover bg-top bg-no-repeat"
			>
				<div
					class="font-body absolute left-10 top-0 rounded-b-lg bg-[#7EA1F8] px-5 py-3 text-sm font-semibold text-[#0C2D56]"
				>
					<p>Media</p>
				</div>
			</div>
			<div
				style="background-image: url('/news1.png'); background-color: rgba(0, 0, 0, 0.3);"
				class="relative flex h-[500px] w-full flex-col justify-end rounded-lg bg-cover bg-top bg-no-repeat bg-blend-multiply"
			>
				<div
					class="font-body absolute left-10 top-0 rounded-b-lg bg-[#7EA1F8] px-5 py-3 text-sm font-semibold text-[#0C2D56]"
				>
					<p>Insights</p>
				</div>
				<div class="flex w-full flex-col gap-3 p-10 md:w-3/4">
					<p class="font-body text-lg font-medium text-white">15/04/23</p>
					<p class="font-display text-2xl font-semibold text-white">
						A Friborg start-up is developing an alternative to titanium dioxide with cellulose
					</p>
					<a
						class="font-body self-start justify-self-end border-b border-white py-3 align-bottom font-bold text-white"
						href="/">Find out more</a
					>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-5">
			<div
				style="background-image: url('/news3.png'); background-color: rgba(0, 0, 0, 0.3);"
				class="relative flex h-[500px] w-full flex-col justify-end rounded-lg bg-cover bg-top bg-no-repeat bg-blend-multiply"
			>
				<div
					class="font-body absolute left-10 top-0 rounded-b-lg bg-[#7EA1F8] px-5 py-3 text-sm font-semibold text-[#0C2D56]"
				>
					<p>Insights</p>
				</div>
				<div class="flex w-full flex-col gap-3 p-10 md:w-3/4">
					<p class="font-body text-lg font-medium text-white">15/04/23</p>
					<p class="font-display text-2xl font-semibold text-white">
						A Friborg start-up is developing an alternative to titanium dioxide with cellulose
					</p>
					<a
						class="font-body self-start justify-self-end border-b border-white py-3 align-bottom font-bold text-white"
						href="/">Find out more</a
					>
				</div>
			</div>
			<div
				style="background-image: url('/news2.png'); "
				class="relative aspect-video w-full rounded-lg bg-cover bg-top bg-no-repeat"
			>
				<div
					class="font-body absolute left-10 top-0 rounded-b-lg bg-[#7EA1F8] px-5 py-3 text-sm font-semibold text-[#0C2D56]"
				>
					<p>Media</p>
				</div>
			</div>
		</div>
	</div>
</div>
