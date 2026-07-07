<script lang="ts">
	export let name = '...';
	export let nickname = '...';
	export let phone = '';
	export let email = '';
	export let github = '';
	export let linkedin = '';
	export let location = '';
	export let website = '';
</script>

<div class="grid grid-cols-[1fr_auto] gap-x-4 text-sm sm:text-base md:flex md:flex-row print:flex-row">
	<h2
		class="col-start-1 row-start-1 text-4xl leading-tight text-left md:order-2 sm:text-2xl md:text-3xl lg:text-6xl md:text-center md:p-4 print:pt-0"
	>
		{name}
		<span class="block -mt-1 text-base lg:text-lg">({nickname})</span>
	</h2>

	<div class="col-start-1 row-start-2 text-left md:order-1 md:flex-1 sm:py-4 w-48">
		<p class="hidden md:block"><a href={`tel:${phone}`}>{phone}</a></p>
		<p><a href={`mailto:${email}`}>{email}</a></p>
		<p>{location}</p>
	</div>

	<div
		class="col-start-2 row-start-1 row-span-2 text-right shrink-0 md:order-3 md:flex-1 print:text-right sm:py-4 md:w-48 text-sm sm:text-base"
	>
		<p>
			<a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
				>github.com/{github}</a
			>
		</p>
		<p>
			<a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
		</p>
		<p>
			<a href={`https://linkedin.com/${linkedin}`} target="_blank" rel="noreferrer">linkedin.com/{linkedin}</a>
		</p>
	</div>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}
</style>