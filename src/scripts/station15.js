function displayList(){
    const result = document.getElementById('fruits');
    const fruitsList = document.querySelectorAll("#fruits p");
    const ulElm = document.createElement('ul');
    for(let i = 0; i < fruitsList.length; i++){
        const liElm = document.createElement("li");
        liElm.textContent = fruitsList[i].textContent;
        ulElm.appendChild(liElm);
    }
    result.innerHTML = '';
    result.appendChild(ulElm);
}