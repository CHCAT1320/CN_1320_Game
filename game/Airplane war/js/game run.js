  // body宽高
  let cw = 480,ch = 700
  let body = document.getElementById('body')
  body.style.width = `${cw}px`
  body.style.height = `${ch}px`

  // body缩放
  function windowResize() {
    // 窗口宽高
    let w = window.innerWidth, h = window.innerHeight
    // 缩放比例
    let r = w / cw < h / ch ? w / cw : h / ch
    body.style.transform = `scale( ${r})`
    body.style.marginLeft = (-(cw - r * cw) / 2 + (w - r * cw) / 2) + 'px'
    body.style.marginTop = (-(ch - r * ch) / 2 + (h - r * ch) / 2) + 'px'
    body.style.marginBottom = (-(h>ch?h:ch - r * ch)) + 'px'
    body.style.marginRight = (-(w>cw?w:cw - r * cw)) + 'px'
  }
  windowResize()
  // 监听窗口尺寸变化
  window.addEventListener('resize', windowResize);

  

	
//function toggleMusic(element) {
           // element.classList.toggle('active');
      //  }
		
//音乐开关
function toggleMusic(element) {
            var audio = document.getElementById('bgm');

            if (element.classList.contains('active')) {
                audio.pause();
            } else {
                audio.play();
            }

            element.classList.toggle('active');
        }
	
//开始游戏	
//function hideStartButton() {
//  var startButton = document.getElementById("start-game-img-button");
//  startButton.style.display = "none";
//  var startButton = document.getElementById("title-img");
//  startButton.style.display = "none";
//}

					setInterval(function() {
					  // 创建新的子弹元素
					  var bullet = document.createElement("div");
					  bullet.setAttribute("id", "bullet");
					
					  // 获取玩家飞机的位置
					  var playerAircraft = document.getElementById("player-aircraft");
					  var playerTop = parseInt(playerAircraft.style.top);
					  var playerLeft = parseInt(playerAircraft.style.left);
					
					  // 设置子弹的初始位置
					  var bulletTop = playerTop-10;
					  var bulletLeft = playerLeft+50;
					
					  bullet.style.top = bulletTop + "px";
					  bullet.style.left = bulletLeft + "px";
					
					  // 将子弹元素添加到页面中
					  document.body.appendChild(bullet);
					
					  // 更新子弹位置
					  var bulletInterval = setInterval(function() {
					    bulletTop -= 10;
					    bullet.style.top = bulletTop + "px";
					
					    // 获取背景元素的高度
					    var background = document.getElementById("background");
					    var backgroundHeight = parseInt(background.offsetHeight);
					
					    // 如果子弹飞出背景区域，则删除子弹
					    setInterval(function(){
							clearInterval(bulletInterval);
							bullet.remove();
						},3500);
					  }, 60);
					
					}, 500);


