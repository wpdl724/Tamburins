/* a 링크 이동 막기 */
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
            e.preventDefault();
        }
    });
});



/* login 폼 */

const loginTabBtn = document.querySelector('.tab_login_btn');
const nonLoginTabBtn = document.querySelector('.tab_nonlogin_btn');

const loginForm = document.getElementById('login_form');
const nonLoginForm = document.getElementById('nonlogin_form');

// 로그인 탭 클릭 시
loginTabBtn.addEventListener('click', function (e) {
e.preventDefault();

// 탭 스타일 조정
loginTabBtn.classList.add('active');
nonLoginTabBtn.classList.remove('active');

// 폼 전환
loginForm.style.display = 'block';
nonLoginForm.style.display = 'none';
});

// 비회원 탭 클릭 시
nonLoginTabBtn.addEventListener('click', function (e) {
e.preventDefault();

// 탭 스타일 조정
loginTabBtn.classList.remove('active');
nonLoginTabBtn.classList.add('active');

// 폼 전환
loginForm.style.display = 'none';
nonLoginForm.style.display = 'block';
});