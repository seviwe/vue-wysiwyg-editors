<template>
	<div>
		<h2 style="text-align: center">
			<a target="_blank" href="http://www.mavoneditor.com/">mavonEditor</a>&nbsp;
			<span style="color: green">(Лицензия: MIT)</span>&nbsp;
		</h2>
		<mavon-editor @save="saveContent" language="ru" style="height: 500px" />
	</div>
</template>

<script>
export default {
	methods: {
		saveContent: function (value, html) {
			// You have the content to save
			console.log(html);
		},
	},
};
</script>

<style scoped></style>
