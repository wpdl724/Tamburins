// index. js 
// 1. 마우스 올렸을때 lnb 나타나는 효과 
// 2. 띠배너 X표시 클릭시 없어지는 효과
// 3. 헤더 -> 메뉴 카테고리에 마우스를 올렸을때 로고 이미지, 메뉴 카테고리 전체 글자 검정색으로 변경, 오른쪽메뉴 이미지들 모두 검정색을 변경하기 
// 4. 2행 신제품 스와이퍼 
// 5. 4행 향수 리스트 스와이퍼 
// 6. 7행 인스타그램 스와이퍼 


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


/*  =============- 스와이퍼 js */
/* 2행 (신제품)_ new 스와이퍼 */
const newSwiper = new Swiper('#new', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false, // 무한루프 X
    
// breakpoints: {
//     1024: {
//     slidesPerView: 4,
//     },
//     768: {
//     slidesPerView: 2,
//     },
//     480: {
//     slidesPerView: 1,
//     }
//     }
});

// 좌우 화살표버튼 요소
const prevBtn = document.querySelector('.new_wrap .swiper-button-prev');
const nextBtn = document.querySelector('.new_wrap .swiper-button-next');

// 버튼 동작 설정
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newSwiper.slidePrev();
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newSwiper.slideNext();
});

  // 버튼 표시 상태 업데이트 함수
function updateNavButtons() {
if (newSwiper.isBeginning) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'flex';
} else if (newSwiper.isEnd) {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'none';
} else {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
}
}

// 초기 버튼 상태 설정
updateNavButtons();

  // 슬라이드 이동 시 상태 업데이트
newSwiper.on('slideChange', updateNavButtons);
/* -----------------------------------------------4행 (향수 리스트)_ lsit 스와이퍼  */
var Swiper = new Swiper('.swiper-container', { 
    //필요한 옵션을 작성합니다.
    //옵션 문법
    //옵션:값, 옵션:값
})

/*----------------------------------------------- 7행 (인스타)_ instagram 스와이퍼 */
var mySwiper = new Swiper('.swiper-container', { 
    //필요한 옵션을 작성합니다.
    //옵션 문법
    //옵션:값, 옵션:값
})



/* 2행 스크롤바  */
