function randomize() {
    var generator = new ColorfulBackgroundGenerator();
    // The parameters are: degree[0-360],
    //                     h[0-360], 
    //                     s[0-1], 
    //                     l[0-1],
    //                     posColor[0-100], 
    //                     posTransparency[0-100]
    // The lowest layer (at the bottom) in the css is the first added layer.
    var posColorArr = [100, 30, 10, 0, 0];
    var posTransparencyArr = [0, 80, 80, 70, 55];
    for (var i=0; i<5; i++) {
        generator.addLayer(new ColorfulBackgroundLayer({
            degree: Math.floor(Math.random() * 360), 
            h: Math.floor(Math.random() * 360), 
            s: Math.random() * (1 - 0.6) + 0.6,
            l: Math.random() * (1 - 0.5) + 0.1, 
            posColor: posColorArr[i],
            posTransparency: posTransparencyArr[i],
        })
        ); // bottom layer
    }
    // Assign generated style to the element identified by it's id
    generator.assignStyleToElementId("body");
}