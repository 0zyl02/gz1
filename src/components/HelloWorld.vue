<template>
  <div class="hello">
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab v-for="(item,index) in questions" :key="index" :title=item.question>
        <van-cell-group v-if="index<=1">
          <van-cell :title=item.question />
          <van-image
            width="180"
            height="180"
            :src=item.answer
          />
        </van-cell-group>
        
        <van-cell-group v-else>
          <van-cell :title=item.question :label=item.answer />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
  
</template>

<script>
import ios from '../assets/ios.jpg'
import android from '../assets/android.jpg'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      active: 0,
      questions:[
        {index:0,question:'ios二维码',answer:ios},
        {index:1,question:'Android二维码',answer:android},
        {index:2,question:'苹果手机下载方式',answer:'相机扫码，先下载TestFlight，然后用自己的icloud账号登录TestFlight，登录完成了再返回这个页面，点击开始测试，就会跳转TestFlight下载了'},
        {index:3,question:'苹果手机下载出现的问题',answer:'1.下载为测试版测试版在应用列表中点击停止测试，再下载正式版2.提示需要兑换码退出testFlight 从扫码链接再进一次（刚刚开始没有下载testflight，test默认的的进入方式是添加邀请码，我们是通过邀请链接，公用链接相当于是app跳转进去的，在扫一次就好了）'},
        {index:4,question:'业务员点击驳回订单显示异常',answer:'根据单号去web端确认上述原因，再去【华夏生产问题处理群】找张若愚，将单号和原因发给他，让其处理'},
        {index:5,question:'远程双录失效',answer:'1.下载为测试版测试版在应用列表中点击停止测试，再下载正式版2.提示需要兑换码退出testFlight 从扫码链接再进一次（刚刚开始没有下载testflight，test默认的的进入方式是添加邀请码，我们是通过邀请链接，公用链接相当于是app跳转进去的，在扫一次就好了）'},
        {index:6,question:'啊啊啊啊啊啊啊啊啊啊啊啊啊',answer:'1.下载为测试版测试版在应用列表中点击停止测试，再下载正式版2.提示需要兑换码退出testFlight 从扫码链接再进一次（刚刚开始没有下载testflight，test默认的的进入方式是添加邀请码，我们是通过邀请链接，公用链接相当于是app跳转进去的，在扫一次就好了）'},
        {index:7,question:'啊啊啊啊啊啊',answer:'1.下载为测试版测试版在应用列表中点击停止测试，再下载正式版2.提示需要兑换码退出testFlight 从扫码链接再进一次（刚刚开始没有下载testflight，test默认的的进入方式是添加邀请码，我们是通过邀请链接，公用链接相当于是app跳转进去的，在扫一次就好了）'},
        {index:8,question:'啊',answer:'1.下载为测试版测试版在应用列表中点击停止测试，再下载正式版2.提示需要兑换码退出testFlight 从扫码链接再进一次（刚刚开始没有下载testflight，test默认的的进入方式是添加邀请码，我们是通过邀请链接，公用链接相当于是app跳转进去的，在扫一次就好了）'},
        {index:9,question:'e',answer:'1.下载为测试版测试版在应用列表中点击停止测试，再下载正式版2.提示需要兑换码退出testFlight 从扫码链接再进一次（刚刚开始没有下载testflight，test默认的的进入方式是添加邀请码，我们是通过邀请链接，公用链接相当于是app跳转进去的，在扫一次就好了）'},
      ]
    };
  },
  methods: {
    beforeChange(index) {
      // 返回 false 表示阻止此次切换
      if (index === 1) {
        return false;
      }

      // 返回 Promise 来执行异步逻辑
      return new Promise((resolve) => {
        // 在 resolve 函数中返回 true 或 false
        resolve(index !== 3);
      });
    },
  }
}
</script>

<style scoped>
.van-cell{
  font-size: 18px;
  font-weight: bolder;
  padding: 14px 16px;
}

.van-cell__label{
  font-size: 16px;
  color: #000;
  font-weight: normal;
  text-align: left;
  text-indent: 2em;
  line-height: 20px;
}
.[class*=van-hairline]::after{
  border: 0 solid lightgray;
}
.van-cell[data-v-469af010]{
  text-align: left;
}

</style>
