<template>
    <div class='csComponent'>
        <div class='part2Container'>
            <el-row :gutter='10' style='justify-content: center;'>
                <el-col
                    class='backgroundPart2'
                    :lg='11'
                    :md='11'
                    :sm='20'
                    :xl='11'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            :lg='17'
                            :md='18'
                            :sm='19'
                            :xl='16'
                            :xs='20'
                        >
                            <p class='introduction'>
                                Maximize Profits in One Week with Headline.net's NFP and CFD Convergence Double your earnings with Headline.net's unique integration of <span class='yellow'>
                                    Federal Open Market Committee (FOMC)
                                </span> data and Contract for Difference (CFD) trading. Gain real-time CPI updates and leverage them in your CFD strategies to stay ahead of the market.
                            </p><p class='introduction introduction2'>
                                Unlock the power of CPI and CFD convergence now for unparalleled financial success. Join Headline.net today.
                            </p>
                            <div class='tradeButtonContainer'>
                                <el-button class='learnButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Register with No KYC
                                    </p>
                                </el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    class='cfdIntro'
                    :lg='11'
                    :md='11'
                    :sm='20'
                    :xl='11'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            class='container'
                            :lg='19'
                            :md='20'
                            :sm='21'
                            :xl='18'
                            :xs='22'
                        >
                            <p class='content'>
                                Mark your calendars for the highly anticipated
                                <span class='yellow'>
                                    Federal Open Market Committee (FOMC) event on July 19, 2023,
                                </span>
                                as it promises to bring substantial market movement.
                            </p>
                            <p class='content'>
                                There are several key reasons why the FOMC is considered crucial:
                            </p>
                            <ul class='content'>
                                <li style='list-style: auto;'>
                                    Monetary Policy Control: FOMC shapes Fed's monetary policy with rate adjustments for stable prices and employment.
                                </li>
                                <li style='list-style: auto;'>
                                    Influence on Interest Rates: FOMC sets federal funds rate, impacting borrowing, spending, and investments.
                                </li>
                                <li style='list-style: auto;'>
                                    Financial Markets Impact: FOMC decisions directly affect financial markets and guide investor strategies.
                                </li>
                                <li style='list-style: auto;'>
                                    Global Significance: FOMC decisions influence global economies, capital flows, and exchange rates.
                                </li>
                            </ul>
                            <div class='tradeButtonContainer'>
                                <el-button class='learnButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Register with No KYC
                                    </p>
                                </el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <cardContainer />

        <div class='part3Container'>
            <el-row class='row part3Row' :gutter='10' style='justify-content: center'>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <h1 class='partnerTitle'>
                        Our<br /> Partners
                    </h1>
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='tradingView' class='logo' src='../../../images/cpi1/g7-summit/tradingView.png' />
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='Magic Compass' class='logo' src='../../../images/cpi1/g7-summit/mcLogo.png' />
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='Investing Compass' class='logo' src='../../../images/cpi1/g7-summit/investingCom.png' />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import cardContainer from './cardContainerCpi07Sc.vue'
export default {
    name: 'Component',
    components: {
        cardContainer,
    },
    setup (props) {
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/register')
                    break
                case 2 :
                    window.open('https://www.headline.net/en-US/order?symbolId=1416&tradeType=1')
                    break
            }
        }
        return {
            jumpPage,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';

.tradeButtonContainer{
  text-align: center;
  padding-bottom: 30px;
}
.red{
  background-color: #bb2423;
  color: #fff;
}
.bold{
  font-weight: bold;
}
.underline{
  text-decoration: underline;
}
.csComponent{
  background-color: rgba(20,20,22,255) !important;
}
    .signUp{
      background-color: #BB2423 !important;
      color: #fff;
      border-radius: unset !important;
    }
    .signUp:hover{
      background-color: #fff !important;
      border: 1px solid #BB2423;
      color:#BB2423
    }
    .part2Container{
      margin: 50px 0;
      .title1{
        color: #CB0D11;
        text-align: center;
        font-size: 55px;
        padding-bottom: 40px;
      }
      .backgroundPart2{
        background-image: url("../../../images/cpi1/non-event2/bannerSc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        border: 1px solid #fff;
        padding: 40px 0;
        .yellow{
          color: #FFF86B;
          font-weight: bold;
        }
      }
      .introduction{
        font-size: 25px;
        line-height: 1.4em;
        text-align: start;
        color: #fff;
      }
      .introduction2{
        padding-top: 30px;
      }
      .cfdIntro{
          align-content: center;
          display: grid;
          border: 1px solid #fff;
          background-image: url("../../../images/cpi1/cpi-fomc/background2Sc.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        .container{
          .content{
            font-size: 25px;
            color: #fff;
            margin-top: 20px;
            .yellow{
              color: #FFF86B;
            }
          }
          .tradeButtonContainer{
            text-align: center;
            padding-top: 30px;
          }
        }
      }
    }

    .part3Container{
      padding: 20px 0 50px;
      .logoContainer{
        display:grid;
        align-items: center;
        border: 1px solid #fff;
        justify-items: center;
        padding: 30px 0;
      }
      .logo{
        width: 70%;
      }

      .partnerTitle{
        line-height: 1.2em;
        font-size: 40px;
        color: #fff;
        font-weight: 400;
      }
    }
    .part4{
      padding: 0 0 50px;
      .video{
      width: 100%;
      aspect-ratio: 16 / 9;
    }
      .contentType{
        align-items: center;
        display: grid;
        .intro{
          font-size: 18px;
          color: #fff;
          align-self: center;
        }
        .underline{
          text-decoration: underline;
          font-size: bold;
        }
        .buttonContainer{
          padding-top: 30px;

        }
      }
    }
    .learnButton{
            background-color: #CB0D11 !important;
            color: #fff;
            border: 1px solid #fff !important;
            border-radius: 4px !important;
            height: 55px;
            margin-top: 30px;
            font-size: 20px;
            font-weight: bold;
          }
          .learnButton:hover{
            background-color: #fff !important;
            color: #000;
            border: unset !important;
          }
    @media screen and (max-width: 1820px) {
      .cardsContainer{
        .card1{
          left: 130px;
        }
    }
  }
  @media screen and (max-width: 1780px) {
      .cardsContainer{
        .card1{
          left: 100px !important;
        }
    }
  }
  @media screen and (max-width: 1600px) {
      .cardsContainer{
        .card1{
          left: 70px !important;
        }
    }
  }
  @media screen and (max-width: 1480px) {
      .cardsContainer{
        .card1{
          left: 40px !important;
        }
    }
  }
  @media screen and (max-width: 1350px) {
      .cardsContainer{
        .card1{
          left: unset !important;
        }
    }
  }

    @media screen and (max-width: 1548px) {
      .part4{
        .contentType{
          .buttonContainer{
            .register{
              margin-left: 12px;
            }
            .tgButton{
              margin: 20px 0 20px 12px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1027px) {
      .part2Container{
        .backgroundPart2{
          min-height: 652px;
        }
      }
    }
    @media screen and (max-width: 991px) {
      .part2Container{
        .introduction{
          font-size: 20px !important;
        }
        .backgroundPart2{
          min-height: unset !important;
        }
        .cfdIntro{
          .container{
            .content{
              font-size: 20px !important;
            }
          }
        }
      }
      .part3Container{
        text-align: center;
        .partnerTitle{
          br{
            display: none !important;
          }
        }
        .logoContainer{
          display: unset !important;
          .logo{
            width: 30% !important;
            min-width: 240px;
          }
        }
      }
    }
    .part4{
      padding-top: 50px;
        .contentType{
          .information{
            padding-top: 20px;
            line-height: 1.7em;
          }
        }
      }
</style>
