export default {
	name: "demo",
	bind: function (el, binding, vnode) {
		var s = JSON.stringify;
		el.innerHTML = `
			${binding.value}
			<pre>
			${s(binding, null, 2)}, ${s(Object.keys(vnode), null, 2)}
			</pre>
		`
	}
}
