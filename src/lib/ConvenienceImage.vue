<template>
    <div>
        <img :src="imageSrc" ref="img"/>
    </div>
</template>

<script>
    export default {
        name: "convenience-image",
        props: ['srcNor', 'srcErr', 'alignment'],
        data () {
            return {
                imageSrc: this.srcNor
            }
        },
        mounted () {
            let _this = this

            _this.$refs.img.onerror = () => {
                _this.imageSrc = _this.srcErr
            }

            if(_this.imageSrc === undefined){
                _this.imageSrc = _this.srcErr
            }

            switch (_this.alignment){
                case 'top':
                    //上对齐
                    _this.$refs.img.style.margin = '0 auto'
                    break
                case 'bottom':
                    // 下对齐
                    _this.$refs.img.style.margin = '0 auto'
                    _this.$refs.img.style.top = ''
                    break
                case 'left':
                    // 左对齐
                    _this.$refs.img.style.margin = 'auto 0'
                    break
                case 'right':
                    // 右对齐
                    _this.$refs.img.style.margin = 'auto 0'
                    _this.$refs.img.style.left = ''
                    break
                case 'top-left':
                case 'left-top':
                    // 上对齐，左对齐
                    _this.$refs.img.style.margin = '0 0'
                    break

                case 'max-contain':
                    // 最大包含
                    _this.$refs.img.style.cssText += 'width: 100% !important; height: 100% !important; object-fit: contain'

                    break
                default:
                    // 默认上下左右居中
                    _this.$refs.img.style.margin = 'auto'
            }
        },

        watch:{
            srcNor:{
                handler: function (val) {
                    let _this = this
                    if(val === undefined){
                        _this.imageSrc = _this.srcErr
                    }else{
                        _this.imageSrc = _this.srcNor
                    }
                },
            }
        }
    }

</script>

<style scoped>

    div{
        width: 100%;
        height: 100%;
        position: relative;
    }
    div img{
        width: auto !important;
        height: auto !important;
        position: absolute;
        max-height: 100% !important;
        max-width: 100% !important;
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
    }

</style>
