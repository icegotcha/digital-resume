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

<div class="md:hidden print:hidden flex justify-between items-start gap-4 text-sm">
	<div class="text-left min-w-0">
		<h2 class="text-4xl leading-tight">
			{name}
			<span class="block -mt-1 text-base">({nickname})</span>
		</h2>
		<p class="mt-2"><a href={`mailto:${email}`}>{email}</a></p>
		<p>{location}</p>
	</div>

	<div class="text-right shrink-0 text-sm">
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

<div class="hidden md:flex print:flex flex-wrap md:flex-row print:flex-row text-sm sm:text-base">
	<div class="flex-1 text-left sm:py-4 w-48">
		<p><a href={`tel:${phone}`}>{phone}</a></p>
		<p><a href={`mailto:${email}`}>{email}</a></p>
		<p>{location}</p>
	</div>

	<h2 class="flex-none text-4xl sm:text-2xl md:text-3xl lg:text-6xl text-center p-4 print:pt-0">
		{name}
		<span class="block -mt-1 text-base lg:text-lg">({nickname})</span>
	</h2>

	<div class="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48 text-sm sm:text-base">
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