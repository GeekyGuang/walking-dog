let message = 
`abcdefghijklmn
sdkskjs
sjdkjjsjkdk`

let n = 0
let message2 = ''
let root = document.querySelector('#root')

let showMessage = ()=>{
    setTimeout(()=>{
      if(message[n] === '\n' ) {
          message2 += '<br/>'
      } else if(message[n] === ' ') {
          message2 += '&nbsp'
      } else {
          message2 += message[n]
      }
      root.innerHTML = message2
      n += 1

      if (n < message.length){
          showMessage()
      }
    },100)
}

showMessage()