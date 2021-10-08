<template>
    <section id="first">
        <div class="main">
            <div class="main_text">
                <div class="title">粉紅乳癌月</div>
                <div class="main_title_area"><img class="w_full" src="~assets/images/main-title.png" /></div>
                <p>乳癌一直是女性癌症中發生率的第一名，每年的十月是國際乳癌防治月，提醒所有女性朋友，在日常生活中要多關心自己的身體，而定期篩檢就是乳癌病友日常的生活風景，但這兩年來我們不斷受到新冠肺炎COVID-19 的影響，罹患乳癌的朋友們該注意什麼呢？</p>
                <div class="down_button"><a href="#second"><img src="~assets/images/blue-button.svg" /></a></div>
            </div>
            <div class="main_img">
                <img class="w_full" src="~assets/images/main-img.gif" />
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
    #first {
        margin: 70px auto 0;
        padding-bottom: 30px;
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 120px;
            .main_text {
                flex: 1;
                padding: 0px 3.4% 0 8.4%;
                .title {
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 34px;
                    letter-spacing: 0.08em;
                    color: #EA98C2;
                }
                .main_title_area {
                    margin: 24px 0;
                }
                > p {
                    font-size: 18px;
                    line-height: 40px;
                    letter-spacing: 0.08em;
                    color: #184E77;
                }
                .down_button {
                    margin-top: 40px;
                }
            }
            .main_img {
                flex: 1;
                padding: 0px 8.4% 0 3.4%;
            }
        }
    }
</style>
