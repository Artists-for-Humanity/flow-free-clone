let level = 1;
let select = true;
let color = ['', 'blue', 'green', 'yellow', 'red'];
let levels = [[
    0, 0, 0, 0, 0, 1, 
    0, 0, 0, 0, 0, 0, 
    1, 0, 0, 0, 0, 0, 
    0, 0, 0, 2, 0, 0, 
    0, 2, 3, 0, 0, 0,
    4, 0, 0, 0, 3, 4
]];

start();
function start() {
    let boxes = document.getElementsByClassName('eachbox');
    let backColor = [];
    let count;
    let selectedBox;
    
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = levels[level - 1][i];
    
        if (levels[level - 1][i] == 0) {
            boxes[i].innerText = '';
            boxes[i].style.backgroundColor = 'transparent';
        } else {
            boxes[i].innerText = levels[level - 1][i];
            boxes[i].style.backgroundColor = color[boxes[i].innerText];
            boxes[i].addEventListener('click', handleClick);
        }
    
        backColor[i] = boxes[i].style['background-color'];
    }
    
    function handleClick(e) {
        const clickedBox = e.target;
    
        if (clickedBox.innerText !== '') {
            selectedBox = clickedBox.innerText;
        }
    }
    
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', (e) => {
            const clickedBox = e.target;
    
            if (clickedBox.innerText === '') {
                clickedBox.style.backgroundColor = color[selectedBox];
                backColor[i] = color[selectedBox];
                count = backColor.filter((item) => item.length < 8);
    
                if (count.length === 36) {
                    check();
                }
            }
        });
    }    

    function check() {
        if (boxes[0].style.backgroundColor === color[1] &&
            boxes[1].style.backgroundColor === color[1] &&
            boxes[2].style.backgroundColor === color[1] &&
            boxes[3].style.backgroundColor === color[1] &&
            boxes[4].style.backgroundColor === color[1] &&
            boxes[5].style.backgroundColor === color[1] &&
            boxes[6].style.backgroundColor === color[1] &&
            boxes[12].style.backgroundColor === color[1] &&

            boxes[25].style.backgroundColor === color[2] &&
            boxes[31].style.backgroundColor === color[2] &&
            boxes[32].style.backgroundColor === color[2] &&
            boxes[33].style.backgroundColor === color[2] &&
            boxes[27].style.backgroundColor === color[2] &&
            boxes[21].style.backgroundColor === color[2] &&

            boxes[14].style.backgroundColor === color[3] &&
            boxes[20].style.backgroundColor === color[3] &&
            boxes[26].style.backgroundColor === color[3] &&
            boxes[15].style.backgroundColor === color[3] &&
            boxes[16].style.backgroundColor === color[3] &&
            boxes[22].style.backgroundColor === color[3] &&
            boxes[28].style.backgroundColor === color[3] &&
            boxes[34].style.backgroundColor === color[3] &&

            boxes[35].style.backgroundColor === color[4] &&
            boxes[29].style.backgroundColor === color[4] &&
            boxes[23].style.backgroundColor === color[4] &&
            boxes[17].style.backgroundColor === color[4] &&
            boxes[11].style.backgroundColor === color[4] &&
            boxes[10].style.backgroundColor === color[4] &&
            boxes[9].style.backgroundColor === color[4] &&
            boxes[8].style.backgroundColor === color[4] &&
            boxes[7].style.backgroundColor === color[4] &&
            boxes[13].style.backgroundColor === color[4] &&
            boxes[19].style.backgroundColor === color[4] &&
            boxes[18].style.backgroundColor === color[4] &&
            boxes[24].style.backgroundColor === color[4] &&
            boxes[30].style.backgroundColor === color[4] 
            ) {
            alert("Level Complete");
        }
    }
}
