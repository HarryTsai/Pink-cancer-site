<template>
    <section id="chatroom">
        <div class="type">
            <div class="quote_right">
                <img src="~assets/images/quote1.png" />
            </div>
            <div class="row">
                <div class="video_area">
                    <iframe src="https://www.youtube.com/embed/D7YDzVbzBe0?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text_area">
                    <div class="straight_line">
                        <img src="~assets/images/straight-line.svg" />
                    </div>
                    <div class="content">
                        <div class="title">花漾療天室：有化好說</div>
                        <p class="note">此次的花漾療天室，邀請到台北榮總外科部主任、臺灣乳房醫學會理事長，有「乳癌教父」之稱的曾令民醫師，一起來聊聊對乳癌還懞懞懂懂的姐妹們，<span class="text_bold">並且也特別回答對施打 covid-19 疫苗的常見問題。</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="type">
            <div class="quote_left">
                <img src="~assets/images/quote2.png" />
            </div>
            <div class="row_revert">
                <div class="video_area">
                    <iframe src="https://www.youtube.com/embed/6uN3x9KTeq4?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text_area">
                    <div class="straight_line">
                        <img src="~assets/images/straight-line.svg" />
                    </div>
                    <div class="content">
                        <div class="title">化療前必看須知 原來副作用可以這樣共處！</div>
                        <p class="note">面對癌症化療，其實副作用並不可怕，可怕的是未知與誤解，一切的副作用均有解決的方法，跟著中國醫藥大學附設醫院乳房外科鄭伃書醫師，一起了解並學習如何面對並接納化療副作用，與它和平共處，給自己一個更好的生活品質。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="type">
            <div class="quote_right">
                <img src="~assets/images/quote3.png" />
            </div>
            <div class="row">
                <div class="video_area">
                    <iframe src="https://www.youtube.com/embed/sHQLwHe5-uc?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text_area">
                    <div class="straight_line">
                        <img src="~assets/images/straight-line.svg" />
                    </div>
                    <div class="content">
                        <div class="title">花漾療天室：化療知識家</div>
                        <p class="note">面對化療的副作用，到底怎樣才能兼顧治療效果跟生活品質呢？今天的化療知識家，我們邀請到姐妹們都很信任的型男暖醫<span class="text_bold">中國醫藥大學附設醫院劉良智主任</span>，來陪大家一起闖過#化療副作用的難關！</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #chatroom {
        padding: 130px 8.4% 20px;
        .type {
            .quote_right {
                text-align: right;
            }
            .quote_left {
                text-align: left;
            }
            .quote_right, .quote_left {
                margin-bottom: 20px;
                height: 42px;
                img {
                    height: 100%;
                }
            }
            .row {
                .text_area {
                    left: -11px;
                }
            }
            .row_revert {
                flex-direction: row-reverse;
                .video_area {
                    right: 11px;
                }
            }
            .row, .row_revert {
                display: flex;
                width: calc(100% + 11px);
                .video_area {
                    flex: 1;
                    position: relative;
                    top: -20px;
                    z-index: 1;
                    padding-bottom: 20.2%;
                    padding-top: 30px;
                    height: 0;
                    overflow: hidden;
                    iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
                .text_area {
                    flex: 2;
                    position: relative;
                    height: auto;
                    width: auto;
                    background: #fff;
                    border: 2px solid #EA98C2;
                    overflow: hidden;
                    .straight_line {
                        position: absolute;
                        height: 100%;
                        left: 35px;
                    }
                    .content {
                        // padding: 48px 40px 40px 88px;
                        padding: 6% 40px 40px 13%;
                        letter-spacing: 0.08em;
                        color: #184E77;
                        .title {
                            font-weight: 600;
                            font-size: 24px;
                            line-height: 34px;
                            margin-bottom: 24px;
                        }
                        .note {
                            font-size: 18px;
                            line-height: 30px;
                            max-width: 800px;
                            .text_bold {
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
        }
        .type:nth-child(2) {
            margin: 90px 0;
        }
    }
    @media (max-width: 768px) {
        #chatroom {
            padding: 60px 20px 0;
            .type {
                .quote_right, .quote_left {
                    text-align: center;
                    width: 100%;
                    img {
                        width: initial;
                        height: inherit;
                    }
                }
                .row, .row_revert {
                    width: 100%;
                    flex-direction: column;
                    .video_area {
                        top: 0;
                        padding-bottom: 47%;
                    }
                    .text_area {
                        left: 0;
                        top: -1px;
                        .straight_line {
                            display: none;
                        }
                        .content {
                            font-size: 21px;
                            line-height: 29px;
                            padding: 34px 20px 20px;
                            .title {
                                font-size: 21px;
                                line-height: 29px;
                                text-align: center;
                                margin-bottom: 20px;
                            }
                            .note {
                                font-size: 16px;
                            }
                        }
                    }
                }
                .row_revert {
                    .video_area {
                        right: 0;
                    }
                }
            }
        }
    }
    @media (max-width: 540px) {
        #chatroom {
            padding: 60px 20px 0;
            .type {
                .quote_right, .quote_left {
                    height: auto;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
