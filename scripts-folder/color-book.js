// window.addEventListener("load", () => {
// Note: Commented out to allow onClick to work

    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");


    canvas.height = 500;
    canvas.width = 500;

    let start_background_color = "white";
    context.fillStyle = start_background_color;
    context.fillRect(0, 0, canvas.width, canvas.height);


    // Variables
    let draw_color = "black";
    let draw_width = "10";
    let is_drawing = false;

    let slider = document.getElementById("penRange");
    let output = document.getElementById("pen-width");
    output.textContent = slider.value;

    //Array

    let store_array = [];
    let index = -1;

    let removed_array = [];
    let indexRemoved = -1;

    // EventListeners


    // For computer
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
        if(is_drawing) {
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
    }

    function stop(event) {
        if (is_drawing) {
            context.stroke();
            context.closePath();
            is_drawing = false;

            store_array.push(context.getImageData(0, 0, canvas.width, canvas.height));

            index += 1;
        
        }
        context.beginPath(); //to close the path if pen goes off the canvas

        event.preventDefault();

    }

    // Pen Width
    slider.oninput = function () {
        draw_width = this.value;
        output.textContent = this.value;
    }

    // UNDO Function 
    function undo_last() {
        if (index === 0) {
            return;
        } else if (index < 0) {
            clear_canvas();
        } else {
            
            removed_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            indexRemoved += 1;
            
            store_array.pop();
            index -= 1;

            context.putImageData(store_array[index], 0, 0);

            document.querySelector(".redo").disabled = false;
        }
    }

    function redo_last() {
        if (index === -1)  {
            context.putImageData(removedLast[0], 0, 0);
            store_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            index += 1;
        } else {
            context.putImageData(removed_array[indexRemoved], 0, 0);
            removed_array.pop();
            indexRemoved -= 1;

            //to put the returned imaged back to the restore_array

            store_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            index += 1;

            if (removed_array.indexOf(removed_array[indexRemoved]) === -1) {
                document.querySelector(".redo").disabled = true; //Needed to prevent error
            }
        }
    }





// });