var out = document.getElementById('out')
var span1 = document.getElementById('span1')
var btn = document.getElementById('btn1')
var mais = 0
var state = 0
function progress(){
var intervalo = setInterval(()=>{
    out.style.background='conic-gradient(#1f93ed '+mais+'deg , #c2c2dc 0deg)'
    var percent = Math.round(mais/3.6)
    span1.innerHTML = percent+'%'
    mais+=1
    if (mais > 360) {
        mais = 0
    }
    if( state == 0){
        clearInterval(intervalo)
    }
  
},10)

stop()
}

function stop(){
  if (state == 0) {
    btn.innerHTML = 'Stop'
    state = 1
  }else{
      btn.innerHTML = 'Start'
      state = 0
  }

}