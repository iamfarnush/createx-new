let blogInfo = [
    {
        surat: "./images/image3.svg",
        date: "Marketing | September 4, 2020",
        title: "What is traffic arbitrage and does it really make money?",
        text: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
    },
    {
        surat: "./images/image5.svg",
        date: "Development | September 1, 2020",
        title: "How to choose the first programming language for a beginner",
        text: "Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui..",
    },
    {
        surat: "./images/image.svg",
        date: "Design | August 8, 2020 ",
        title: "Should you choose a creative profession if you are attracted to creativity?",
        text: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
    },
    {
        surat: "./images/image6.svg",
        date: "Management | August 2, 2020 ",
        title: "What to do and who to talk to if you want to get feedback on the product",
        text: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...",
    },
    {
        surat: "./images/image1.svg",
        date: "Design | July 28, 2020",
        title: "What are color profiles and how they work in graphic design",
        text: "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend..",
    },
    {
        surat: "./images/image4.svg",
        date: "Design | July 28, 2020",
        title: "What are color profiles and how they work in graphic design",
        text: "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend..",
    },
];
let blogdiv = document.getElementById('blogs');
for(element of blogInfo) {
    let mainDiv = document.createElement('div');
    blogdiv.appendChild(mainDiv);
    mainDiv.className = 'mainDiv';

    let imageTag = document.createElement('img');
    mainDiv.appendChild(imageTag);
    imageTag.src = element.surat;
    imageTag.className = 'suraten'

    let dateTag = document.createElement('p');
    mainDiv.appendChild(dateTag);
    dateTag.textContent = element.date;
    dateTag.className = 'date';

    let titleTag = document.createElement('h4');
    mainDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = 'title';

    let textTag = document.createElement('p');
    mainDiv.appendChild(textTag);
    textTag.textContent = element.text;
    textTag.className = 'textBlog';
};