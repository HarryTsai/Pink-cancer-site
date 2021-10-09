<template>
  <section id="vaccine">
    <div class="top_text_area">
      <div class="title">疫同前行</div>
      <div class="subtitle">乳癌患者可以接種新冠肺炎疫苗嗎?</div>
      <div class="description">
        COVID-19 疫情肆虐，許多醫師及乳癌患者關注癌症患者施打 COVID-19
        疫苗的議題，<br />
        以下整理了歐洲腫瘤學學會及美國癌症協會指南，提供乳癌病友在疫情下的注意事項：
      </div>
    </div>
    <div class="main_area">
      <div class="up">
        <div class="left">
          <img src="~assets/images/doctor.png" />
          <div class="text0">大部分癌症患者都可以接種疫苗</div>
        </div>
        <div class="center">
          <img class="blue_line" src="~assets/images/blue-line.svg" />
          <div class="text_area">
            <div class="text1">大部分癌症患者都可以接種疫苗</div>
            <div class="text2">
              惡性腫瘤、血液相關癌症和接受移植後的病患，因COVID-19而發病和死亡的風險較高，專家建議大部分癌症患者都可以接種疫苗。
            </div>
            <div class="text3">
              <img
                class="right_img"
                src="~assets/images/vaccine.png"
              />沒有針對癌症及其他特定族群推薦特定疫苗
            </div>
          </div>
        </div>
        <div class="right">
          <img class="w_full" src="~assets/images/vaccine.png" />
        </div>
      </div>
      <div class="down">
        <div class="top_area">
          <div class="item">
            <div class="item_img">
              <img class="w_full" src="~assets/images/Hormones.png" />
            </div>
            <div class="item_text">
              接受荷爾蒙療法患者，仍可以接種疫苗，不須暫停藥物使用。
            </div>
          </div>
          <div class="item">
            <div class="item_img">
              <img class="w_full" src="~assets/images/breast.png" />
            </div>
            <div class="item_text">
              疫苗接種應施打於對側手臂。<br /><span class="small"
                >(在發生乳腺癌的另一側進行手臂注射)</span
              >
            </div>
          </div>
        </div>
        <div class="bottom_area">
          <div class="item">
            <div class="item_img">
              <img class="w_full" src="~assets/images/cure.png" />
            </div>
            <div class="item_text">
              進行標靶藥物、賀爾蒙治療、免疫治療、CDK4/6制劑治療中：不需要停藥，可直接接種疫苗。
            </div>
          </div>
          <div class="item">
            <div class="item_img">
              <img class="w_full" src="~assets/images/radiation.png" />
            </div>
            <div class="item_text">進行放療中：<br />接種疫苗是安全的。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="note">
      若是有其他禁忌症，不可接種疫苗。
      <div class="reference">
        1. ESMO statement for vaccination against COVID-19 in patients with
        cancer. Published on 22 December 2020, updated 27 April 2021. Retrieved
        from https://www.esmo.org/covid-19-and-cancer/covid-19-vaccination.
        Access on May28,2021.<br />2. Clinician Frequently Asked Questions
        (FAQs) and guidance on COVID-19 vaccine for patients receiving systemic
        anti-Cancer therapy (Version 3.0). Updated on 9th February 2021. Access
        on May 28, 2021.<br />3. American Cancer Society_COVID-19 vaccines in
        people with cancer. Last Revised:May 14, 2021. Retrieved from
        https://www.cancer.org/treatment/treatments-and-side-effects/physical-side-effects/low-blood-counts/infections/covid-19-vaccines-in-people-with-cancer.html.Access
        on May 27, 2021.
      </div>
      <details>
        <summary class="accordion">其他注意事項</summary>
        <div>
          1. ESMO statement for vaccination against COVID-19 in patients with
          cancer. Published on 22 December 2020, updated 27 April 2021.
          Retrieved from
          https://www.esmo.org/covid-19-and-cancer/covid-19-vaccination. Access
          on May28,2021.<br />2. Clinician Frequently Asked Questions (FAQs) and
          guidance on COVID-19 vaccine for patients receiving systemic
          anti-Cancer therapy (Version 3.0). Updated on 9th February 2021.
          Access on May 28, 2021.<br />3. American Cancer Society_COVID-19
          vaccines in people with cancer. Last Revised:May 14, 2021. Retrieved
          from
          https://www.cancer.org/treatment/treatments-and-side-effects/physical-side-effects/low-blood-counts/infections/covid-19-vaccines-in-people-with-cancer.html.Access
          on May 27, 2021.
        </div>
      </details>
    </div>
  </section>
</template>


<style lang="scss" scoped>
#vaccine {
  padding: 100px 0 30px;
  margin: 0 auto;
  .top_text_area {
    text-align: center;
    color: #184e77;
    padding: 0 8.4%;
    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      letter-spacing: 0.08em;
    }
    .subtitle {
      margin: 20px 0 24px;
      font-weight: 600;
      font-size: 36px;
      line-height: 50px;
      text-align: center;
      letter-spacing: 0.08em;
    }
    .description {
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.08em;
    }
  }
  .main_area {
    margin: 80px 8.4% 0;
    .up {
      background: #ea98c2;
      display: flex;
      height: 272px;
      .left {
        flex: 1;
        position: relative;
        text-align: right;
        min-width: 300px;
        img {
          position: relative;
          width: 300px;
          top: -20px;
        }
        .text0 {
          display: none;
        }
      }
      .center {
        flex: 2;
        position: relative;
        padding: 45px 0 40px 40px;
        overflow-y: scroll;
        .blue_line {
          display: none;
        }
        .text_area {
          overflow: scroll;
          color: #ffffff;
          letter-spacing: 0.08em;
          .text1 {
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
          }
          .text2 {
            font-size: 18px;
            line-height: 30px;
            margin: 20px 0 39px;
          }
          .text3 {
            font-weight: 600;
            font-size: 21px;
            line-height: 30px;
            .right_img {
              display: none;
            }
          }
        }
      }
      .right {
        flex: 0.5;
        align-self: end;
        max-width: 126px;
        margin-right: 3%;
      }
    }
    .down {
      background: #fff;
      padding: 3.5% 7%;
      font-weight: 600;
      font-size: 21px;
      line-height: 30px;
      letter-spacing: 0.18em;
      color: #184e77;
      .top_area {
        border-bottom: 2px dashed #ea98c2;
        padding-bottom: 50px;
      }
      .bottom_area {
        padding-top: 50px;
      }
      .top_area,
      .bottom_area {
        display: flex;
        justify-content: space-between;
        .item {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex: 1;
          .item_img {
            max-width: 107px;
            flex: 1;
            margin-right: 10px;
          }
          .item_text {
            flex: 2;
            max-width: 360px;
            font-size: 21px;
            .small {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .note {
    padding: 0 8.4%;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.08em;
    color: #184e77;
    .accordion {
      display: none;
    }
  }
}
@media (max-width: 768px) {
  #vaccine {
    padding: 60px 20px 20px;
    .top_text_area {
      padding: 0;
      .title {
        font-size: 18px;
        line-height: 25px;
      }
      .subtitle {
        font-size: 24px;
        line-height: 34px;
        padding: 0 40px;
      }
      .description {
        text-align: left;
        font-size: 16px;
        br {
          display: none;
        }
      }
    }
    .main_area {
      margin: 40px 0 0;
      .up {
        height: auto;
        flex-direction: column;
        .left {
          min-width: auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: left;
          img {
            width: 34%;
            top: -15px;
            display: inline-block;
          }
          .text0 {
            display: inline-block;
            width: 46%;
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.08em;
            color: #ffffff;
          }
        }
        .center {
          padding: 20px;
          padding: 0;
          position: relative;
          overflow-x: hidden;
          top: -16px;
          .blue_line {
            display: block;
          }
          .text_area {
            padding: 0px 20px;
            .text1 {
              display: none;
            }
            .text2 {
              font-size: 16px;
              margin: 0 0 20px;
            }
            .text3 {
              font-size: 16px;
              .right_img {
                display: block;
                float: right;
                width: 66px;
                bottom: 0px;
                padding-top: 1%;
              }
            }
          }
        }
        .right {
          display: none;
        }
      }
      .down {
        .top_area,
        .bottom_area {
          flex-direction: column;
          padding: 0;
          .item {
            align-items: flex-start;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 2px dashed #ea98c2;
            .item_img {
              margin-right: 20px;
            }
            .item_text {
              font-size: 16px;
            }
          }
        }
        .top_area {
          border: none;
        }
        .bottom_area {
          .item {
            &:last-child {
              padding-bottom: 0;
              border-bottom: none;
            }
          }
        }
      }
    }
    .note {
      padding: 0;
      word-break: break-word;
      .reference {
        display: none;
      }
      details {
        .accordion {
          font-weight: 600;
          font-size: 14px;
          line-height: 30px;
          letter-spacing: 0.08em;
          border-bottom: 1px solid #184e77;
          display: block;
          position: relative;
          &:after {
            cursor: pointer;
            position: absolute;
            content: '＋';
            right: 0;
          }
        }
      }
      details[open] {
        .accordion {
          &:after {
            content: '－';
          }
        }
      }
    }
  }
}
</style>
