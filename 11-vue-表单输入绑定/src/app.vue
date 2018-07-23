<template>
	<div>
		<div>
			<p>输入内容：{{text}}</p>
			<p>
				<label for="inputText">文本输入框：</label>
				<input id="inputText" v-model="text" placeholder="请输入文本"/>
			</p>
		</div>
		<hr>
		<div>
			<p style="white-space: pre-line">多行文本内容：{{message}}</p>
			<p>
				<label for="inputTextArea">文本输入框：</label>
				<textarea v-model="message" id="inputTextArea" placeholder="请输入多行文本"></textarea>
			</p>
		</div>
		<hr>
		<div>
			<p>
				<label for="inputCheckBox">单个复选框：</label><input id="inputCheckBox" type="checkbox" v-model="checked"/>
			</p>
			<p>
				选择结果：{{checked}}
			</p>
		</div>
		<hr>
		<div>
			<div>多个复选框</div>
			<p>
				<label for="inputChecked_1">复选框一：</label><input id="inputChecked_1" type="checkbox" value="0" v-model="checkeds"/>
			</p>
			<p>
				<label for="inputChecked_2">复选框二：</label><input id="inputChecked_2"  type="checkbox" value="1" v-model="checkeds"/>
			</p>
			<p>
				<label for="inputChecked_3">复选框三：</label><input id="inputChecked_3" type="checkbox" value="2" v-model="checkeds"/>
			</p>
			<p>
				选择结果：{{checkeds}}
			</p>
		</div>
		<hr>
		<div>
			<p>
				<label for="inputRadio-1">男：</label><input name="radio" v-model="radioChecked" value="男" type="radio" id="inputRadio-1"/>
			</p>
			<p>
				<label for="inputRadio-2">女：</label><input name="radio" v-model="radioChecked" value="女" type="radio" id="inputRadio-2"/>
			</p>
			<p>
				选择结果：{{radioChecked}}
			</p>
		</div>
		<hr>
		<div>
			<p>
				<select v-model="selected">
					<option disabled>请选择</option>
					<option>中国</option>
					<option>美国</option>
					<option>俄罗斯</option>
				</select>
			</p>
			<p>选择结果：{{selected}}</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		text: "Hello Vue.js",
				message: "多行文本",
				checked: true,
				checkeds: ["0"],
				radioChecked: "",
				selected: ""
			}
		}
    }
</script>

<style scoped>

</style>
