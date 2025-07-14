// index. js 
// 1. 마우스 올렸을때 lnb 나타나는 효과 
// 2. 띠배너 X표시 클릭시 없어지는 효과
// 3. 헤더 -> 메뉴 카테고리에 마우스를 올렸을때 로고 이미지, 메뉴 카테고리 전체 글자 검정색으로 변경, 오른쪽메뉴 이미지들 모두 검정색을 변경하기 
// 4. 2행 신제품 스와이퍼 
// 5. 4행 향수 리스트 스와이퍼 
// 6. 7행 인스타그램 스와이퍼 

/*  =============- 스와이퍼 js */
/* ============================================ 2행 (신제품)_ new 스와이퍼 */
const newSwiper = new Swiper('#new', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false, // 무한루프 X
    

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

/* ================================================================== 2행 신제품끝 */


/* -----------------------------------------------4행 (향수 리스트)_ lsit 스와이퍼 시작 */
var listSwiper = new Swiper('#productlist_swiper', { 
    slidesPerView:4,
    spaceBetween: 10,
    loop:true,
})

const tab = document.querySelectorAll('.menu_tab a');
const listswiper = document.querySelectorAll('.swiper_wrapper');

console.log(tab,listswiper);

tab.forEach ((tab, index)=>{
    tab.addEventListener('click', (e) => {
        e.preventDefault();
    })
})






/*----------------------------------------------- 7행 (인스타)_ instagram 스와이퍼 */
var instaSwiper = new Swiper('#insta', { 
    slidesPerView:5,
    spaceBetween:0,
    loop: true,
    
})

// 7행 효과
const autoSwiper = new Swiper('#insta', {
    slidesPerView: 5,
    slidesPerGroup: 2,         // 1개씩 이동
    spaceBetween: 10,
    loop: true,                // 무한 반복
    speed: 1000,               // 슬라이드 전환에 걸리는 시간 (ms)
    autoplay: {
      delay: 3000,             // 슬라이드 유지 시간 (ms)
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: '.instagram .swiper-button-next',
    prevEl: '.instagram .swiper-button-prev',
    },
});




