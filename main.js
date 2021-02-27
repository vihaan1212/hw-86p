var canvas = new fabric.Canvas("myCanvas");
man_image_width = 30;
man_image_height = 30;
man_y = 10;
man_x = 10;
var player_object = "";
block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_update = Img;
        player_update.scaleToWidth(150);
        player_update.scaleToHeight(140);
        player_update.set({
            top: man_y,
            left: man_x
        });
        canvas.add(player_update);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img) {
        new_image_object = Img;
        new_image_object.scaleToWidth(block_image_width);
        new_image_object.scaleToHeight(block_image_height);
       new_image_object.set({
            top: man_y,
            left: man_x
        });
        canvas.add(new_image_object);
    });

}