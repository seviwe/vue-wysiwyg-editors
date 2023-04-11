<template>
	<div>
		<h2 style="text-align: center">
			<a target="_blank" href="https://www.tiny.cloud/docs/tinymce/6/basic-example/">Tiny</a
			>&nbsp;
			<span style="color: red">(Лицензия: с ограничениями 1,000 editor loads p/m)</span>&nbsp;
			<button @click="saveContent">Сохранить</button>
		</h2>
		<Editor
			api-key="544lxuxspfxlhi9osq0dvb5wjp73ixajwkb1lucuyavg5knp"
			:init="{
				plugins: 'lists link image table help wordcount',
				height: 498,
				placeholder: 'Введите текст...',
			}"
			v-model="content"
		/>
	</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
	components: {
		Editor,
	},
	data() {
		return {
			content: '',
		};
	},
	methods: {
		saveContent: function () {
			// You have the content to save
			console.log(this.content);
		},
	},
};
</script>

<style scoped></style>
