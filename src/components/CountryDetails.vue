<script setup>
	import { useRoute } from "vue-router";
	import { ref } from "vue";

	const route = useRoute();
	const name = ref();
	const area = ref();
	const capital = ref();
	const borders = ref();
	const alpha2Code = ref();
	const alpha3Code = ref();

	// const country = ref(null);
	// const fetchCountry = async () => {
	// 	const response = await fetch(
	// 		`https://ih-countries-api.herokuapp.com/countries/${route.params.alpha3Code}`
	// 	);
	// 	const finalResponse = await response.json();
	// 	country.value = finalResponse;
	// };
	// fetchCountry();
</script>

<template>
	<img
		src="https://restcountries.eu/data/fra.svg"
		alt="country flag"
		style="width: 300px"
	/>
	<h1>France</h1>
	<table class="table">
		<thead></thead>
		<tbody>
			<tr>
				<td style="width: 30%">Capital</td>
				<td>Paris</td>
			</tr>
			<tr>
				<td>Area</td>
				<td>
					551695 km
					<sup>2</sup>
				</td>
			</tr>
			<tr>
				<td>Borders</td>
				<td>
					<ul>
						<li><a href="/AND">Andorra</a></li>
						<li><a href="/BEL">Belgium</a></li>
						<li><a href="/DEU">Germany</a></li>
						<li><a href="/ITA">Italy</a></li>
						<li><a href="/MCO">Monaco</a></li>
						<li><a href="/ESP">Spain</a></li>
						<li><a href="/CHE">Switzerland</a></li>
					</ul>
				</td>
			</tr>
		</tbody>
	</table>
</template>