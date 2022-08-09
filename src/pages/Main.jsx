import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Main.css';
import MoreBtn from "../components/MoreBtn";

const VisualImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  :nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
  }
`
const VisualTxts = styled.div`
  position: absolute;
  top: 31%; left: 50%;
  transform: translateX(-50%);
  text-align: center;
`
const VisualTxtP = styled.p`
  :first-child {
    font-size: 39px;
    font-weight: bold;
    margin: 0;
  }
  :last-child {
    font-size: 19px;
    margin: 20px 0;
  }
`
const Circles = styled.div`
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 60px;
  width: 1434px;
`
const Circle = styled.div`
  width: 400px;
  height: 400px;
  text-align: center;
  border-radius: 50%;
  border: 2px solid #FDEAE0;
  box-sizing: border-box;
  /* background-color: rgba(253, 234, 224, .9); */
  background-color: white;
`
const CircleImgContainer = styled.div`
  display: inline-block;
  height: 75px;
  margin-top: 19%;
`
const CircleImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
`
const CircleTitle = styled.h3`
  position: relative;
  margin: 20px 0 30px 0;
  font-size: 23px;
  color: #FF6C57;
  ::after {
    content: '';
    width: 30px;
    height: 2px;
    background-color: #FF6C57;
    display: block;
    position: absolute;
    bottom: -15px; left: 50%;
    transform: translateX(-50%);
  }
`
const CircleP = styled.p`
  font-size: 17px;
  color: #777;
`



export default function Main () {

  const Beans = [
    {
      id: 'bean01',
      itemImg: '/images/beanImg_1.png',
      logoImg: '/images/roasteryLogo_2.png',
      name: 'BABY BLAND',
      shop: '베르크 로스터스'
    },
    {
      id: 'bean02',
      itemImg: '/images/beanImg_2.jpg',
      logoImg: '/images/roasteryLogo_3.png',
      name: '에티오피아 예가체프 게르시',
      shop: '영앤도터스'
    },
    {
      id: 'bean03',
      itemImg: '/images/beanImg_3.jpg',
      logoImg: '/images/roasteryLogo_1.jpeg',
      name: '에티오피아 구지 아나소라',
      shop: '리플로우'
    },
    {
      id: 'bean04',
      itemImg: '/images/beanImg_4.jpg',
      logoImg: '/images/roasteryLogo_4.jpeg',
      name: '콜린',
      shop: '영앤도터스'
    },
    {
      id: 'bean05',
      itemImg: '/images/beanImg_6.jpg',
      logoImg: '/images/roasteryLogo_7.png',
      name: '나무사이로',
      shop: '와이칸 다크'
    },
    {
      id: 'bean06',
      itemImg: '/images/beanImg_5.png',
      logoImg: '/images/roasteryLogo_8.png',
      name: 'R 블랜드',
      shop: '알렉스더커피'
    },
    {
      id: 'bean07',
      itemImg: '/images/beanImg_7.jpg',
      logoImg: '/images/roasteryLogo_5.jpeg',
      name: '스프링 블랜드',
      shop: '콩볶는 사람들'
    },
    {
      id: 'bean08',
      itemImg: '/images/beanImg_8.png',
      logoImg: '/images/roasteryLogo_6.png',
      name: '콜롬비아 디카페인',
      shop: '하늘에커피'
    }
  ]

  return (
    <>
      <div className="main_visual">
        <div>
          <VisualImg src="/images/main_visual_bg.png" alt="main visual image"></VisualImg>
        </div>
        <VisualTxts>
          <VisualTxtP>내 취향 로스터리의 원두를<br />언제 어디서든 즐겨보세요</VisualTxtP>
          <VisualTxtP>당신의 커피 취향에 따라 국내 다양한 로스터리의 원두를 구독해보세요.</VisualTxtP>
        </VisualTxts>
        <Circles fluid='col-md-4'>
          <Circle>
            <CircleImgContainer><CircleImg src="/images/circle_1.png" alt="원두 이미지" /></CircleImgContainer>
            <CircleTitle>전국 커피 맛집의 원두</CircleTitle>
            <CircleP>
              한 번쯤 먹어보고 싶었던<br />
              커피 맛집 로스터리의 원두를<br />
              제공해 드려요.
            </CircleP>
          </Circle>
          <Circle>
            <CircleImgContainer><CircleImg src="/images/circle_2.png" alt="달력 이미지" /></CircleImgContainer>
            <CircleTitle>원하는 날 언제든</CircleTitle>
            <CircleP>
              원하는 날짜, 원하는 곳에서<br />
              즐기실 수 있도록<br />
              배송해 드려요.
            </CircleP>
          </Circle>
          <Circle>
            <CircleImgContainer><CircleImg src="/images/circle_3.png" alt="무료배송 이미지" /></CircleImgContainer>
            <CircleTitle>부담없이 즐기세요</CircleTitle>
            <CircleP>
              코케 구독을 하시면 무료배송,<br />
              첫 결제 3,000원 할인 혜택으로<br />
              부담없이 시작하세요.
            </CircleP>
          </Circle>
        </Circles>
      </div>

      <section className="roasterys">
        <div className="roastery__left">
          <h2>코케에서 만날 수 있는<br />맛집 로스터리</h2>
          <p>국내 소문난 커피 맛집 로스터리를<br />코케에서 만나보세요.</p>
          <MoreBtn>모든 로스터리 보기</MoreBtn>
        </div>
        <Swiper className="roastery__swiper"
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="roastery__item">
              <div className="roastery--Img">
                <img src="/images/roasteryImg_1.jpeg" alt="로스터리 모습" />
              </div>
              <div className="roastery--info">
                <div className="roastery--logo">
                  <img src="/images/roasteryLogo_1.jpeg" alt="로스터리 로고" />
                </div>
                <ul>
                  <li className="roastery--name">베르크커피</li>
                  <li> <span>·</span> 서울 성수동</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roastery__item">
              <div className="roastery--Img">
                <img src="/images/roasteryImg_2.png" alt="로스터리 모습" />
              </div>
              <div className="roastery--info">
                <div className="roastery--logo">
                  <img src="/images/roasteryLogo_2.png" alt="로스터리 로고" />
                </div>
                <ul>
                  <li className="roastery--name">베르크 로스터스</li>
                  <li> · 부산 전포동</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roastery__item">
              <div className="roastery--Img">
                <img src="/images/roasteryImg_3.jpg" alt="로스터리 모습" />
              </div>
              <div className="roastery--info">
                <div className="roastery--logo">
                  <img src="/images/roasteryLogo_3.png" alt="로스터리 로고" />
                </div>
                <ul>
                  <li className="roastery--name">웨이브온 커피</li>
                  <li> · 부산 기장군 장안읍</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roastery__item">
              <div className="roastery--Img">
                <img src="/images/roasteryImg_4.png" alt="로스터리 모습" />
              </div>
              <div className="roastery--info">
                <div className="roastery--logo">
                  <img src="/images/roasteryLogo_4.jpeg" alt="로스터리 로고" />
                </div>
                <ul>
                  <li className="roastery--name">슬러핀 커피</li>
                  <li> · 광주 동구</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roastery__item">
              <div className="roastery--Img">
                <img src="/images/roasteryImg_5.jpeg" alt="로스터리 모습" />
              </div>
              <div className="roastery--info">
                <div className="roastery--logo">
                  <img src="/images/roasteryLogo_5.jpeg" alt="로스터리 로고" />
                </div>
                <ul>
                  <li className="roastery--name">180커피로스터스</li>
                  <li> · 경기 성남 분당구</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roastery__item">
              <div className="roastery--Img">
                <img src="/images/roasteryImg_6.png" alt="로스터리 모습" />
              </div>
              <div className="roastery--info">
                <div className="roastery--logo">
                  <img src="/images/roasteryLogo_6.png" alt="로스터리 로고" />
                </div>
                <ul>
                  <li className="roastery--name">원더월 커피 로스터스</li>
                  <li> · 서울 동대문구</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="coffee_beens">
        <div className="section__title">
          <h2>코케의 인기 원두들</h2>
          <p>코케에서 가장 인기있는 원두들을 즐겨보세요.</p>
        </div>
        <a href="#!" className="beans_container">
          {
            Beans.map( (bean, i) => {
              return (
                <div className="bean_item" key={bean.id}>
                  <div className="bean__img">
                    <img src={bean.itemImg} alt="원두 상품 이미지" />
                  </div>
                  <div className="bean__info">
                    <div className="info--logo">
                      <img src={bean.logoImg} alt="로스터리 로고" />
                    </div>
                    <ul>
                      <li>{bean.name}</li>
                      <li>· {bean.shop}</li>
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </a>
        <div className="beans_btn">모든 커피 보기</div>
      </section>

      <section className="review_outer">
        <div className="review">
          <div className="section__title">
            <h2>코케를 구독 중인 커피인들</h2>
            <p>데일리 커피에서 디카페인까지, 다양한 취향을 가진 사람들이 구독중이에요.</p>
          </div>
          <Swiper className="roastery__swiper"
            // spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="review_container">
                <div className="review--Img">
                  <img src="/images/reviewer_1.png" alt="리뷰어 모습" />
                </div>
                <ul>
                  <li className="review--title">이런 상황에 딱 정답과도 같은 서비스</li>
                  <li>
                    집에서 여러 스페셜티 커피숍의 다양한 원두를 접해보고 싶은 분들,<br />
                    매번 어떤 원두를 살지 고민에 빠지는 분들, 원두 구매에 누군가의 추천을 원하는 분들에게 딱 좋은 서비스.
                  </li>
                  <li className="reviewer">이한오 - '도쿄 스페셜티 커피 라이프' 저자</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_container">
                <div className="review--Img">
                  <img src="/images/reviewer_2.png" alt="리뷰어 모습" />
                </div>
                <ul>
                  <li className="review--title">온 세상 맛있는 커피가 궁금하다면</li>
                  <li>
                  유명한 커피집을 가볼 수 없는 요즈음, 집에서 궁금했던 커피 맛을 텍스트로 읽으며 상상하는 것이 좋다.<br />포장을 뜯었을 때 나를 무장해제 시키는 커피 향기도.
                  </li>
                  <li className="reviewer">최고요 - 텐 크리에이티브 공간 디렉터</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_container">
                <div className="review--Img">
                  <img src="/images/reviewer_3.png" alt="리뷰어 모습" />
                </div>
                <ul>
                  <li className="review--title">커피에  대한 경험을 즐길 수 있어요</li>
                  <li>
                  스스로에게 "뭐가 좋아?"하고 질문을 던지며 커피에  대한 경험을 즐길 수 있게 도와준다는 점이 마음에 들었다.<br />
                  벌써 어떤 원두를 골라볼지 무척 기대된다.
                  </li>
                  <li className="reviewer">무과수 - 작가</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_container">
                <div className="review--Img">
                  <img src="/images/reviewer_4.png" alt="리뷰어 모습" />
                </div>
                <ul>
                  <li className="review--title">내 입에 맞는 원두를 알아서 보내줍니다</li>
                  <li>
                  새 원두 주문 깜빡했다간 모닝커피 없이 쓸쓸한 아침을 보내야 하고.<br />
                  그러니까 때맞춰 내 입에 맞는 원두를 알아서 보내주는 코케가 얼마나 반가운지.
                  </li>
                  <li className="reviewer">김키미 - 카카오 브런치 브랜드 마케터</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_container">
                <div className="review--Img">
                  <img src="/images/reviewer_5.png" alt="리뷰어 모습" />
                </div>
                <ul>
                  <li className="review--title">디카페인 원두도 다양하게 고를 수 있다</li>
                  <li>
                  유명 커피 맛집들의 원두를 정기배송해주는 코케에서 디카페인 원두의 종류도<br />
                  맛과 향별로 다양하게 고를 수 있다는걸 알게 된 후로는 매일 아침이 신난다.
                  </li>
                  <li className="reviewer">유난 - 광고기획자/에디터</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review_container">
                <div className="review--Img">
                  <img src="/images/reviewer_6.png" alt="리뷰어 모습" />
                </div>
                <ul>
                  <li className="review--title">애플뮤직을 처음 시작할 때처럼 취향 진단</li>
                  <li>
                    집에 원두가 떨어지지 않는 게 중요하니까 꼭 필요한 구독.<br />
                    무엇보다 선택에 오랜 시간이 걸리는 나에게 랜덤한 추천은 오히려 고맙습니다...!
                  </li>
                  <li className="reviewer">고예림 - 작사가</li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="test">
        <p>혹시 <span>☕원두 커피</span>는 처음이세요?</p>
        <a href="#!">30초만에 내 취향 커피 추천받기!</a>
      </section>
    </>
  )
}