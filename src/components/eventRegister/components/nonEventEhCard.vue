<template>
    <div class='csComponent'>
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
                    <div class='cardContainer'>
                        <img alt='reject' class='logo' src='../../../images/cpi1/non-event/reject.png' />
                        <p class='partnerTitle'>
                            KYC-FREE
                        </p>
                        <p>Skip KYC and start trading faster</p>
                    </div>
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <div class='cardContainer'>
                        <img alt='money' class='logo' src='../../../images/cpi1/non-event/moneyIcon.png' />
                        <p class='partnerTitle'>
                            Crypto-Friendly
                        </p>
                        <p>Trade CFDs with Crypto and Fiat</p>
                    </div>
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <div class='cardContainer'>
                        <img alt='checklist' class='logo' src='../../../images/cpi1/non-event/checklist.png' />
                        <p class='partnerTitle'>
                            Event-Driven Trading
                        </p>
                        <p>Focus on financial events to win big</p>
                    </div>
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <div class='cardContainer'>
                        <img alt='rocket' class='logo' src='../../../images/cpi1/non-event/rocket.png' />
                        <p class='partnerTitle'>
                            Crypto-Friendly
                        </p>
                        <p>Avoid European Taxes</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Component',
    components: {
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

    .part1Container{
      padding-top: 50px;
      .background2{
        background-image: url("../../../images/cpi1/cpi-fomc/background1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        border: 1px solid #fff;
        .title{
          font-size: 30px;
          color: #fff;
        }
        .info{
          font-size: 16px;
          color: #fff;
        }
      }
      .cardsContainer{
        border: 1px solid #fff;
        .cardRow2{
          padding-top: 30px;
        }
        .card1{
          position: relative;
          bottom: 90px;
          left: 150px;
        }
        .card2{
          position: relative;
          bottom: 40px;
        }
        .box-card{
          background-color: #1b1c1e;
          width: 240px;
          border: unset !important;
          .title{
            font-size: 18px;
            color: #E21C21;
            padding-top: 50px;
          }
          .text{
            font-size: 18px;
            color: #fff;
          }
          .icon{
            width: 50px;
            filter: invert(19%) sepia(62%) saturate(3147%) hue-rotate(344deg) brightness(97%) contrast(97%);
          }
        }
        .buttonContainer{
            padding: 0px 0 30px 140px;
            .details{
              background-color: #BB2423 !important;
              color: #fff;
              border: 1px solid #fff;
              border-radius: 4px !important;
              width: 240px;
              height: 55px;
              font-size: 20px;
            }
            .details:hover{
              background-color: unset !important;
            }
          }
      }
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
        background-image: url("../../../images/cpi1/cpi-fomc/background1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        border: 1px solid #fff;
        padding: 40px 0;
        .tradeButtonContainer{
          text-align: center;
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
          background-image: url("../../../images/cpi1/cpi-fomc/background2.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        .container{
          .content{
            font-size: 25px;
            color: #fff;
            margin-top: 20px;
          }
          .tradeButtonContainer{
            text-align: center;
            padding-top: 30px;
            .tradeButton{
              background-color: #BB2423 !important;
              color: #fff;
              border: 1px solid #fff;
              border-radius: 4px !important;
              width: 265px;
              height: 55px;
            }
            .tradeButton:hover{
              background-color: unset !important;
            }
          }
        }
      }
    }

    .part3Container{
      padding: 20px 0 50px;
      .logoContainer{
        border: 1px solid #fff;
        .logo{
          width: 84px;
          height: 84px;
        }
        h1{
          font-size: 28px;
          padding-top: 20px;
        }
        p{
          font-size: 17px;
          color: #fff;
          padding-top: 20px;
        }
        .cardContainer{
          padding: 40px 20px;
          display:grid;
          align-items: center;
          justify-items: center;
        }
      }
      .partnerTitle{
        font-weight: bold;
        line-height: 1.2em;
        font-size: 50px;
        color: #fff;
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
            background-color: #fff !important;
            color: #CB0D11;
            border: unset !important;
            border-radius: 4px !important;
            width: 265px;
            height: 55px;
            margin-top: 30px;
          }
          .learnButton:hover{
            color: #000;
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
        .cfdIntro{
          .tradeButtonContainer{
            .tradeButton{
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 991px) {
      .part1Container{
        .buttonContainer{
          padding: 20px 0 !important;
          text-align: center;
        }
        .part1Content{
          padding: 30px 0;
        }
        .cardsContainer{
          .cardRow3{

            padding-top: 20px;
          }
          .cardRow{
            justify-content: space-around !important;
          }
          .card1{
            position: relative;
            bottom: unset !important;
            left: unset !important;
            display: contents;
          }
          .card2{
            position: relative;
            bottom: unset !important;
            left: unset !important;
            display: contents;
          }
        }
    }
      .part2Container{
        .backgroundPart2{
          min-height: unset !important;
        }
        .cfdIntro{
          .tradeButtonContainer{
            .tradeButton{
              width: 200px !important;
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

      @media screen and (max-width: 600px) {
        .part1Container{
          .cardsContainer{
            .box-card{
              width: unset !important
            }
            .cardRow2{
              padding-top: unset !important;
            }
          }
        }
      }
</style>
