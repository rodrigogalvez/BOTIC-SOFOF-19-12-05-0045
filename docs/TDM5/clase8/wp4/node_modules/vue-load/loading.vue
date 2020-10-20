<template>
	<div class="loading" v-show="showFlag">
		<span class="text text-top" :style="textStyle" v-show="location">{{text}}</span>
		<img :src="url" :width="width" :height="height" class="image">
		<span class="text text-bottom" :style="textStyle" v-show="!location">{{text}}</span>
	</div>
</template>
<script>
import loadgif from './loading.gif'
export default {
	props: {
		showLoading: {
			type: Boolean,
			default: true
		},
		url: {
			type: String,
			default: loadgif
		},
		width: {
			type: String,
			default: '30'
		},
		height: {
			type: String,
			default: '30'
		},
		// 文本文字
		text: {
			type: String,
			default: ''
		},
		// 文本方向
		position: {
			type: String,
			default: 'bottom'
		},
		// 文本样式
		textStyle: {
			type: Object,
			default: () => {
				return {'color': 'green'}
			}
		}
	},
	data() {
		return {
			showFlag: this.showLoading
		}
	},
	computed: {
		location() {
			if (this.position === 'top') {
				return true
			}
			return false
		}
	},
	methods: {
		show() {
			this.showFlag = true
		},
		hide() {
			this.showFlag = false
		}
	}
}
</script>
<style scoped>
.loading{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	text-align: center;
}
.loading .text{
	font-size: 14px;
	color: red;
}
.loading .text-top{
	margin-bottom: 10px;
}
.loading .text-bottom{
	margin-top: 10px;
}
.loading img{
	margin: 0 auto;
}
.loading img,.loading span{
	display: block;
}
</style>