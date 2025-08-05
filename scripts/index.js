// index. js 
// 1. 마우스 올렸을때 lnb 나타나는 효과 
// 2. 띠배너 X표시 클릭시 없어지는 효과
// 3. 헤더 -> 메뉴 카테고리에 마우스를 올렸을때 로고 이미지, 메뉴 카테고리 전체 글자 검정색으로 변경, 오른쪽메뉴 이미지들 모두 검정색을 변경하기 
// 4. 2행 신제품 스와이퍼 
// 5. 4행 향수 리스트 스와이퍼 
// 6. 7행 인스타그램 스와이퍼 
// 7. 장바구니 클릭시 장바구니 색상이 변경

//a태그 누르면 되돌아가기 막기
/* a 링크 이동 막기 */
document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
  if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
          e.preventDefault();
      }
  });
});
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
const tabs = document.querySelectorAll(".menu_tab a");
  const swipers = document.querySelectorAll(".list_wrap .swiper");

  // 각 swiper를 인덱스별로 저장
  const swiperInstances = [];

  function initSwiper(index) {
    if (!swiperInstances[index]) {
      swiperInstances[index] = new Swiper(swipers[index], {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // 모든 swiper 숨김
      swipers.forEach((swiper) => swiper.classList.remove("active"));
      // 현재 탭의 swiper만 보이게
      swipers[index].classList.add("active");

      // 탭 강조 표시
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // 해당 swiper 초기화
      initSwiper(index);
    });
  });

  // 초기화
  window.addEventListener("DOMContentLoaded", () => {
    swipers[0].classList.add("active");
    tabs[0].classList.add("active");
    initSwiper(0); // 첫 번째 swiper 활성화
  });

/* 4행 클릭 밑줄 */
  const tabs1 = document.querySelectorAll('.menu_tab');

  tabs1.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs1.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // 추가로 원하는 슬라이드 제어 코드 삽입 가능
    });
  });
  


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



// 장바구니 클릭시 장바구니 채워지는 효과 (2행 슬라이드 / 4행 슬라이드 에서 상품 장바구니 아이콘 부분)
// const cartButtons = document.querySelectorAll(".cart");

// cartButtons.forEach(button => {
//   const icon = button.querySelectorAll(".cart");
//   let isAdded = false;

//   button.addEventListener("click", () => {
//     isAdded = !isAdded;
//     icon.src = isAdded ? "images/cart_Black_full.png" : "images/cart_Black_full.png";
//   });
// });


/* 장바구니 아이콘 클릭시 이미지 변경 */
// const cartBtn = document.querySelectorAll('.cart');
// console.log(cartBtn);

// for (i of cartBtn){
//   console.log(i);
//   i.addEventListener('click', () => {
//     console.log('눌림 테스트')
//     if(cartBtn =>('')){
//       document.getElementByid.src = "./images/icons/cart_Black_full.png"
//     }
//   })
// }

const cartBtn = document.querySelectorAll('.cart');
console.log(cartBtn)

for (let i of cartBtn) {
  i.addEventListener('click', (e) => {
    e.preventDefault(); // <a> 링크 이동 방지
    console.log('눌림 테스트');
    
    // 현재 이미지 주소가 비어있는 장바구니 이미지일 때
    if (i.src.includes("cart_Black_empty.png")) {
      i.src = "./images/icons/cart_Black_full.png"; // 채워진 이미지로 변경
      alert("선택하신 상품이 장바구니에 담겼습니다.");
    } else {
      i.src = "./images/icons/cart_Black_empty.png"; // 다시 빈 이미지로 변경
      alert("장바구니 상품을 취소합니다.");
    }
  });
}




// for (let i of cartBtn) {
//   i.addEventListener('click', (e) => {
//     e.preventDefault(); // <a> 링크 이동 방지
//     console.log('눌림 테스트');
//     i.src = "./images/icons/cart_Black_full.png";
//   }
// );
// }