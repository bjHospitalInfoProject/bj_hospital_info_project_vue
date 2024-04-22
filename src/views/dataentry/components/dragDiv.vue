<template>

    <div :style="{ width: defaultWidth + 'px', position: 'relative' }">
        <div ref="container" class="d-flex">
            <div style="width: 100%; height: 100%;">
                <!-- 默认插槽放置内容 -->
                <slot />
            </div>
        </div>
        <!-- 拖拽条 -->
        <div v-if="resizeShow" class="resize" @mousedown.stop="onMouseDown" @mouseup.stop="onMouseup" />
    </div>

</template>

<script>

export default {

    props: {
        // 控制拖拽条的是否显示，默认显示
        resizeShow: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            defaultWidth: 240,
            beforeWidth: 0,
            afterWidth: 0
        }

    },

    methods: {

        // 按下鼠标开始监听鼠标移动事件

        onMouseDown(e) {
            this.beforeWidth = e.clientX
            document.addEventListener('mousemove', this.onMousemove)
            document.addEventListener('mouseup', this.onMouseup)
            e.preventDefault()
        },

        // 监听鼠标移动 实现盒子宽度变化

        onMousemove(e) {
            this.afterWidth = e.clientX
            
            // 根据鼠标位置判断向左还是向右拖动

            let defaultWidth = this.defaultWidth
            if (this.beforeWidth < this.afterWidth) {
                defaultWidth = this.defaultWidth + (this.afterWidth - this.beforeWidth)
                this.beforeWidth = e.clientX
            } else {
                defaultWidth = this.defaultWidth - (this.beforeWidth - this.afterWidth)
                this.beforeWidth = e.clientX
            }


            if(defaultWidth > 400 ||defaultWidth < 200){
                // return
            }else{
                this.defaultWidth = defaultWidth
                this.$emit('change',defaultWidth)
            }
        },

        onMouseup(e) {
            e.preventDefault()
            // 松开鼠标后移除监听
            document.removeEventListener('mousedown', this.onMouseDown)
            document.removeEventListener('mousemove', this.onMousemove)
        }
    }

}

</script>

<style>
.d-flex {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    /* padding-right: 10px; */
}

.resize {
    position: absolute;
    top: 0;
    right: -10px;
    display: inline-block;
    width: 2px;
    height: 100%;
    cursor: col-resize;
    /* background-color: rgb(49, 76, 111); */
    background-color: rgba(0,0,0, 0.08);

    
    margin: 0 1px;
}
</style>