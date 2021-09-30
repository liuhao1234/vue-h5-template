<template>
    <div class="header">
        <div class="header-bg">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .header{
        width: 100%;
        height: 100px;
        background: linear-gradient(to right, #4c2af0,#1269eb);
        .header-bg{
            width: 100%;
            height: 100%;
            background-image: url(../assets/images/header-bg.png);
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% auto;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 32px;
            font-weight: bold;
        }
    }
</style>