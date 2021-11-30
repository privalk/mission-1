export const backGroundImg =new Image()
export const ballImg =new Image()

const images = []

const register = (img, src) => images.push({img, src})

export const load = async ()=>{
    register(backGroundImg,'image/backGround.png')
    register(ballImg,'image/ball.png')

    let promises = images.map(e => new Promise(resolve => {
        e.img.src = e.src
        e.img.onload = () => resolve()
      })
    )
  
    await Promise.all(promises)
    console.log("all load")
}