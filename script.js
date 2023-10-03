const main_container = document.querySelector('.container');
const reset_button = document.querySelector('.reset');
const erase_button = document.querySelector('.erase');

erase_button.addEventListener('click',setErase);

reset_button.addEventListener('click',resetBoard);

let mousedown = false;
document.body.onmousedown = () => (mousedown = true)
document.body.onmouseup = () => (mousedown = false)

let erase_mode = false;

function create_board(number_boxes) {
    let box_width = (18/number_boxes)+"rem";
    let box_height = (18/number_boxes)+"rem";

    for(let i=0; i<number_boxes; i++) {
        const new_sub_cont = document.createElement('div');
        new_sub_cont.setAttribute('style','display:flex;justify-content:space-evenly;gap:2px;');
        for(let j=0; j<number_boxes; j++) {
            const new_box = document.createElement('div');
            new_box.setAttribute('style','background-color:blue;box-sizing:content-box;flex:1;');
            new_box.setAttribute('class','box-class');
            new_box.style.width = box_width;
            new_box.style.height = box_height;
            new_box.addEventListener('mouseover',changeColor);
            new_box.addEventListener('mousedown',changeColor);
            new_sub_cont.appendChild(new_box);
        }
        main_container.appendChild(new_sub_cont);
    }
}

function setErase() {
    if(erase_mode==true) {
        erase_mode=false;
        console.log("Erase mode set to false");
        return;
    }
    erase_mode=true;
    console.log("erase mode set to true");
}

function changeColor(e) {
    if(e.type === 'mouseover' && !mousedown) return
    if(erase_mode==true) {
        e.target.style.backgroundColor="blue";
    } else {
        e.target.style.backgroundColor = "red";
    }
    
}

function resetBoard() {
    let boxes = document.querySelectorAll('.box-class');
    for(let i=0; i<boxes.length;i++) {
        boxes[i].style.backgroundColor="blue";
    }

}

create_board(4);

