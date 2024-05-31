<script lang="ts">
	import InsightItem from './news/InsightItem.svelte';
	import MediaItem from './news/MediaItem.svelte';

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
				<p class="my-5 text-balance font-body text-lg font-medium leading-normal">
					Take a look at our recent articles and news headlines. View all
				</p>
			</div>
			<MediaItem image={'/news2.png'} />
			<InsightItem
				title="A Friborg start-up is developing an alternative to titanium dioxide with cellulose"
				image="/news1.png"
				link="/"
				date="15/04/23"
			/>
		</div>
		<div class="flex flex-col gap-5">
			<InsightItem
				title="A Friborg start-up is developing an alternative to titanium dioxide with cellulose"
				image="/news3.png"
				link="/"
				date="15/04/23"
			/>
			<MediaItem image={'/news2.png'} />
		</div>
	</div>
</div>
