<template>
    <div class="home-section">
        <div class="tab-page cant-tab-page">
            <!-- <transition name="page-switch-fade"> -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <!-- </transition> -->
        </div>
        <van-tabbar 
            class="tab-bar" 
            v-model="$store.state.home.active"
            @change="tabChange"
        >
            <van-tabbar-item name="/home/index">
                <span>甲页</span>
                <template #icon="props">
                    <img v-if="props.active" src="../../assets/images/tab-index-active.png" />
                    <img v-else src="../../assets/images/tab-index.png" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="/home/task">
                <span>乙页</span>
                <template #icon="props">
                    <img v-if="props.active" src="../../assets/images/tab-task-active.png" />
                    <img v-else src="../../assets/images/tab-task.png" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="/home/scene">
                <span>丙页</span>
                <template #icon="props">
                    <img v-if="props.active" src="../../assets/images/tab-scene-active.png" />
                    <img v-else src="../../assets/images/tab-scene.png" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="/home/mine">
                <span>丁页</span>
                <template #icon="props">
                    <img v-if="props.active" src="../../assets/images/tab-mine-active.png" />
                    <img v-else src="../../assets/images/tab-mine.png" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            
        }
    },
    activated(){
console.log(this)
    },
    methods: {
        tabChange(active){
            const router = this.$router
            // this.$store.commit("changeTabActive",active)
            router.push({
                path:active
            })
        }
    }
}
</script>
<style scoped lang="scss">
    .home-section{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .tab-page{
            &.cant-tab-page{
                height: calc(100% - 50px);
                overflow: hidden;
            }
        }
        .tab-bar{
            position: relative;
        }
    }
</style>