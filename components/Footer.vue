<template>
    <footer class="footer">
        <div class="pink_area">
            <div class="content">
                <div class="quote"><img class="w_full" src="~assets/images/footer_quote.png" /></div>
                <div class="sub_quote">面對乳癌，你不孤單，分享給你的朋友吧！</div>
                <div class="share_row">
                    <div class="fb_share">
                        <div id="fb-root"></div>
                        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v12.0&appId=294436910947400&autoLogAppEvents=1" nonce="u2ha01H3"></script>
                        <div class="fb-share-button" data-href="https://aboutsick.com/pinkmonth2021" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faboutsick.com%2Fpinkmonth2021&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">分享</a></div>
                    </div>
                    <div class="line_share">
                        <div class="line-it-button" data-lang="zh_Hant" data-type="share-a" data-ver="3" data-url="https://aboutsick.com/pinkmonth2021" data-color="grey" data-size="small" data-count="true" style="display: none;"></div>
 <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
                    </div>
                </div>
            </div>
        </div>
        <div class="white_area">
            <div class="cooperate">
                <div class="title">合作天使</div>
                <div class="cooperate_logo">
                    <img class="w_full" src="~assets/images/cooperate-logo.png"/>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        .pink_area {
            height: 304px;
            background: #EA98C2;
            text-align: center;
            padding-top: 106px;
            .content {
                width: 43%;
                margin: 0 auto;
                min-width: 496px;
                max-width: 900px;
                .sub_quote {
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 34px;
                    text-align: center;
                    letter-spacing: 0.08em;
                    color: #FFFFFF;
                    margin: 18px 0 32px;
                }
                .share_row {
                    display: flex;
                    justify-content: center;
                    .fb_share {
                        margin-right: 20px;
                        position: relative;
                        top: -2px;
                    }
                }
            }
        }
        .white_area {
            height: 70px;
            background: #fff;
            padding: 8px 8.4%;
            .cooperate {
                display: flex;
                align-items: center;
                .title {
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 25px;
                    letter-spacing: 0.08em;
                    color: #1A5B96;
                    margin-right: 30px;
                }
                .cooperate_logo {
                    width: 196px;
                    align-items: center;
                    height: inherit;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .footer{
            .pink_area {
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 90px;
                .content {
                    width: 100%;
                    min-width: auto;
                    .sub_quote {
                        margin: 18px 35px 32px;
                    }
                }
            }
            .white_area{
                padding: 8px 0;
                .cooperate {
                    justify-content: center;
                    .title {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
