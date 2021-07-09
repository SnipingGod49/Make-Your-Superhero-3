var canvas=new fabric.Canvas("myCanvas")

var block_width = 30
var block_height = 30

var player_x = 10
var player_y = 10

var block_x = 120
var block_y = 120

var player_object = ""

function player_update()
{
fabric.Image.fromURL("player.png",function(Img){
    console.log("player_update")
    player_object=Img 
    player_object.scaleToWidth(150)
    player_object.scaleToHeight(140)
    player_object.set( {
        top:player_y,left:player_x
    }); 
    canvas.add(player_object)
    
});

}
function new_image(get_img)
{
    fabric.Image.fromURL(get_img,function(Img){
    block_object=Img 
    block_object.scaleToWidth(block_width)
    block_object.scaleToHeight(block_height)
    block_object.set( {
        top:player_y,left:player_x
    }); 
    canvas.add(block_object)
    
});
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftKey == true && keyPressed == '80' )
{
console.log("p and shift pressed together")
block_width = block_width + 10;
block_height = block_height + 10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;
}
if(e.shiftKey && keyPressed == '77')
{
    console.log("m and shift pressed together")
block_width = block_width - 10;
block_height = block_height - 10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;
}

if(keyPressed == '38')
{
up();
console.log("up");
}

if(keyPressed == '40')
{
down();
console.log("down");
}

if(keyPressed == '37')
{
left();
console.log("left");
}

if(keyPressed == '39')
{
right();
console.log("right");
}

if(keyPressed == '70')
{
new_image('ironman_face.png')
console.log("f");
}

if(keyPressed == '66')
{
new_image('spiderman_body.png')
console.log("b");
}

if(keyPressed == '76')
{
new_image('hulk_legs.png')
console.log("l");
}

if(keyPressed == '82')
{
new_image('thor_right_hand.png')
console.log("r");
}

if(keyPressed == '72')
{
new_image('captain_america_left_hand.png')
console.log("h");
}

}


function up()
{ 
if ( player_y >= 0 ){
    console.log("inside-up")
    player_y = player_y - block_height;
    canvas.remove(player_object);
    player_update();
}

}


function down()
{
    if ( player_y <= 500)
    {
        console.log("inside-down")
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
    }
}


function left()
{
    if ( player_x >= 0 )
    {
        console.log("inside-left")
        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update(); 
    }
}


function right()
{
    if ( player_x <= 900 )
    {
        console.log("inside-right")
        player_x = player_x + block_width;
        canvas.remove(player_object);
        player_update();  
    }
}