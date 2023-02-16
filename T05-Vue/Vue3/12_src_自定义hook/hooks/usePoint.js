import { reactive, onMounted, onBeforeUnmount } from 'vue';
export default function () {
	let point = reactive({
		x: 0,
		y: 0
	});

	function savePoint(event) {
		point.x = event.pageX;
		point.y = event.pageY;
		console.log(event.pageX, event.pageY);
	}

	onMounted(() => {
		console.log('给window对象添加savePoint事件');
		window.addEventListener('click', savePoint);
	});

	onBeforeUnmount(() => {
		console.log('移除window对象savePoint事件');
		window.removeEventListener('click', savePoint);
	});

	return point;
}
