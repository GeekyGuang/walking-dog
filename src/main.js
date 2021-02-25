import csstext from './style.js'

let n = 0
let message = ''
let text = document.querySelector('#text')
let ani_text = document.querySelector('#ani-text')

let showMessage = ()=>{
    setTimeout(()=>{
      if(csstext[n] === '\n' ) {
          message += '<br/>'
      } else if(csstext[n] === ' ') {
          message += '&nbsp'
      } else {
          message += csstext[n]
      }
      text.innerHTML = message
      ani_text.innerHTML = csstext.substring(0, n)
      
      n += 1

      if (n < csstext.length){
          showMessage()
      }
    },100)
}

showMessage()