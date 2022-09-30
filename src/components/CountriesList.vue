<script setup>
	import { ref } from "vue";
	const urlImg = ref("https://flagpedia.net/data/flags/icon/72x54/");

	const countries = ref(null);
	const fetchCountries = async () => {
		const response = await fetch(
			"https://ih-countries-api.herokuapp.com/countries"
		);
		const finalResponse = await response.json();
		const sortedCountries = finalResponse.sort((a, b) => {
			return a.name.common.localeCompare(b.name.common);
		});
		countries.value = sortedCountries;
	};
	fetchCountries();
</script>

<template>
	<div class="col-5" style="max-height: 90vh; overflow: scroll">
		<div class="list-group">
			<router-link
				v-for="country in countries"
				:key="country"
				class="list-group-item list-group-item-action"
				:to="`/details/${country.alpha3Code}`"
			>
				<img :src="urlImg + country.alpha2Code.toLowerCase() + '.png'" />
				<p>{{ country.name.common }}</p>
			</router-link>
		</div>
	</div>
	<div class="col-7">
		<RouterView />
	</div>
</template>

<style scoped>
</style>