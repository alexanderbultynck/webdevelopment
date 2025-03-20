const setup = () => {
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add('listitem');
    }

    const style = document.createElement('style');
    style.textContent = `.listitem { color: red; }`;
    document.head.appendChild(style);

    const img = document.createElement('img');
    img.src = 'images/mezelf.jpg';
    img.alt = 'A picture of me';

    document.body.appendChild(img);
};

window.addEventListener("load", setup);