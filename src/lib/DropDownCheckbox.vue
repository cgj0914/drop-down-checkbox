<template>
    <div class="selectBox" style="" @click.stop='clickDropDown'>
        <div class="dataBox">
            <div class="showData" :title="types_value" :v-model="types_value" style="">
                {{types_value}}
            </div>
            <div class="border-up-empty" v-if='listType'>
                <span></span>
            </div>
            <i class="el-icon-arrow-down" v-if="clickDowm"></i>
            <i class="el-icon-arrow-up" v-if="clickUp"></i>
        </div>
        <div v-if='listType' class="selctDown" style="">
            <el-checkbox-group style="width:99.5%;" v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="(item,index) in options" :label="item" :key="index">{{item}}</el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "drop-down-checkbox",
        props: {
            'checkList': {
                type: Array,
                default: () => {
                    return {};
                }
            },
            'existingData': {
                type: Array,
                default: () => {
                    return {};
                }
            },
        },
        data () {
            return {
                types_value:'',
                clickDowm:true,
                clickUp:false,
                checkedCities:[],
                listType:false,
                options:[]
            }
        },
        methods:{
            setData(data){
                let returnData = []
                for (let i = 0; i < this.checkList.length; i++) {
                    for (let j = 0; j < this.checkedCities.length; j++) {
                        if (this.checkList[i].label === this.checkedCities[j]) {
                            returnData.push(this.checkList[i])
                        }
                    }
                }
                this.$emit('returnData',returnData)
            },
            handleCheckedCitiesChange(value) {
                this.types_value = value.join('、')
            },
            clickDropDown(){
                this.checkedCities = this.checkedCities.length>0?this.checkedCities:this.existingData.map((item,index)=>item.label)
                this.clickDowm = !this.clickDowm;
                this.clickUp = !this.clickUp;
                this.listType = !this.listType;
                if (this.checkedCities.length>0) {
                    this.types_value = this.checkedCities.join('、')
                }else{
                    this.types_value = ''
                }
                this.setData(this.checkedCities)
                setTimeout(()=>{
                //展开菜单的时候添加到document的click事件
                document.addEventListener("click",this.removeEvt)
                },0)
            },
            removeEvt(){
                document.removeEventListener("click",()=>{})
                if (this.checkedCities.length>0) {
                    this.types_value = this.checkedCities.join('、')
                }else{
                    this.types_value = ''
                }
                this.setData(this.checkedCities)
                this.clickDowm = !this.clickDowm;
                this.clickUp = !this.clickUp;
                this.listType = false;
            },
        },
        mounted () {
            this.types_value = this.existingData.map((item,index)=>item.label).join('、')
            this.options = this.checkList.map((item,index)=>item.label)
        },
        computed:{
            styleData:function () {
                
            }
        }
    }

</script>

<style scoped>
    .selectBox{
        position: relative;
        width:20vw;
        height:40px;
    }
    .selctDown{
        position: absolute;
        top: 41px;
        width:100%;
        height:150px;
        background:#fff;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        overflow-y: scroll; 
        padding-bottom: 5px;
    }
    .el-checkbox{
        height: 38px;
        line-height: 38px;
        width: 100%;
        display: block;
        margin: 0;
    }
    .dataBox{
        cursor: pointer;
        height: calc(100% - 2px);
        width: calc(100% - 2px);
        border: 1px solid #DCDFE6;
        border-radius:5px; 
        position: relative;
    }
    .showData{
        height: 100%;
        line-height: 38px;
        margin-left: 1vw;
        color: #606266;
        font-size: 0.8vw;
        width: calc(100% - 1vw - 40px);
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    i{
        float: right;
        margin: 10px;
        color: #D0D0D0;
        transform:rotate(180deg);
        -ms-transform:rotate(180deg);     
        -moz-transform:rotate(180deg);    
        -webkit-transform:rotate(180deg); 
        -o-transform:rotate(180deg);   
        display: inline-block;
    }
    .border-up-empty{    
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 8px solid #DCDFE6;
        position: absolute;
        top: 32px;
        left: 2vw;
        z-index: 20;
    }
    .border-up-empty span{
        display: block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 8px solid #fff;
        position: absolute;
        left: -5px;
        top: 1px;
    }
</style>
