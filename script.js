function changeImage() {
    var image = document.getElementById("ad-img");
    var title = document.getElementById("ad-title");
    var path = "imgs/";
    var images = ["tipaz.jpg", "ze-ez.jpg", "retail.jpg"];    
    var titles = ["טיפז", "yellow click&pick", "שטחי מסחר פז סנטר"];    

    var currImg = path + image.src.substring(image.src.lastIndexOf('/')+1);
    // console.log(currImg);

    var idx = 0;
    if (currImg == path + images[0]) {
        idx = 1;
    } else if (currImg == path + images[1]) {
        idx = 2;
    } else {
        idx = 0;
    }

    image.src = path + images[idx];    
    title.innerHTML = titles[idx];
}