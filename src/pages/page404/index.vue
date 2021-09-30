<template>
    <div class="page404">
        <van-empty 
            description="找遍全世界也没找到该页面" 
        />
        <van-button
            class="back-bth"
            type="default"
            plain
            round
            @click="back"
        >返回</van-button>
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
    methods: {
        back(){
            this.$router.back()
        }
    },
}
</script>
<style scoped lang="scss">
    .page404{
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .back-bth{
            width:400px;
            color: #b7b7b7;
        }
    }
</style>