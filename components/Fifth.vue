<template>
    <section id="fifth">
        <div class="header">
            <div class="title">20,30,40 乳癌女子的人生故事</div>
            <div class="subtitle">人生就像一本書，希望他們的故事，能讓妳或是你，找回日常的生活。</div>
        </div>
        <div class="container">
            <div class="card">
                <div class="card_photo"><img class="w_full" src="~assets/images/bella.png"/></div>
                <div class="card_text">
                    <div class="line"><img src="~assets/images/straight-line.svg"/></div>
                    <div class="text_area">
                        <div class="brief">希望自己能盡到生病的價值</div>
                        <div class="word_by">25歲。模特兒。貝拉</div>
                    </div>
                </div>
                <a href="https://aboutsick.com/articles/p210503051">
                    <div class="bottom_link">
                        <img src="~assets/images/arrow.svg" />
                    </div>
                </a>
            </div>
            <div class="card">
                <div class="card_photo"><img class="w_full" src="~assets/images/Jie.png"/></div>
                <div class="card_text">
                    <div class="line"><img src="~assets/images/straight-line.svg"/></div>
                    <div class="text_area">
                        <div class="brief">如果我死了，老公你可以不要再婚嗎？我不想跟別人分享你。</div>
                        <div class="word_by">32歲。母親。Jie</div>
                    </div>
                </div>
                <div class="bottom_link">
                    <img src="~assets/images/arrow.svg" />
                </div>
            </div>
            <div class="card">
                <div class="card_photo"><img class="w_full" src="~assets/images/maggie.png"/></div>
                <div class="card_text">
                    <div class="line"><img src="~assets/images/straight-line.svg"/></div>
                    <div class="text_area">
                        <div class="brief">沒有晴天霹靂，哪來的鋼鐵勇氣</div>
                        <div class="word_by">39歲。作家。鋼鐵晴</div>
                    </div>
                </div>
                <a href="https://aboutsick.com/articles/p210503049" >
                    <div class="bottom_link">
                        <img src="~assets/images/arrow.svg" />
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #fifth {
        margin: 0 8.4%;
        padding-top: 100px;
        align-items: center;
        letter-spacing: 0.08em;
        color: #184E77;
        .header {
            text-align: center;
            .title {
                font-weight: 600;
                font-size: 36px;
                line-height: 50px;
            }
            .subtitle {
                font-size: 18px;
                line-height: 30px;
                margin: 24px 0 16px;
            }
        }
        .container {
            display: flex;
            justify-content: space-around;
            z-index: 2;
            position: relative;
            top: 34px;
            .card {
                background: #FFFFFF;
                border: 2px solid #EA98C2;
                box-sizing: border-box;
                padding: 12px;
                overflow: hidden;
                position: relative;
                .card_text {
                    display: flex;
                    position: relative;
                    .line {
                        position: absolute;
                    }
                    .text_area {
                        margin: 24px 0;
                        padding: 0 5px 0 32px;
                        .brief {
                            font-weight: 600;
                            font-size: 21px;
                            line-height: 30px;
                        }
                        .word_by {
                            font-weight: 600;
                            font-size: 14px;
                            line-height: 38px;
                        }
                    }
                }
                &:nth-child(2) {
                    margin: 0 20px;
                }
                .bottom_link {
                    cursor: pointer;
                    position: absolute;
                    bottom: 5px;
                    right: 12px;
                }
            }
        }
    }
</style>
