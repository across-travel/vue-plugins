import Vue from 'vue';
import infiniteScroll from './infiniteScroll.vue';

export default {
	install: (Vue) => {
		Vue.component('infiniteScroll', infiniteScroll);
	}
}