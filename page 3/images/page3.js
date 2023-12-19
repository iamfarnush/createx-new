let inform = [
    {
        picture1: "./ic-structure.svg",
        title: "Structured Approach",
        text: "Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",

    },
    {
        picture1: "./ic-chat.svg",
        title: "Professional Feedbacks",
        text: "Culpa nostrud commodo ea consequat reprehenderit aliquip.",

    },
    {
        picture1: "./ic-target.svg",
        title: "Efficiency",
        text: "Viverra scelerisque consequat net. Adipisicing esse consequat.",

    },
    {
        picture1: "./ic-calendar.svg",
        title: "Flexible Shedule",
        text: "Aute eiusmod dolore dolore deserunt veniam ad deserunt",
    },
];
let value = document.getElementById('values');
for (element of inform) {
    let mainDiv = document.createElement('div');
    value.appendChild(mainDiv);
    mainDiv.className = 'mainDiv';

    let pic1 = document.createElement('img');
    mainDiv.appendChild(pic1);
    pic1.src = element.picture1;
    pic1.className = 'pic1';

    let titleTag = document.createElement('h3');
    mainDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = 'title';

    let textTag = document.createElement('p');
    mainDiv.appendChild(textTag);
    textTag.textContent = element.text;
    textTag.className = 'grayText';

};
let steps = [
    {
        step: "STEP 1",
        info: "Watching online video lectures",
        about: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.",
    },
    {
        step: "STEP 2",
        info: "Passing test",
        about: "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. ",
    },
    {
        step: "STEP 3",
        info: "Curator’s feedback",
        about: "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. ",
    },
    {
        step: "STEP 4",
        info: "Corrections if needed",
        about: "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor..",
    },
];
let aboutSteps = document.getElementById('first');
for (elem of steps) {
    let mainStep = document.createElement('div');
    aboutSteps.appendChild(mainStep);
    mainStep.className = 'div2';

    let stepTag = document.createElement('h4');
    mainStep.appendChild(stepTag);
    stepTag.textContent = elem.step;
    stepTag.className = 'step';

    let infoTag = document.createElement('h3');
    mainStep.appendChild(infoTag);
    infoTag.textContent = elem.info;
    infoTag.className = 'info';

    let aboutTag = document.createElement('p');
    mainStep.appendChild(aboutTag);
    aboutTag.textContent = elem.about;
    aboutTag.className = 'aboutTag';
};
let pics = [
    {
        pic11: "./logo/Complete Health Logo - Untitled Page.png",
        pic22: "./logo/Atlantis Health Logo.png",
        pic33: "./logo/Del Mar Strategy Logo.png",
        pic44: "./logo/For Sale Logo.png",
        pic55: "./logo/Happy Home Logo.png",
        pic66: "./logo/Higher Fit Logo - Untitled Page.png",
        pic77: "./logo/InDepth Consulting Logo - Untitled Page.png",
        pic88: "./logo/National Health Logo.png",
        pic99: "./logo/Sentinal Consulting Logo.png",
        pic10: "./logo/Ultimate Gym Logo.png",
    },
];
let smallpics = document.getElementById('logo');
for (elemens of pics) {
    let main = document.createElement('div');
    smallpics.appendChild(main);
    main.className = 'main';

    let pic111 = document.createElement('img');
    main.appendChild(pic111);
    pic111.src = elemens.pic11;
    pic111.className = 'pics';

    let pic222 = document.createElement('img');
    main.appendChild(pic222);
    pic222.src = elemens.pic22;
    pic222.className = 'pics';

    let pic333 = document.createElement('img');
    main.appendChild(pic333);
    pic333.src = elemens.pic33;
    pic333.className = 'pics';

    let pic444 = document.createElement('img');
    main.appendChild(pic444);
    pic444.src = elemens.pic44;
    pic444.className = 'pics';

    let pic555 = document.createElement('img');
    main.appendChild(pic555);
    pic555.src = elemens.pic55;
    pic555.className = 'pics';

    let pic666 = document.createElement('img');
    main.appendChild(pic666);
    pic666.src = elemens.pic66;
    pic555.className = 'pics';

    let pic777 = document.createElement('img');
    main.appendChild(pic777);
    pic777.src = elemens.pic77;
    pic777.className = 'pics';

    let pic888 = document.createElement('img');
    main.appendChild(pic888);
    pic888.src = elemens.pic88;
    pic888.className = 'pics';

    let pic999 = document.createElement('img');
    main.appendChild(pic999);
    pic999.src = elemens.pic99;
    pic999.className = 'pics';

    let pic100 = document.createElement('img');
    main.appendChild(pic100);
    pic100.src = elemens.pic10;
    pic100.className = 'pics';
}