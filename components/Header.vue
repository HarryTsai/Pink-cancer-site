<template>
  <header class="header">
    <a href="https://aboutsick.com/" class="logo" data-scroll>
      <img id="logo_img" src="~assets/images/logo.png" alt="logo" />
    </a>
    <nav>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li><a href="#second">乳癌手札</a></li>
        <li><a href="#third">疫同前行</a></li>
        <li><a href="#fourth">花樣療天室</a></li>
        <li><a href="#fifth">人生故事</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ea98c2;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  height: 70px;
  display: flex;
  justify-content: space-between;
  .logo {
    display: block;
    float: left;
    padding: 22px 0;
    margin-left: 60px;
    text-decoration: none;
    img {
      width: 155px;
    }
  }
  nav {
    width: 53%;
    .menu-btn,
    .menu-icon {
      display: none;
    }
    .menu {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
      position: relative;
      max-height: none;
      top: 0px;
      display: flex;
      justify-content: space-around;
      border: 0;
      li > a {
        display: block;
        padding: 20px 0;
        text-decoration: none;
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 26px;
        font-weight: normal;
        margin: 0 12px;
        cursor: pointer;
        &:hover {
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .header {
    .logo {
      margin-left: 20px;
    }
    nav {
      width: auto;
      .menu-btn {
        display: none;
        &:checked {
          ~ .menu {
            max-height: 500px;
            padding: 40px 0 20px;
          }
          ~ .menu-icon {
            .navicon {
              background: transparent;
              &:before {
                transform: rotate(-45deg);
              }
              &:after {
                transform: rotate(45deg);
              }
            }
            &:not(.steps) {
              .navicon {
                &:before, &:after {
                  top: 0;
                }
              }
            }
          }
        }
      }
      .menu-icon {
        cursor: pointer;
        display: inline-block;
        padding: 34px 20px;
        position: relative;
        user-select: none;
        .navicon {
          background: #fff;
          display: block;
          height: 2px;
          position: relative;
          transition: background 0.2s ease-out;
          width: 24px;
          &:before,
          &:after {
            background: #fff;
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all 0.2s ease-out;
            width: 100%;
          }
          &:before {
            top: 7px;
          }
          &:after {
            top: -7px;
          }
        }
      }
      .menu {
        position: absolute;
        width: 100%;
        top: 70px;
        left: 0px;
        max-height: 0;
        transition: max-height 0.2s ease-out;
        border-top: 1px solid #fff;
        display: block;
        background: #EA98C2;
      }
    }
  }
}
</style>
