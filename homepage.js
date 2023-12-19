let points = [
    {
        Image: "./styles/check.png",
        text: "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
    },
    {
        Image: "./styles/check.png",
        text: "Vulputate placerat amet pulvinar lorem nisl",
    },
    {
        Image: "./styles/check.png",
        text: "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed",
    },
    {
        Image: "./styles/check.png",
        text: "Etiam duis lobortis in fames ultrices commodo nibh.",
    },
    {
        Image: "./styles/check.png",
        text: "Tincidunt sagittis neque sem ac eget.",
    },
    {
        Image: "./styles/check.png",
        text: "Ultricies amet justo et eget quisque purus vulputate dapibus tortor.",
    },
];
let htmlId = document.getElementById('checkk');
for(element of points){
    let mainDiv = document.createElement('div');
    htmlId.appendChild(mainDiv);
    mainDiv.className = 'points'

    let imageTag = document.createElement('img');
    mainDiv.appendChild(imageTag);
    imageTag.className = 'imageChack';
    imageTag.src = element.Image

    let textTag = document.createElement('p');
    mainDiv.appendChild(textTag);
    textTag.textContent = element.text
};

let team = [
    {
        tutorImage: "./styles/4.svg",
        name: "Diane Russell",
        position: "Founder and CEO",
    },
    {
        tutorImage: "./styles/1.svg",
        name: "Jerome Bell",
        position: "Founder and Program Director",
    },
    {
        tutorImage: "./styles/3.svg",
        name: "Kristine Watson",
        position: "Marketer, Curator of Marketing Course",
    },
    {
        tutorImage: "./styles/2.svg",
        name: "Marvin McKinney",
        position: "PM, Curator of Management Course",
    },
];
let tutors = document.getElementById('team')
for(elem of team){
    let essentialDiv = document.createElement('div');
    tutors.appendChild(essentialDiv);
    essentialDiv.className = 'team';

    let photoTag = document.createElement('img');
    essentialDiv.appendChild(photoTag);
    photoTag.className = 'tutorsImage';
    photoTag.src = elem.tutorImage;

    let nameTag = document.createElement('p');
    essentialDiv.appendChild(nameTag);
    nameTag.className = 'tutorsName'
    nameTag.textContent = elem.name;

    let positionTag = document.createElement('p');
    essentialDiv.appendChild(positionTag);
    positionTag.textContent = elem.position;
    positionTag.className = 'position'
};