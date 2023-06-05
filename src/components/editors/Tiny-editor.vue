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
				language: 'ru',
				placeholder: 'Введите текст...',
				selector: 'textarea#open-source-plugins',
				plugins:
					'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
				editimage_cors_hosts: ['picsum.photos'],
				menubar: 'file edit view insert format tools table help',
				toolbar:
					'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
				toolbar_sticky: false,
				toolbar_sticky_offset: 108,
				autosave_ask_before_unload: true,
				autosave_interval: '30s',
				autosave_prefix: '{path}{query}-{id}-',
				autosave_restore_when_empty: false,
				autosave_retention: '2m',
				image_advtab: true,
				importcss_append: true,
				template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
				template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
				height: 498,
				image_caption: true,
				quickbars_selection_toolbar:
					'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
				noneditable_class: 'mceNonEditable',
				toolbar_mode: 'sliding',
				contextmenu: 'link image table',
				skin: 'oxide',
				content_css: 'default',
				content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
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
