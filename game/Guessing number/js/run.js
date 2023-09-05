  // body宽高
  let cw = 702,ch = 652
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

  var score=0
  var Score=document.getElementById('score');
  Score.innerHTML="您的分数："+score+"分";
  var Time=120
  var Times=document.getElementById('Timess');
  Times.innerHTML="剩余时间"+Time+"秒";
  setInterval(function(){
	  Time-=1;
	  Times.innerHTML="剩余时间"+Time+"秒";
	  if(Time===0){
		  //alert("你输了")
		  tips.textContent="你输了"
		  score-=2;
		  setInterval(function(){
			  Time=120
			  TEXT.value=""
		  },10)
	  }
  },1000);
  
  //1320---time用在这了，你计时的time咋整
  //凉粉---你管我？
  //凉粉---写你的html去
  //凉粉---滚！
 var time=0
 var b=0
 var c=1000
 var h=document.getElementById('h44');
 h.innerHTML="从"+b+"-"+c+"之间的数中猜（您已经猜了"+time+"次）";
 var ranNum = Math.floor(Math.random() * 1000) + 0;
 var tips = document.getElementById("Tips");
 
 setInterval(function(){
	 Score.innerHTML="您的分数："+score+"分";
	 scores=score
 },10)
 
 function ok(){
	 time+=1
	 setInterval(function(){
	 		 h.innerHTML="从"+b+"-"+c+"之间的数中猜（您已经猜了"+time+"次）";
	 },10);
	 
	   var TEXT = document.getElementById("text");
	   var a = parseInt(TEXT.value);
	 
	   if (a === ranNum) {
	     tips.textContent = "Tips:猜对了！";
		 score+=2;
		 var bgm = document.getElementById("bgm");
		     bgm.play();
		 setInterval(function(){
			 Time=120
			 TEXT.value=""
		 },10)
	   } else if (a < ranNum) {
	     tips.textContent = "Tips:猜小了。";
		 b=parseInt(TEXT.value);
	   } else if(a>ranNum){
	     tips.textContent = "Tips:猜大了。";
		 c=parseInt(TEXT.value);
	   }else{
		   tips.textContent="出错了！"
		   time-=1
	   }
	 
	   
	   TEXT.focus();
	 }

  var url = window.location.href;
  var searchParams = new URLSearchParams(url.split('?')[1]);
  var score = searchParams.get('scores');
  score = parseInt(score);
  if (isNaN(score)) {
    score = 0;
  }


var button = document.getElementById("button1");
button.addEventListener("mousedown", function() {
  button.classList.add("clicked");
});

button.addEventListener("mouseup", function() {
  button.classList.remove("clicked");
});
var buttons = document.getElementById("button2");
buttons.addEventListener("mousedown", function() {
  buttons.classList.add("clicked1");
});

buttons.addEventListener("mouseup", function() {
  buttons.classList.remove("clicked1");
});


var scoreForm = document.getElementById("scoreform");
scoreForm.method="get"
scoreForm.action="Guessing number.html"

scoreForm.addEventListener("submit", function(event) {
event.preventDefault(); // 阻止表单的默认提交行为
var scores = score
    var params = new URLSearchParams();
    params.append('scores', scores);
    var url = "Guessing number.html" + '?' + params.toString();
    window.location.href = url;
});