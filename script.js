const bigImage = document.getElementById('bigImage')

const smallImage1 = document.getElementById('smallImage1')
const smallImage2 = document.getElementById('smallImage2')
const smallImage3 = document.getElementById('smallImage3')


smallImage1.addEventListener('click', () => {
    const image1 = 'image/big-shoe1.png'
    let getAtt = bigImage.getAttribute('src')
    let getSmAtt = smallImage1.getAttribute('src')
    console.log(getSmAtt)
    if(getSmAtt !== getAtt){
        bigImage.setAttribute('src', image1)
      
    }
     
})
smallImage2.addEventListener('click', () => {
    const image2 = 'image/big-shoe2.png'
    const classImg2 = document.getElementById('smImg2')
    let getAtt = bigImage.getAttribute('src')
    let getSmAtt = smallImage2.getAttribute('src')
    console.log(getSmAtt)
     if(getSmAtt !== getAtt){
        bigImage.setAttribute('src', image2)
      
    }
})
smallImage3.addEventListener('click', () => {
    const image3 = 'image/big-shoe3.png'
    let getAtt = bigImage.getAttribute('src')
    let getSmAtt = smallImage3.getAttribute('src')
    console.log(getSmAtt)
    if(getSmAtt !== getAtt){
        bigImage.setAttribute('src', image3)
      
    }
})

