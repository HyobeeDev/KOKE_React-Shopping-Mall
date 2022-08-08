import React from 'react';
import { Link } from 'react-router-dom';
import './AllRoasterys.css'

export default function AllRoasterys() {

  const Shops = [
    {
      id: 'shop01',
      view: '/images/view_1.jpeg',
      logoImg: '/images/roasteryLogo_1.jpeg',
      name: '리플로우 커피 로스터스',
      addr: '서울 마포구',
    },
    {
      id: 'shop02',
      view: '/images/view_2.png',
      logoImg: '/images/roasteryLogo_2.png',
      name: '베르크 로스터스',
      addr: '부산 전포동',
    },
    {
      id: 'shop03',
      view: '/images/view_3.jpg',
      logoImg: '/images/roasteryLogo_3.png',
      name: '웨이브온 커피',
      addr: '부산 기장 장안읍',
    },
    {
      id: 'shop04',
      view: '/images/view_4.jpeg',
      logoImg: '/images/roasteryLogo_4.jpeg',
      name: '슬러핀 커피',
      addr: '광주 동구',
    },
    {
      id: 'shop05',
      view: '/images/view_5.jpeg',
      logoImg: '/images/roasteryLogo_5.jpeg',
      name: '180커피로스터스',
      addr: '성남 분당구',
    },
    {
      id: 'shop06',
      view: '/images/view_6.png',
      logoImg: '/images/roasteryLogo_6.png',
      name: '원더월 커피 로스터스',
      addr: '서울 동대문구',
    },
    {
      id: 'shop07',
      view: '/images/view_7.png',
      logoImg: '/images/roasteryLogo_7.png',
      name: '나무사이로',
      addr: '성남 분당구',
    },
    {
      id: 'shop08',
      view: '/images/view_8.jpeg',
      logoImg: '/images/roasteryLogo_8.png',
      name: '알렉스더커피',
      addr: '용인 처인구',
    },
    {
      id: 'shop09',
      view: '/images/view_9.png',
      logoImg: '/images/roasteryLogo_9.png',
      name: '식물학 커피로스터스',
      addr: '서울 강남구',
    },
    {
      id: 'shop10',
      view: '/images/view_10.png',
      logoImg: '/images/roasteryLogo_10.png',
      name: '브니엘 커피로스터스',
      addr: '서울 양천구',
    },
    {
      id: 'shop11',
      view: '/images/view_11.jpeg',
      logoImg: '/images/roasteryLogo_11.png',
      name: '선빌리지 커피',
      addr: '경산 와촌면',
    },
    {
      id: 'shop12',
      view: '/images/view_12.jpeg',
      logoImg: '/images/roasteryLogo_12.png',
      name: '링크 커피 로스터스',
      addr: '전남 장성군 진원면',
    }
  ]

  return (
    <div>
      <ul className="path align1434px">
        <li><Link to={'/'} className='path_link'>
          <span class="material-symbols-rounded">home</span>
          홈
        </Link></li>
        <li><Link to={'/allroastery'} className='path_link'>
          <em>/</em> 
          <span class="material-symbols-rounded">coffee</span>
          모든 로스터리
        </Link></li>
      </ul>

      <section className="title">
        <h1>모든 로스터리</h1>
      </section>

      <ul className="filter align1434px">
        <li>최근등록일순</li>
        <li>가나다순</li>
        <li>
          <select name="" id="">
            <option value="">지역별</option>
            <option value="">서울</option>
            <option value="">경기</option>
            <option value="">강원도</option>
            <option value="">경남</option>
            <option value="">경북</option>
            <option value="">제주도</option>
            <option value="">전남</option>
            <option value="">전북</option>
            <option value="">충남</option>
            <option value="">충북</option>
          </select>
        </li>
      </ul>

      <section className="shops_container align1434px">
        <div className="shops">
          {
            Shops.map( (shop, i) => {
              return (
                <a href='#!' className="shop" key={shop.id}>
                  <div className="shop_imgs_container">
                    <div className="shop__img">
                      <img src={shop.view} alt="로스터리 모습" />
                    </div>
                    <div className="shop--logo">
                      <img src={shop.logoImg} alt="로스터리 로고" />
                    </div>
                  </div>
                  <ul>
                    <li>{shop.name}</li>
                    <li>{shop.addr}</li>
                  </ul>
                </a>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
