<template>
  <!-- <Tutorial/> -->
  <!-- <header></header>
  <section></section> -->
  <div>
    <Header/>
    <Main/>
    <Letter/>
    <Vaccine/>
    <Chatroom/>
    <Story/>
    <Footer/>
  </div>
</template>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QWKSKT4D6X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QWKSKT4D6X');
</script>

<style lang="scss">
  @font-face {
    font-family: "PingFang TC";
    src: local("PingFang TC"),
      url(~assets/fonts/PingFang-TC-Regular-2.otf) format("opentype");
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    overflow: -moz-hidden-unscrollable;
    height: 100%;
    background: url(~assets/images/square-bg.png) repeat;
  }
  body {
    font-family: "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .w_full {
    width: 100%;
  }

</style>
