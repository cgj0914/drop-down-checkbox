<template>
    <div>
        <drop-down-checkbox :checkList='checkList' :existingData='existingData' @returnData='getData'/>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                checkList:[
                    {id:1,label:'测试1'},
                    {id:2,label:'测试2'},
                    {id:3,label:'测试3'},
                    {id:4,label:'测试4'},
                    {id:5,label:'测试5'},
                    {id:6,label:'测试6'}
                ],
                existingData:[
                    {id:1,label:'测试1'},
                    {id:2,label:'测试2'},
                ]
            }
        },
        methods:{
            getData(data){
                console.log(data)
            }
        }
    }
    
</script>

<style scoped>
    
</style>
