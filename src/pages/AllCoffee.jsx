import React from 'react';
import { Link } from 'react-router-dom';
import './AllCoffee.css';


export default function AllCoffee() {

  const Items = [
    {
      id: 'Item01',
      itemImg: '/images/itemImg_1.jpg',
      logoImg: '/images/roasteryLogo_1.jpeg',
      name: '스프링 블랜드',
      taste: '은은한',
      price: 12000
    },
    {
      id: 'Item02',
      itemImg: '/images/itemImg_2.jpg',
      logoImg: '/images/roasteryLogo_2.png',
      name: '달콤 쌉쌀한 인생',
      taste: '고소한',
      price: 12000
    },
    {
      id: 'Item03',
      itemImg: '/images/itemImg_3.jpg',
      logoImg: '/images/roasteryLogo_3.png',
      name: '콤플렉스 블랜드',
      taste: '달콤한',
      price: 12000
    },
    {
      id: 'Item04',
      itemImg: '/images/itemImg_4.png',
      logoImg: '/images/roasteryLogo_4.jpeg',
      name: '담벼락 아래',
      taste: '꽃향기',
      price: 12000
    },
    {
      id: 'Item05',
      itemImg: '/images/itemImg_5.png',
      logoImg: '/images/roasteryLogo_5.jpeg',
      name: 'F 블랜드',
      taste: '고소한',
      price: 12000
    },
    {
      id: 'Item06',
      itemImg: '/images/itemImg_6.png',
      logoImg: '/images/roasteryLogo_6.png',
      name: '카라멜 슬럽',
      taste: '밸런스',
      price: 12000
    },
    {
      id: 'Item07',
      itemImg: '/images/itemImg_7.jpg',
      logoImg: '/images/roasteryLogo_7.png',
      name: '비터스윗 라이프 에디션',
      taste: '밸런스',
      price: 12000
    },
    {
      id: 'Item08',
      itemImg: '/images/itemImg_8.png',
      logoImg: '/images/roasteryLogo_8.png',
      name: '베이지 블랜드',
      taste: '견과류',
      price: 12000
    },
    {
      id: 'Item09',
      itemImg: '/images/itemImg_9.png',
      logoImg: '/images/roasteryLogo_9.png',
      name: '비온뒤 하늘',
      taste: '쌉쌀한',
      price: 12000
    },
    {
      id: 'Item10',
      itemImg: '/images/itemImg_10.jpg',
      logoImg: '/images/roasteryLogo_10.png',
      name: '예가체프 블랜드',
      taste: '부드러운',
      price: 12000
    },
    {
      id: 'Item11',
      itemImg: '/images/itemImg_11.png',
      logoImg: '/images/roasteryLogo_11.png',
      name: '애월 앞바다',
      taste: '부드러운',
      price: 12000
    },
    {
      id: 'Item12',
      itemImg: '/images/itemImg_12.png',
      logoImg: '/images/roasteryLogo_12.png',
      name: '브릭 블랜드',
      taste: '부드러운',
      price: 12000
    }
  ]

  return (
    <div>
      <ul className="path align1434px">
        <li><Link to={'/'} className='path_link'>
          <span class="material-symbols-rounded">home</span>
          홈
        </Link></li>
        <li><Link to={'/allcoffee'} className='path_link'>
          <em>/</em> 
          <span class="material-symbols-rounded">coffee</span>
          모든 커피
        </Link></li>
      </ul>

      <section className="title">
        <h1>모든 커피</h1>
      </section>

      <section className="selection_outer">
        <ul className="selection align1434px">
          <li>
            <p className='sel--category'>카페인 함량</p>
            <span className='sel--tag'>하프카페인</span>
            <span className='sel--tag'>디카페인</span>
          </li>
          <li>
            <p className='sel--category'>맛과 향</p>
            <div>
              <span className='sel--tag'>달콤</span>
              <span className='sel--tag'>고소</span>
              <span className='sel--tag'>상큼</span>
              <span className='sel--tag'>쌉쌀</span>
            </div>
            <div>
              <span className='sel--tag'>밸런스</span>
              <span className='sel--tag'>깔끔한</span>
              <span className='sel--tag'>부드러운</span>
            </div>
            <div>
              <span className='sel--tag'>묵직한</span>
              <span className='sel--tag'>과일</span>
              <span className='sel--tag'>꽃향기</span>
              <span className='sel--tag'>초콜릿</span>
            </div>
            <div>
              <span className='sel--tag'>견과류</span>
              <span className='sel--tag'>스모키</span>
              <span className='sel--tag'>버스</span>
              <span className='sel--tag'>시나몬</span>
            </div>
            <div>
              <span className='sel--tag'>긴여운</span>
              <span className='sel--tag'>풍부한</span>
              <span className='sel--tag'>은은한</span>
              <span className='sel--tag'>화사한</span>
            </div>
          </li>
          <li>
            <p className='sel--category'>로스팅 포인트</p>
            <span className='sel--tag'>라이트</span>
            <span className='sel--tag'>라이트 미디엄</span>
            <span className='sel--tag'>미디엄</span>
            <span className='sel--tag'>미디엄 다크</span>
            <span className='sel--tag'>다크</span>
          </li>
          <li>
            <p className='sel--category'>원산지</p>
            <div>
              <span className='sel--tag'>콜롬비아</span>
              <span className='sel--tag'>에티오피아</span>
              <span className='sel--tag'>과테말라</span>
            </div>
            <div>
              <span className='sel--tag'>브라질</span>
              <span className='sel--tag'>페루</span>
              <span className='sel--tag'>파나마</span>
            </div>
            <div>
              <span className='sel--tag'>파퓨아뉴기니</span>
              <span className='sel--tag'>에콰도르</span>
              <span className='sel--tag'>코스타리카</span>
            </div>
            <div>
              <span className='sel--tag'>온두라스</span>
              <span className='sel--tag'>인도네시아</span>
              <span className='sel--tag'>인도</span>
            </div>
            <div>
              <span className='sel--tag'>르완다</span>
              <span className='sel--tag'>엘살바도르</span>
              <span className='sel--tag'>니카라과</span>
            </div>
          </li>
          <li>
            <p className='sel--category'>가공 방법</p>
            <span className='sel--tag'>워시드</span>
            <span className='sel--tag'>내추럴</span>
            <span className='sel--tag'>펄프드 내추럴</span>
            <span className='sel--tag'>허니</span>
            <span className='sel--tag'>무산소 발효</span>
            <span className='sel--tag'>웻훌링</span>
          </li>
          <li>
            <p className='sel--category'>원두 특징</p>
            <span className='sel--tag'>유기농</span>
            <span className='sel--tag'>공정무역</span>
            <span className='sel--tag'>직접무역</span>
          </li>
        </ul>
        <button type='button' className='sel--btn'>커피 검색하기</button>
      </section>  

      <ul className="filter align1434px">
        <li>추천순</li>
        <li>판매인기순</li>
        <li>낮은가격순</li>
        <li>높은가격순</li>
        <li>상품평순</li>
        <li>등록일순</li>
      </ul>

      <section className="coffee_items align1434px">
        
        {
          Items.map( (item, i) => {
            return (
              <div className="coffee_item" key={item.id}>
                <a href='#!' className="item_img_container">
                  <div className="item__img">
                    <img src={item.itemImg} alt="원두 상품 이미지" />
                    <div className="item__info">
                      <div className="item--logo">
                        <img src={item.logoImg} alt="로스터리 로고" />
                      </div>
                      <ul className="tools">
                        <li><span class="material-symbols-rounded">loupe</span></li>
                        <li><span class="material-symbols-rounded">favorite</span></li>
                        <li><span class="material-symbols-rounded">local_mall</span></li>
                      </ul>
                    </div>
                  </div>
                </a>
                <ul className='item__txts'>
                  <li>{item.name}</li>
                  <li>{item.taste}</li>
                  <li>{item.price}원</li>
                </ul>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}


  