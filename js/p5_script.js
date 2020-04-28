// let width = 250;
// let height = 250;
let width;
let height;
let colors = ['#007bff', '#f59f69', '#232931', '#ffffff']
let center_color = 0;
let line_color;
let bg_color;
let grid;
// let drawGrid;
let box_height
let box_width
let w_boxes;
let h_boxes;
let num_clicks;
let rect_num;

let drawEllipse;
function setup(){
    const aboutdiv = document.getElementById('about')
    height = aboutdiv.offsetHeight;
    // width = aboutdiv.offsetWidth;
    width = document.documentElement.clientWidth/2;
    let myCanvas = createCanvas(width, height);
    myCanvas.parent("p5Canvas");
    
    colors = colors.map(x=>color(x));
    line_color = colors[1];
    bg_color = colors[2];
    

    rect_num = 3;
    num_clicks = 1;
    box_width = 10;
    box_height = 10;
    w_boxes = width / box_width;
    h_boxes = height / box_height;

    generateGrid();

    }

function draw() {
        bg_color.alpha = 100
        background(bg_color);
        // if (drawGrid) {
        //     drawBoxes(w_boxes, h_boxes, box_width, box_height);
        // }
        push()
        let fps = frameRate();
        fill(255);
        stroke(0);
        text("FPS: " + fps.toFixed(2), 10, height - 10);
        pop()   

        for (let i = 0; i < h_boxes; i++) {
            for (let j = 0; j < w_boxes; j++) {
                push()

                translate(j * box_width, i * box_height);
                
                let angle = grid[i][j];
                drawLine(angle)

                pop()
            }
        }
        
        // Draw a circle
        strokeWeight(2);
        let c = colors[center_color];
        stroke(c);
        fill(c);
        // show rect after a random number of clicks
        if (num_clicks % rect_num == 0){
            push()
            fill(colors[(center_color + 1)%colors.length])
            stroke(colors[(center_color + 1) % colors.length])
            rectMode(CENTER);
            rect(width/2, height/2, width/2, height/2);
            pop()
        }
        // } else{
        //     ellipse(width/2, height/2, width/4, width/4);
        // }
        if (drawEllipse){
          ellipse(width / 2, height / 2, width / 4, width / 4);
          }
        line(mouseX - 10, mouseY, mouseX + 10, mouseY);
        line(mouseX, mouseY - 10, mouseX, mouseY + 10);
}

function mousePressed() {
    center_color += 1
    center_color %= colors.length;
    // drawGrid = !drawGrid;
    drawEllipse = random()>0.45? true: false;
    num_clicks += 1;
    let offset = floor(random(1, colors.length));
    line_color = colors[(center_color + offset) % colors.length];
    bg_color = colors[(center_color +offset+1) % colors.length];
    

    // choose new number of clicks before showing rectangle
    if (num_clicks % rect_num == 0){
        rect_num = round(random(2, 6));
        generateGrid();
    }
}

function touchStarted(){
    mousePressed();
}


function generateGrid(){
    //TODO check if clicking inside shape, if so don't do anything
    // if (mouseX > (width/2)){
    //     // box_width /= 2;
    //     // box_width = constrain(box_width *2, 1, width)
    //     w_boxes = width / (2*box_width);
        
    // } else{
        
    //     // box_width = constrain(box_width / 2, 1, width);
    //     w_boxes = width / box_width;
        
    // }
    // if (mouseY > (height / 2)) {
        
    //     // box_height = constrain(box_height * 2, 1, height);
    //     h_boxes = height / (2*box_height);
    // } else{
    //     // box_height = constrain(box_height / 2, 1, height);
    //     h_boxes = height / box_height;
    // }


    grid = []
    for (let i = 0; i < h_boxes; i++) {
        let row = [];
        for (let j = 0; j < w_boxes; j++) {
            let n = random();
            // let direction = n > 0.5 ? 1 : 0;
            // let angle;
            if (n > 0.5) {
                // angle = map(random(), 0, 1, 0, HALF_PI);
                // angle = QUARTER_PI;
                row.push(QUARTER_PI);
            } else {
                // angle = map(random(), 0, 1, -HALF_PI, 0);
                // angle = -QUARTER_PI;
                row.push(-QUARTER_PI);
            }
            // row.push(angle);
            // row.push(round(random()));
        }
        grid.push(row);
    }
    
}

function drawBoxes(num_width, num_height, box_width, box_height) {
    push()
    stroke(127);
    strokeWeight(3);
    let center_coords = []
    for (let i = 0; i < num_width; i++) {
        for (let j = 0; j < num_height; j++) {
            start_x = box_width * i
            start_y = box_height * j
            end_x = box_width * (i + 1)
            end_y = box_height * (j + 1)
            box_center = createVector(average(start_x, end_x), average(start_y, end_y))
            center_coords.push(box_center)
            line(start_x, start_y, start_x, end_y)
            line(start_x, start_y, end_x, start_y)
            line(start_x, start_y + box_height / 2, end_x, start_y + box_height / 2)
            line(start_x + box_width / 2, start_y, start_x + box_width / 2, end_y)
        }
    }
    pop()
}

function drawLine(angle) {
    let startx, starty, endx, endy;
    let centerx = box_width / 2;
    let centery = box_height / 2;
    let hypot = sqrt(sq(centerx) + sq(centery))
    if (angle >= 0) {
        startx = centerx + hypot * cos(angle);
        starty = 0;
        endx = centerx - hypot * cos(angle);
        endy = box_height
    } else {
        startx = 0
        starty = centery + hypot * sin(angle);
        endx = box_width;
        endy = centery - hypot * sin(angle);
    }
    push()
    // stroke(255, 125, 100);
    stroke(line_color);
    line(startx, starty, endx, endy)
    pop()
}

function average(x1, x2) {
    return floor((x1 + x2) / 2)
}

function windowResized() {
    const aboutdiv = document.getElementById('about')
    height = aboutdiv.offsetHeight;
    // width = aboutdiv.offsetWidth;
    width = document.documentElement.clientWidth / 2;
    w_boxes = width / box_width;
    h_boxes = height / box_height;


    if (windowWidth <= 768){
        noLoop();
        console.log("no loop")
    } else{
        loop();
        console.log("looping");
    }
    console.log(height, width, h_boxes, w_boxes);

    resizeCanvas(width, height);
    // generateGrid();
    // colorMode(RGB);
    // background(bg_color);
}