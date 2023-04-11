<template>
	<div>
		<h2 style="text-align: center">
			<a target="_blank" href="https://github.com/nhn/tui.editor/tree/master/apps/vue-editor"
				>TOAST UI Editor</a
			>&nbsp; <span style="color: green">(Лицензия: MIT)</span>&nbsp;
			<button @click="saveContent">Сохранить</button>
		</h2>
		<Editor height="500px" ref="toastuiEditor" />
	</div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/vue-editor';

export default {
	components: {
		Editor,
	},
	methods: {
		saveContent: function () {
			let html = this.$refs.toastuiEditor.invoke('getHTML');
			// You have the content to save
			console.log(html);
		},
	},
};
</script>

<style scoped></style>
