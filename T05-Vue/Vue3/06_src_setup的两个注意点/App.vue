<template>
	<Demo @hello="showHelloMsg" msg="你好" school="河南理工大学"></Demo>
</template>

<script>
import Demo from './components/Demo';
export default {
	name: 'App',
	components: { Demo },
	setup() {
		function showHelloMsg(value) {
			alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`);
		}
		return {
			showHelloMsg
		};
	}
};
</script>

