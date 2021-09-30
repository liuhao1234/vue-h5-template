<template>
    <div class="login-section">
        <van-button class="submit-btn" block type="info" @click="handleLogin">登录</van-button>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            
        };
    },
    activated(){
        
    },
    methods: {
        handleLogin(){
            this.$router.replace({
                path:"/home"
            })
        }
    }
}
</script>
<style scoped lang="scss">
    @import "../../assets/style/variable.scss";
    .login-section{
        height: 100%;
        @include flexCenter;
        .submit-btn{
            width: 500px;
        }
    }
</style>