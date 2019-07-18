<template>
  <div class="error-page">
    <div class="errorWarp">
      <div class="image">
        <img :src="loseImg" />
      </div>
      <h2 class="title">PAGE NOT FOUND</h2>
      <h3 class="desc">WE COULDN'T FIND THIS PAGE</h3>
      <router-link to="/music/" class="backBtn" tag="span">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lose",
  data() {
    return {
      loseImg: require("../../assets/image/404_error.png")
    };
  }
};
</script>

<style type="text/css">
.error-page {
  width: 100%;
  height: 100%;
  text-align: center;
}

.error-page .errorWarp {
  margin: 10% auto auto auto;
}

.error-page .errorWarp .title {
  color: #666;
  font-size: 36px;
  padding: 15px 30px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-weight: bold;
}

.error-page .errorWarp .desc {
  font-size: 24px;
  color: #474747;
  font-weight: bold;
  line-height: 30px;
}

.error-page .errorWarp .backBtn {
  display: inline-block;
  color: #333;
  margin-bottom: 20px;
  margin-top: 50px;
  padding: 15px 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>