const modal = document.getElementById('main-modal')
const hamburger = document.getElementById('section-left');
const main = document.getElementById('main-content');
const sidePanal = document.getElementById('menu-content');

function onModalButtonClick() {
  console.log('on modal button click');
  modal.style.display = 'block';
};

function onModalClose() {
  modal.style.display = 'none';
}


function onHamburgerClick() {
  hamburger.classList.toggle('hamburger-visible');
}

function onDomLoaded() {
  addMainContent();
  addMenuContent();
}

function addMainContent() {
  main.innerHTML = content;
}

function addMenuContent() {
  navigationMenu.forEach(item => {
    let ele = document.createElement('li');
    ele.innerHTML = item.title;
    ele.classList.add('nav-list');
    item.list.forEach(sublist => {
      let subElement = document.createElement('li');
      subElement.classList.add('nav-sublist');
      subElement.innerHTML = sublist;
      ele.appendChild(subElement);
    })

    sidePanal.appendChild(ele);

  });
}

function onSidePanalLoaded() {
  console.log('Hello world!')
};




