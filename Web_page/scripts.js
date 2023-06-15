// 기존 코드
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('더 많은 정보를 준비 중입니다. 조금만 기다려주세요!');
});

// 새로운 코드
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(function(navItem) {
        navItem.addEventListener('mouseover', function() {
            navItem.style.color = 'yellow';
        });

        navItem.addEventListener('mouseout', function() {
            navItem.style.color = 'white';
        });
    });
});
