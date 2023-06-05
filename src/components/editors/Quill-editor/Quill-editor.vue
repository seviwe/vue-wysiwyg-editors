<template>
	<div>
		<h2 style="text-align: center">
			<a target="_blank" href="https://github.com/davidroyer/vue2-editor">Quill</a>&nbsp;
			<span style="color: green">(Лицензия: MIT)</span>&nbsp;
			<button @click="saveContent">Сохранить</button>
		</h2>
		<VueEditor
			:editorOptions="editorSettings"
			v-model="content"
			placeholder="Введите текст..."
			style="height: 450px"
		></VueEditor>
	</div>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-vue';

Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize);

export default {
	components: {
		VueEditor,
	},
	data() {
		return {
			content: '',
			editorSettings: {
				modules: {
					imageDrop: true,
					imageResize: {},
				},
			},
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
