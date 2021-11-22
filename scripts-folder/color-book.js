window.addEventListener("load", () => {

    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");


    canvas.height = 500;
    canvas.width = 500;

    let start_background_color = "white";
    context.fillStyle = start_background_color;
    context.fillRect(0, 0, canvas.width, canvas.height);


    //variables
    let is_drawing = false;
    let draw_color = "black";
    let draw_width = "10";



    //EventListeners


    //For computer
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("mouseup", stop, false);
    canvas.addEventListener("mouseout", stop, false);

    

    function start(event) {
        is_drawing = true;
        draw(event);
        
        event.preventDefault(); //To prevent default changes to appear

    }



    function draw(event) {
        if(!is_drawing) {
            return;
        }

        context.lineTo(event.clientX-canvas.offsetLeft, event.clientY-canvas.offsetLeft);

        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;



        context.lineCap = "round";
        

        

        context.stroke();


        //To make path smoother
        context.beginPath();
        context.moveTo(event.clientX, event.clientY);

        event.preventDefault();
    }

    function stop(event) {
        if (is_drawing) {
            context.stroke();
            context.closePath();
            is_drawing = false;

        
        }
        context.beginPath(); //to close path if pen goes off the canvas

        event.preventDefault();

    }



});