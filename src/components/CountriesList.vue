<script setup>
	import { ref } from "vue";
	const props = defineProps({
		countries: Object,
	});
	const urlImg = ref("https://flagpedia.net/data/flags/icon/72x54/");
</script>

<template>
	<div class="col-5" style="max-height: 90vh; overflow: scroll">
		<div class="list-group">
			<router-link
				v-for="country in countries"
				:key="country"
				class="list-group-item list-group-item-action"
				:to="'/details/' + country.alpha3Code"
			>
				<img :src="urlImg + country.alpha2Code.toLowerCase() + '.png'" />
				<p>{{ country.name.common }}</p>
			</router-link>
			<router-view />
		</div>
	</div>
</template>

<style scoped>
</style>