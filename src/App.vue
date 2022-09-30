<script setup>
	import { RouterLink, RouterView } from "vue-router";
	import { ref } from "vue";
	import HelloWorld from "./components/HelloWorld.vue";
	import NavbarComp from "./components/NavbarComp.vue";
	import CountriesList from "./components/CountriesList.vue";

	const countries = ref(null);
	//methods/functions
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
	<div class="app">
		<NavbarComp />
		<div className="container">
			<div className="row">
				<CountriesList :countries="countries" />
				<RouterView />
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
