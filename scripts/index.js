// index. js 
// 1. 마우스 올렸을때 lnb 나타나는 효과 
// 2. 띠배너 X표시 클릭시 없어지는 효과
// 3. 헤더 -> 메뉴 카테고리에 마우스를 올렸을때 로고 이미지, 메뉴 카테고리 전체 글자 검정색으로 변경, 오른쪽메뉴 이미지들 모두 검정색을 변경하기 


/* 마우스 올렸을때 lnb 나타나는 효과 */
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".category > li");
    const lnbItems = document.querySelectorAll(".lnb_bg");

    for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("mouseenter", function () {
        // 모든 lnb_bg 숨김 처리
        for (let j = 0; j < lnbItems.length; j++) {
        lnbItems[j].style.display = "none";
        }

        // 현재 메뉴의 lnb만 보여줌
        const currentLnb = menuItems[i].querySelector(".lnb_bg");
        if (currentLnb) {
        currentLnb.style.display = "block";
        }
    });

    menuItems[i].addEventListener("mouseleave", function () {
        const currentLnb = menuItems[i].querySelector(".lnb_bg");
        if (currentLnb) {
        currentLnb.style.display = "none";
        }
    });
    }
});

/* 띠배너 X표시 클릭시 없어지는 효과 */
/* 헤더 광고 닫기 버튼 */
const closeBtn = document.querySelector('.line_ad_contents a')
const topAd = document.querySelector('#line_ad_wrap')
console.log(closeBtn,topAd);

closeBtn.addEventListener('click',()=>{
    topAd.style.display ='none';
})

/* 헤더 - 배경색상 화이트로 변경되고 , 로고이미지 검정색으로 변경, 오른쪽 메뉴 이미지 검정색으로 변경 */
//헤더 변수
//로고 이미지 변수
//네비 카테고리 변수
//오른쪽 메뉴 이미지 변수
const headerLogo = document.querySelector('#top_wrap h1')
const heaerNav = document.querySelector('#top_wrap .menu #gnb_wrap .category')
const headerRight = document.querySelector('#top_wrap #user_menu .search ')

headerLogo.addEventListener('mouseover',()=>{
    headerLogo.style.src ='./images/icons/logo01.png'
})
console.log(headerLogo,heaerNav,headerRight);


/* 2행 _ 신제품 스와이퍼 */
var mySwiper = new Swiper('.swiper-container', { 
    //필요한 옵션을 작성합니다.
    //옵션 문법
    //옵션:값, 옵션:값
})
