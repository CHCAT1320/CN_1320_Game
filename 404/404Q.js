    let img = document.querySelector('img')
    let x = 0, y = 0
    let xflag = true, yflag = true
    setInterval(() => {

        let w = document.body.offsetWidth
        let h = document.body.offsetHeight

        if (x == 0) xflag = true
        if (y == 0) yflag = true
        if (x == w - img.offsetWidth) xflag = false
        if (y == h - img.offsetHeight) yflag = false

        xflag ? x++ : x--
        yflag ? y++ : y--
        img.style.left = x + 'px'
        img.style.top = y + 'px'
        //console.log(x, y);
    }, 3)
	