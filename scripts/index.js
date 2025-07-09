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
// const headerLogo = document.querySelector('#top_wrap h1')
// const heaerNav = document.querySelector('#top_wrap .menu #gnb_wrap .category')
// const headerRight = document.querySelector('#top_wrap #user_menu .search ')

// headerLogo.addEventListener('mouseover',()=>{
//     headerLogo.style.src ='./images/icons/logo01.png'
// })
// console.log(headerLogo,heaerNav,headerRight);


/* 2행 _ 신제품 스와이퍼 */
var mySwiper = new Swiper('.swiper-container', { 
    //필요한 옵션을 작성합니다.
    //옵션 문법
    //옵션:값, 옵션:값
})

/* 헤더 이미지 변하게 하기 */
// const header = document.querySelector('header');
// const menu = document.querySelector('.category');
// const logoImg = document.querySelector('main');
// const userIcons = document.querySelectorAll('#user_menu img');
// console.log(header,menu,logoImg,userIcons);


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('#top_wrap h1 img');
    const rightIcons = document.querySelectorAll('#user_menu .right_menu img');
    const searchIcon = document.querySelector('#user_menu .search_btn img');
    const gnbItems = document.querySelectorAll('.category > li > a');

    // 이미지 경로 설정
    const logoWhite = './images/logo_W.png';
    const logoBlack = './images/logo_B.png';

    const icons = {
    lang: {
        white: './images/icons/lang_2W.png',
        black: './images/icons/lang.png',
    },
    login: {
        white: './images/icons/login_WW.png',
        black: './images/icons/login_b.png',
    },
    cart: {
        white: './images/icons/cart_W.png',
        black: './images/icons/cart_b.png',
    },
    search: {
        white: './images/icons/white_s.png',
        black: './images/icons/search_b.png',
    }
    };

    // 마우스 오버 시 동작
    function handleHoverIn() {
      // 배경색 흰색
    header.style.backgroundColor = '#fff';

      // 로고 검정으로
    logoImg.src = logoBlack;
    
      // 오른쪽 아이콘들 검정 이미지로 교체
    rightIcons.forEach(icon => {
        const type = icon.classList[0];
        if (icons[type]) icon.src = icons[type].black;
    });

      // 검색 아이콘 검정으로
    if (searchIcon) searchIcon.src = icons.search.black;

      // 메뉴 텍스트 검정색으로
    gnbItems.forEach(a => a.style.color = '#000');
    }

    // 마우스 아웃 시 원래대로
    function handleHoverOut() {
    header.style.backgroundColor = 'transparent';
    logoImg.src = logoWhite;

    rightIcons.forEach(icon => {
        const type = icon.classList[0];
        if (icons[type]) icon.src = icons[type].white;
    });

    if (searchIcon) searchIcon.src = icons.search.white;

    gnbItems.forEach(a => a.style.color = '#fff');
    }

    // 모든 카테고리 메뉴에 이벤트 등록
    const menuArea = document.querySelector('#gnb_wrap');
    menuArea.addEventListener('mouseenter', handleHoverIn);
    menuArea.addEventListener('mouseleave', handleHoverOut);
});