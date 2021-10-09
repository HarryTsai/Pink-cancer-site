<template>
  <section id="letter">
    <div class="book">
      <div class="img_area">
        <img src="~assets/images/book.png" />
      </div>
      <div class="text_area">
        <div class="straight_line">
          <img src="~assets/images/straight-line.svg" />
        </div>
        <div class="content">
          <div class="book_title">乳癌旅行手札</div>
          <p class="note">
            嘿，你知道嗎？<br />2020
            年，我們都有病打造了一本「乳癌旅行手札」，<br />我們集結了數位訪談者與研究員，對全台灣48位乳癌病友進行深度的質化訪談。<br />我們從中依照<span>確診、治療、病情穩定</span>三大醫病階段，<br />萃取出對乳癌病友最有幫助的資訊、經過專家及療人員的審核。<br /><br />若你還不知道這個寶貝，透過此次的乳癌月，免費下載吧！
          </p>
        </div>
        <div class="bottom_link">
          立刻下載<img src="~assets/images/arrow.svg" />
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
#letter {
  padding: 118px 0 20px;
  margin: 0 auto;
  .book {
    display: flex;
    width: 100%;
    padding: 0 8.4%;
    .img_area {
      position: relative;
      text-align: right;
      top: -24px;
      right: -20px;
      z-index: 1;
    }
    .text_area {
      position: relative;
      flex: 2;
      background: #ffffff;
      border: 2px solid #ea98c2;
      padding: 56px 60px 62px 12.5%;
      .straight_line {
        position: absolute;
        top: 0;
        left: 55px;
      }
      .content {
        margin: 0 auto;
        color: #184e77;
        .book_title {
          font-weight: 600;
          font-size: 36px;
          line-height: 50px;
          letter-spacing: 0.08em;
          color: #184e77;
          margin-bottom: 24px;
        }
        .note {
          font-size: 18px;
          line-height: 30px;
          letter-spacing: 0.08em;
          max-height: 274px;
          overflow-y: scroll;
          padding-bottom: 20px;
          & > span {
            font-weight: 600;
          }
        }
      }
    }
    .bottom_link {
      position: absolute;
      bottom: 40px;
      right: 60px;
      color: #609cd4;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: 0.08em;
      cursor: pointer;
      img {
        margin-left: 17.5px;
      }
      &:hover {
        color: #EA98C2;
        img {
            position: relative;
            right: -4px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
    #letter {
        padding: 60px 20px 20px;
        .book {
            flex-direction: column;
            padding: 0;
            position: relative;
            .img_area {
                top: -25px;
                right: 0;
                position: absolute;
                width: 60%;
                transform: translateX(-33%);
                img {
                    width: 100%;
                }
            }
            .text_area {
                padding: 100% 20px 57px;
                text-align: center;
                .straight_line {
                    display: none;
                }
                .content {
                    .book_title {
                        font-size: 24px;
                        line-height: 34px;
                    }
                    .note {
                        font-size: 16px;
                        line-height: 30px;
                        overflow: auto;
                        max-height: none;
                        br {
                            &:nth-child(2), &:nth-child(4) {
                                display: none;
                            }
                        }
                    }
                }
                .bottom_link {
                    bottom: 20px;
                    right: 20px;
                }
            }
        }
    }
}
</style>
