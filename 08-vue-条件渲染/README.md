# 条件渲染
## `v-if`
### 使用场景
* `v-if`用于条件渲染元素，对符合条件的元素插入页面文档中，不符合条件的移除页面文档。
* 具有更高的切换开销。
* 用于运行时条件很少改变的情况。
#### `v-if` 用法
```html
<template>
	<p v-if="isOk">YES</p>
	<p v-else>NO</p>
	<p v-if="type === 'A'">A</p>
	<p v-else-if="type === 'B'">B</p>
	<p v-else>not A or B</p>
</template>
```

## `v-show` 
### 使用场景
* `v-show`只是进行元素`display:block/none`属性的设置，不会把元素移除文档。
* 具有更高的初始化开销。
* 用于需要频繁切换的情况。
### 用法
* 不能用于`<template>`元素中，不支持`v-else`。
```html
<template>
	<p v-show="isShow">show</p>
</template>
```

