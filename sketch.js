var snitchImage, harryImage, harry, snitch, cloudImage
var draco, dracoImage, dementors, dementorsImage, deathEater, deathEaterImage
//var  backdrop

function preload(){
    snitchImage = loadImage("snitch_image.jpg")
    harryImage = loadImage("harry.png")
   // backdrop = loadImage("backdrop.jpg")
    dracoImage = loadImage("Draco.png")
    cloudImage = loadImage("cloud.png")
    dementorsImage = loadImage("dementors.png")
}

function setup(){
    createCanvas(1200,400)
    harry = createSprite(200, 200, 20, 20)
    harry.addImage("harry",harryImage)
    snitch = createSprite(400, 200, 10, 10)
    snitch.addImage("snitch",snitchImage)
    draco = createSprite(500,200,20,20)
    draco.addImage("draco",dracoImage)
    dementors = createSprite(500,200,20,20)
    dementors.addImage("dementors",dementorsImage)
    //deathEater = createSprite(500,200,20,20)
    //deathEater.addImage("deathEater",deathEaterImage)
   
}

function draw(){
    background("lightBlue")
    background.velocityX = -4
    if(background.x < 0){
        background.x = background.width/2
    }
    spawnCloud()
    drawSprites()
}
function spawnCloud(){
    if(frameCount % 100 === 0){
        var cloud = createSprite(1210,random(82,300),40,10)
        cloud.addImage("cloud",cloudImage)
        cloud.velocityX = -6
        cloud.scale = 3
    }
}

function spawnDementors(){
    if(frameCount % 200 === 0){
        dementors = createSprite(1210,random(70,350),20,20)
        dementors.addImage("dementors",dementorsImage)
        dementors.velocityX = -8
    }
}