<template>
    <div class="index-section">
        <Header>
            <div>甲页</div>
        </Header>
        <van-button class="btn" block type="info" @click="gotoChild">跳转子页面</van-button>
    </div>
</template>

<script>
import Header from "../../components/header.vue"
export default {
    components: {
        Header
    },
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    activated() {
        

    },
    methods: {
        gotoChild(){
            this.$router.push({
                path:"/child"
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