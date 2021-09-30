// 引入等比适配插件
const pxtorem = require('postcss-pxtorem')

// 配置基本大小
const postcss = pxtorem({
    //换算基数，默认100，把根标签的font-size规定为1rem为50px,在设计稿上量出多少px直接在代码中写多少px
    rootValue: 75,
    //保留rem小数点多少位
    unitPrecision: 5,
    //存储将被转换的属性列表，'!font-size' 即不对字体进行rem转换
    propList: ['*'],
    //要忽略并保留为px的选择器，例如fs-xl类名，里面有关px的样式将不被转换，支持正则写法。
    selectorBlackList: ['.van-','.cant-','ve-'],
    // 是否删除px的原有样式
    replace: true,
    //（布尔值）媒体查询( @media screen 之类的)中不生效
    mediaQuery: false,
    //设置要替换的最小像素值，px小于12的不会被转换
    minPixelValue: 0,
    //默认值是一个空数组，这意味着禁用白名单并启用所有属性
    // propWhiteList: [],
    //黑名单
    // propBlackList: ['font-size'],
})

module.exports = {
    postcss
}