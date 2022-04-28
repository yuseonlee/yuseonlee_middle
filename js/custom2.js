$(document).ready(function () {
  
    // var $moreBtn = $('.more-btn');

    $('.more-btn').click(function(){
        $(this).toggleClass('active');
        $('.main-navigation').toggleClass('active');
    })
});

new Swiper('.swiper-container', {

	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 30, // 슬라이드간 간격
	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loopFillGroupWithBlank : true,

	loop : true, // 무한 반복

	pagination : { // 페이징
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

const cursorParent = document.getElementById('mouse-cursor')
const cursorChild = cursorParent.children[0]
window.addEventListener('mousemove', mousemove)
window.addEventListener('mousedown', mousedown)
window.addEventListener('mouseup', mouseup)

let scale = 1
let stage = ''
let carouselDirection = ''
let cursorX = 0, cursorY = 0
function mousemove(e) {
    cursorX = e.pageX - cursorParent.offsetWidth / 2
    cursorY = e.pageY - cursorParent.offsetHeight / 2
    cursorParent.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0)`

    switch(e.target.getAttribute('data-cursor')){
        case 'carousel' :
            carouselDirection = cursorX < innerWidth / 2 ? 'next' : 'prev'
            cursorChild.setAttribute('data-name', carouselDirection)
            if(stage === 'carousel') return
            scale = 5
            stage = 'carousel'
            // console.log('carousel')
            break;
        
        case 'link' :
            if(stage === 'link') return
            scale = 5
            stage = 'link'
            cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
            // console.log('carousel')
            break;
         
        case 'img' :
            if(stage === 'img') return
            scale = 1
            stage = 'img'
            cursorChild.setAttribute('data-name', '')
            // console.log('carousel')
            break;
            
        default :
            if(stage === '') return
            scale = 1
            stage = ''
            cursorChild.setAttribute('data-name', '')
            // console.log('default')
            break;    
    }
    cursorChild.style.setProperty('--cursor-scale', scale)
}
function mousedown(e) {
    scale *= 0.8
    cursorChild.style.setProperty('--cursor-scale', scale)
}
function mouseup(e) {
    scale *= 1.25
    cursorChild.style.setProperty('--cursor-scale', scale)
}

$(document).ready(function () {


    var $openBtn = $('.open-btn'),
      $closeBtn = $('.close-btn'),
      $dimLayer = $('.dim-layer'),
      $modal = $('.modal-container');
  
  
    $openBtn.click(function(){
      modalShow();
    });
  
    $closeBtn.click(function(){
      modalHide();
    });
  
    $dimLayer.click(function(){
      modalHide();
    });
  
  
    // 모달을 보여줘요.
    function modalShow(){
      $modal.addClass('active');
      console.log('show');
    }
  
     // 모달을 숨겨줘요.
     function modalHide(){
      $modal.removeClass('active');
      console.log('hide');
    }
  
  });



      