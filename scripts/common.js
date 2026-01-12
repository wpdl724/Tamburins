/* common.js */
// header , 띠배너 js
/* a 링크 이동 막기 */
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
            e.preventDefault();
        }
    });
});

// --------------- 헤더 
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

/* 헤더 - 배경 화이트 , 검정색 로고 , 오른쪽 메뉴 검정색 */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('#top_wrap h1 img');
    const rightIcons = document.querySelectorAll('#user_menu .right_menu img');
    const searchIcon = document.querySelector('#user_menu .search_btn img');
    const searchInput = document.querySelector('#user_menu .search input'); 
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
    black: './images/icons/login_BB.png',
    },
    header_cart: {
    white: './images/icons/cart_white_empty.png',
    black: './images/icons/cart_Black_empty.png',
    },
    search: {
    white: './images/icons/white_s.png',
    black: './images/icons/search_b.png',
    }
};

function handleHoverIn() {
    header.style.backgroundColor = '#fff';
    logoImg.src = logoBlack;

    rightIcons.forEach(icon => {
    const type = icon.classList[0];
    if (icons[type]) icon.src = icons[type].black;
    });

    if (searchIcon) searchIcon.src = icons.search.black;

    // 밑줄 검정색으로
    if (searchInput) {
    searchInput.style.borderBottom = '1px solid black';
    searchInput.style.color = '#000'; // 텍스트 색상도 검정
    }

    gnbItems.forEach(a => a.style.color = '#000');
}

function handleHoverOut() {
    header.style.backgroundColor = 'transparent';
    logoImg.src = logoWhite;

    rightIcons.forEach(icon => {
    const type = icon.classList[0];
    if (icons[type]) icon.src = icons[type].white;
    });

    if (searchIcon) searchIcon.src = icons.search.white;

    // 밑줄 다시 흰색으로
    if (searchInput) {
    searchInput.style.borderBottom = '1px solid white';
    searchInput.style.color = '#fff'; // 텍스트 색상도 흰색
    }

    gnbItems.forEach(a => a.style.color = '#fff');
}

const menuArea = document.querySelector('#gnb_wrap');
menuArea.addEventListener('mouseenter', handleHoverIn);
menuArea.addEventListener('mouseleave', handleHoverOut);
});



