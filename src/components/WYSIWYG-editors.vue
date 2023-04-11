<template>
	<div>
		<div class="container">
			<div class="container__row">
				<div class="container__editor">
					<QuillEditor />
				</div>
				<div class="container__editor">
					<TinyEditor />
				</div>
			</div>
		</div>
		<div class="container">
			<TOASTUIEditor />
		</div>
		<div class="container">
			<MavonEditor />
		</div>
	</div>
</template>

<script>
import QuillEditor from './editors/Quill-editor/Quill-editor.vue';
import TinyEditor from './editors/Tiny-editor.vue';
import TOASTUIEditor from './editors/ToastUI-editor.vue';
import MavonEditor from './editors/Mavon-editor.vue';

export default {
	name: 'WYSIWEGEditors',
	components: {
		QuillEditor,
		TinyEditor,
		TOASTUIEditor,
		MavonEditor,
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
