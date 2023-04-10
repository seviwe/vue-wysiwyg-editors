<template>
	<div>
		<div class="container">
			<div class="container__row">
				<div class="container__editor">
					<h2>
						Quill <span style="color: green">(Лицензия: MIT)</span>&nbsp;
						<a target="_blank" href="https://github.com/davidroyer/vue2-editor"
							>Ссылка</a
						>
					</h2>
					<QuillEdtior placeholder="Введите текст..." style="height: 450px"></QuillEdtior>
				</div>
				<div class="container__editor">
					<h2>
						Tiny
						<span style="color: red"
							>(Лицензия: с ограничениями 1,000 editor loads p/m)</span
						>&nbsp;
						<a
							target="_blank"
							href="https://www.tiny.cloud/docs/tinymce/6/basic-example/"
							>Ссылка</a
						>
					</h2>
					<Editor
						api-key="544lxuxspfxlhi9osq0dvb5wjp73ixajwkb1lucuyavg5knp"
						:init="{
							plugins: 'lists link image table help wordcount',
							height: 498,
							placeholder: 'Введите текст...',
						}"
					/>
				</div>
			</div>
		</div>
		<div class="container">
			<h2>
				TOAST UI Editor <span style="color: green">(Лицензия: MIT)</span>&nbsp;
				<a
					target="_blank"
					href="https://github.com/nhn/tui.editor/tree/master/apps/vue-editor"
					>Ссылка</a
				>
			</h2>
			<ToastUIEditor height="500px" />
		</div>
		<div class="container">
			<h2>
				mavonEditor <span style="color: green">(Лицензия: MIT)</span>&nbsp;
				<a target="_blank" href="http://www.mavoneditor.com/">Ссылка</a>
			</h2>
			<mavon-editor language="ru" style="height: 500px" />
		</div>
	</div>
</template>

<script>
import { VueEditor as QuillEdtior } from 'vue2-editor';

import Editor from '@tinymce/tinymce-vue';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor as ToastUIEditor } from '@toast-ui/vue-editor';

export default {
	name: 'WYSIWEGEditors',
	props: {
		msg: String,
	},
	components: {
		QuillEdtior,
		Editor,
		ToastUIEditor,
	},
};
</script>

<style scoped>
.container {
	display: flex;
	gap: 10px;
	flex-direction: column;
}

.container__row {
	display: flex;
	gap: 10px;
}

.container__editor {
	width: 50%;
}
</style>
