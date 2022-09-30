<script setup>
	import { useRoute } from "vue-router";
	import { computed, onMounted, watch, ref } from "vue";

	const route = useRoute();

	const name = ref();
	const area = ref();
	const capital = ref();
	const borders = ref();
	const alpha2Code = ref();
	const alpha3Code = ref();

	const getCountry = async () => {
		const countryCode = route.params.alpha3Code;
		const response = await fetch(
			`https://ih-countries-api.herokuapp.com/countries/${countryCode}`
		);
		const finalResponse = await response.json();

		name.value = finalResponse.name.common;
		area.value = finalResponse.area;
		capital.value = finalResponse.capital[0];
		borders.value = finalResponse.borders;
		alpha2Code.value = finalResponse.alpha2Code.toLowerCase();
		alpha3Code.value = finalResponse.alpha3Code;
	};
	getCountry();

	const countryCode = computed(() => {
		return route.params.alpha3Code;
	});

	watch(countryCode, (newCountryCode) => {
		getCountry();
	});

	onMounted(() => {
		getCountry();
	});
</script>

<template>
	<img
		:src="`https://flagcdn.com/w320/${alpha2Code}.png`"
		alt="country flag"
		style="width: 300px"
		class="mb-4"
	/>
	<h1>{{ name }}</h1>
	<table class="table">
		<thead></thead>
		<tbody>
			<tr>
				<td style="width: 30%">Capital</td>
				<td>{{ capital }}</td>
			</tr>
			<tr>
				<td>Area</td>
				<td>
					{{ area }} km
					<sup>2</sup>
				</td>
			</tr>
			<tr>
				<td>Borders</td>
				<td v-if="borders && borders.length === 0">There are no borders</td>
				<td v-else>
					<ul>
						<li v-for="border in borders" :key="border">
							<router-link :to="`/details/${border}`">{{ border }}</router-link>
						</li>
					</ul>
				</td>
			</tr>
		</tbody>
	</table>
</template>