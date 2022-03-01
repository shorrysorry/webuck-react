import React from 'react'
import "./Detail.css"

function Detail() {
    return (
    <>
    {/* <!-- header --> */}
    <header>
        <h2 class="title">WeBuks</h2>
        <nav>
            <ul>
                <li><div>COFFEE</div></li>
                <li><div>MENU</div></li>
                <li><div>STORE</div></li>
                <li><div>WHAT'S NEW</div></li>
            </ul>
        </nav>
    </header>

    {/* <!-- subtitle - coffee type --> */}
    <section class="coffeeType">
        <h3>콜드 브루</h3>
        <p>홈 &gt; MENU &gt; 음료 &gt; 에스프레스 &gt; 나이트로 바닐라 크림</p>
    </section>

    {/* <!-- main --> */}
    <main>
        {/* <!-- coffee image --> */}
        <div class="coffeeImg">
            <img src="/images/coffee1.jpg" alt="나이트로 바닐라 크림" />
        </div>

        {/* <!-- description --> */}
        <div class="description">

            {/* <!-- coffee name section --> */}
            <section class="coffeeName">
                <h4>나이트로 바닐라 크림</h4>
                <i class="fa-regular fa-heart btnOff"></i>
                <p class="engName">Nitro Vanilla Cream</p>
            </section>
            <p class="explain">
                부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!
            </p>

            {/* <!-- nutrition section --> */}
            <section class="nutriPreview">
                <p>제품 영양 정보</p>
                <p>Tall(톨) / 355ml (12 fl oz)</p>
            </section>
            <section class="nutriDetails">
                {/* <!-- nutri left section --> */}
                <div class="nutriWrapper">
                    <div class="nutirContent">
                        <p>1회 제공량 (kcal)</p>
                        <p>80</p>
                    </div>
                    <div class="nutirContent">
                        <p>포화지방 (g)</p>
                        <p>2</p>
                    </div>
                    <div class="nutirContent">
                        <p>단백질 (g)</p>
                        <p>1</p>
                    </div>
                </div>
                {/* <!-- nutri right section --> */}
                <div class="nutriWrapper">
                    <div class="nutirContent">
                        <p>나트륨 (mg)</p>
                        <p>40</p>
                    </div>
                    <div class="nutirContent">
                        <p>당류 (g)</p>
                        <p>10</p>
                    </div>
                    <div class="nutirContent">
                        <p>카페인 (mg)</p>
                        <p>232</p>
                    </div>
                </div>

            </section>

            {/* <!-- allergic section --> */}
            <section class="allergic">
                알레르기 유발요인 : 우유
            </section>

            {/* <!-- review section --> */}
            <section class="rvWrapper">
                <p class="rvTitle">리뷰</p>
                <div class="rvContents">
                    <div class="aRv">
                        <span class="rvId">coffeelover</span>
                        <span class="rvText">너무 맛있어요!</span>
                        <i class="fa-regular fa-heart btnOff"></i>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
                <input type="text" class="rvInput" placeholder="리뷰를 입력해주세요." />
            </section>
        </div>

    </main>

    {/* <!-- footer --> */}
    <footer>
        <div class="footerWrap">
            {/* <!-- info1 --> */}
            <div class="info">
                <p>COMPANY</p>
                <ul>
                    <li><div>한눈에 보기</div></li>
                    <li><div>스타벅스 사명</div></li>
                    <li><div>스타벅스 소개</div></li>
                    <li><div>국내 뉴스룸</div></li>
                    <li><div>세계의 스타벅스</div></li>
                    <li><div>글로벌 뉴스룸</div></li>
                </ul>
            </div>
            {/* <!-- info2 --> */}
            <div class="info">
                <p>CORPORATE SALES</p>
                <ul>
                    <li><div>단체 및 기업 구매 안내</div></li>

                </ul>
            </div>
            {/* <!-- info3 --> */}
            <div class="info">
                <p>PARTNERSHIP</p>
                <ul>
                    <li><div>신규 입점 제의</div></li>
                    <li><div>협력 고객사 등록 신청</div></li>
                </ul>
            </div>
            {/* <!-- info4 --> */}
            <div class="info">
                <p>ONLINE COMMUNITY</p>
                <ul>
                    <li><div>페이스북</div></li>
                    <li><div>트위터</div></li>
                    <li><div>유튜브</div></li>
                    <li><div>블로그</div></li>
                    <li><div>인스타그램</div></li>
                </ul>
            </div>
            {/* <!-- info5 --> */}
            <div class="info">
                <p>RECRUIT</p>
                <ul>
                    <li><div>채용 소개</div></li>
                    <li><div>채용 지원하기</div></li>
                </ul>
            </div>
            {/* <!-- info6 --> */}
            <div class="info">
                <p>WEBUKS</p>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Detail;