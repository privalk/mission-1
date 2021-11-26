export const backGround =new Image()

const images = []

const register = (img, src) => images.push({img, src})

export const load = async ()=>{
    register(backGround,'image/backGround.png')

    let promises = images.map(e => new Promise(resolve => {
        e.img.src = e.src
        e.img.onload = () => resolve()
      })
    )
  
    await Promise.all(promises)
    console.log("all load")
}