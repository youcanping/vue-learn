export default {
	name: 'focus',
	inserted(el){
		console.log('inserted input focus');
		el.focus();
	}
}
