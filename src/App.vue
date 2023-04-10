<template>
	<div id="app">
		<WYSIWEGEditors msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import WYSIWEGEditors from './components/WYSIWYG-editors.vue';

export default {
	name: 'App',
	components: {
		WYSIWEGEditors,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
