<template>
    <div class="task-section">
        <Header>
            <div>乙页</div>
        </Header>
        <van-button class="btn" block type="info" @click="gotoChild">跳转404页面</van-button>
    </div>
</template>

<script>
import Header from "../../components/header.vue"
export default {
    name:'',
    components: {
        Header
    },
    data() {
        return {
            
        };
    },
    computed:{
        
    },
    activated(){
        
    },
    methods: {
        gotoChild(){
            this.$router.push({
                path:"/uuu"
            })
        }
    }
}
</script>
<style scoped lang="scss">
    .btn{
        margin: 0 auto;
        margin-top: 50px;
        width: 500px;
    }
</style>