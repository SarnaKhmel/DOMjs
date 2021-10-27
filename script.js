const container = document.getElementById("container");
container.style.height = `300px`;
container.style.width = `300px`;
container.style.display = "grid";

container.style.gridTemplateColumns = "50px 50px 50px 50px 50px"
container.style.gridTemplateRows = "50px 50px 50px 50px 50px"



//container.style.flexDirection = ""

//console.log(container)

const randomColorItem = () => {
    return Math.floor(Math.random() * 255 );
}
container.style.backgroundColor = `rgb(${randomColorItem()}, ${randomColorItem()},${randomColorItem()})`
//console.log(`rgb(${randomColorItem()}, ${randomColorItem()},${randomColorItem()})`);

container.firstElementChild.style.backgroundColor =  `rgb(${randomColorItem()}, ${randomColorItem()},${randomColorItem()})`;
//container.childNodes[2].style.backgroundColor = `rgb(${randomColorItem()}, ${randomColorItem()},${randomColorItem()})`;

container.childNodes[7].style.backgroundColor = `rgb(${randomColorItem()}, ${randomColorItem()},${randomColorItem()})`

// for (let key in container.childNodes){
//     container.childNodes[].style.backgroundColor = `rgb(${randomColorItem()}, ${randomColorItem()},${randomColorItem()})`
// }

const childs = container.childNodes;
for (let i = 1; i < childs.length; i++ ){
    console.log(i);
    if ( i % 2 == 0) {

    }
    else {
        container.childNodes[i].style.backgroundColor = `rgb(${randomColorItem()}, ${randomColorItem()},${randomColorItem()})`
    }
}
