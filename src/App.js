import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Main from './pages/Main';
import AllCoffee from './pages/AllCoffee';
import AllRoasterys from './pages/AllRoasterys';



const HeaderContainer = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  background-color: rgba(255,255,255,0);
  z-index: 1000;
`
const HeaderInner = styled.header`
  width: 1434px;
  margin: 0 auto;
  padding: 30px 0 0 0;
  display: flex;
  justify-content: space-between;
`
const Logo = styled.a`
  display: block;
  width: 120px;
  height: 43px;
`
const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 100px;
`
const Lnb = styled.ul`
  display: flex;
  gap: 30px;
  position: relative;
  padding: 0;
`
const LnbLi = styled.li`
  list-style: none;
  :last-child {
    position: absolute;
    top: 30px;
    right: -15px;
    padding: 0 10px 5px 10px;
    font-size: 11px;
    line-height: 10px;  
    color: white;
    background-color: #FF6C57;
    border-radius: 20px;
    ::before {
      content:'';
      display: block;
      transform: translate(33px, -7px);
      width: 0;
      height: 0;
      border-bottom: 7px solid #FF6C57;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
  }
`
const Gnb = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
`
const GnbLi = styled.li`
  list-style: none;
  width: auto;
  height: 22px;
  opacity: .5;
  transition: all .3s ease;
  :hover {
    opacity: 1;
  }
`



function App() {
  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <Logo href='/'><Img src="/images/logo.png" alt="코케 로고입니다. 클릭하면 메인페이지로 이동합니다."></Img></Logo>
          <Nav>
            <Lnb>
              <LnbLi><Link to='/' className='lnb_menu'>내 커피 취향테스트</Link></LnbLi>
              <LnbLi><Link to='/allcoffee' className='lnb_menu'>모든 커피</Link></LnbLi>
              <LnbLi><Link to='/allroasterys' className='lnb_menu'>모든 로스터리</Link></LnbLi>
              <LnbLi><Link to='/' className='lnb_menu'>구독하기</Link></LnbLi>
              <LnbLi>무료 교환・배송</LnbLi>
            </Lnb>
            <Gnb>
              <GnbLi><Img src="/images/header_search.png" alt="검색"></Img></GnbLi>
              <GnbLi><Img src="/images/header_mymenu.png" alt="내메뉴"></Img></GnbLi>
              <GnbLi><Img src="/images/header_cart.png" alt="장바구니"></Img></GnbLi>
            </Gnb>
          </Nav>
        </HeaderInner>
      </HeaderContainer>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allcoffee" element={<AllCoffee />} />
        <Route path="/allroasterys" element={<AllRoasterys />} />
      </Routes>
      
      <footer className="footer">
        <div className="footer__top">
          <ul className="terms">
            <li><a href="#!">HOME</a></li>
            <li><a href="#!">ABOUT US</a></li>
            <li><a href="#!">AGREEMENT</a></li>
            <li><a href="#!"><strong>PRIVACY POLICY</strong></a></li>
            <li><a href="#!">STORE GUIDE</a></li>
            <li><a href="#!">CS CENTER</a></li>
          </ul>
          <div className="sns">
            <a href="#!"><img src="/images/sns_kakaotalk.png" alt="카카오톡" /></a>
            <a href="#!"><img src="/images/sns_instargram.png" alt="인스타그램" /></a>
          </div>
        </div>
        <div className="footer_middle_outer">
          <div className="footer_middle">
            <ul>
              <li><strong>(주)컨슈머브릿지</strong></li>
              <li>대표: 신재현, 박성환 / 개인정보보호책임자: 신재현 / 사업자등록번호: 713-86-01467 / 통신판매업신고번호: 제2021-서울강남-02469호</li>
              <li>사업장소재지: 서울 강남구 테헤란로2길 27 패스트파이브 빌딩 9층 915호</li>
              <li>주식회사 컨슈머브릿지는 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매중개자로서 중개하는 통신판매에 관여하여서는 통신판매의 당사자가 아니며</li>
              <li>상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은  각 판매자에게 있습니다.</li>
            </ul>
            <ul>
              <li>cs center</li>
              <li className="cs--tel">070-4647-1868</li>
              <li>오전 10:00 ~ 오후 7:00 / 점심시간 : 오후 12:00 ~ 2:00</li>
              <li>토 / 일 / 공휴일 휴무</li>
              <li><a href="#!" className="feedback--mail">feedback@koke.kr</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">ⓒ 2022 Consumer Bridge, Inc. All rights reserved</p>
      </footer>
    </>
  );
}

export default App;
