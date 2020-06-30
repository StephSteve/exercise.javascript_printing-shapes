function getLine(length) {
    // TODO - write method definition here
   let output = "";
   for(let i=0; i<length; i++) {
    output += "*";
   }
   return output;
}



function getBox(width, height) {
    // TODO - write method definition here
    var output = "";
    for(var h=0;  h<height; h++) {
        for(var w=0;  w<width; w++){
            output +="*";
           
        }
        output += "\n";
    }
    return output; 
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var output = "";
    for(l=1; l<=length; l++){
        output += getLine(l) + "\n";
    }
    return output;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here iterate backwards
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
