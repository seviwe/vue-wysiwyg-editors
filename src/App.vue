<template>
	<div id="app">
		<WYSIWYGEditors />
	</div>
</template>

<script>
import WYSIWYGEditors from './components/WYSIWYG-editors.vue';

export default {
	name: 'App',
	components: {
		WYSIWYGEditors,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
