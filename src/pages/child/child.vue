<template>
    <div class="child-section">
        <Header>
            <div class="header-content" >
                <div class="header-title">
                    子页面
                </div>
                <div class="header-back">
                    <div class="back" @click="handleTitleBack">
                        <i class="iconfont icon-arrowthin"></i>
                    </div>
                </div>
            </div>
        </Header>
    </div>
</template>

<script>
import Header from "../../components/header.vue";
export default {
    name:'',
    components: {
        Header
    },
    data() {
        return {

        }
    },
    methods: {
        handleTitleBack(){
            this.$router.back()
        }
    }
}
</script>
<style scoped lang="scss">

</style>