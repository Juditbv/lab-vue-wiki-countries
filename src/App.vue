<script setup>
	import { RouterLink, RouterView } from "vue-router";

	import NavbarComp from "./components/NavbarComp.vue";
</script>

<template>
	<div class="app">
		<NavbarComp />
		<div className="container">
			<div className="row">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
