let aboutCourses = [
    {
        Image: "./images/1.svg",
        course: "Marketing",
        title: "The Ultimate Google Ads Training Course",
        price: "$100 | by Jerome Bell",
    },
    {
        Image: "./images/2.svg",
        course: "Management",
        title: "Prduct Management Fundamentals",
        price: "$480 | by Marvin McKinney",
    },
    {
        Image: "./images/image1.svg",
        course: "HR & Recruting",
        title: "HR  Management and Analytics",
        price: "$200 | by Leslie Alexander L",
    },
    {
        Image: "./images/3.svg",
        course: "Marketing",
        title: "Brand Management & PR Communications",
        price: "$530 | by Kristin Watson",
    },
    {
        Image: "./images/image4.svg",
        course: "Design",
        title: "Graphic Design Basic",
        price: "$500 | by Guy Hawkins",
    },
    {
        Image: "./images/4.svg",
        course: "Management",
        title: "Business Development Management",
        price: "$400 | by Dianne Russell",
    },
    {
        Image: "./images/image2.svg",
        course: "Development",
        title: "Highload Software Architecture",
        price: "$600 | by Brooklyn Simmons",
    },
    {
        Image: "./images/image5.svg",
        course: "HR & Recruting",
        title: "Selection and Recruitment",
        price: "$150 | by Kathryn Murphy",
    },
    {
        Image: "./images/image3.svg",
        course: "Design",
        title: "Human-centered Design",
        price: "$240 | by Cody Fisher",
    },
    
];
let course = document.getElementById('authors');
for(element of aboutCourses){
    let mainDiv = document.createElement('div');
    course.appendChild(mainDiv);
    mainDiv.className = 'mainDiv';

    let imageTag = document.createElement('img');
    mainDiv.appendChild(imageTag);
    imageTag.src = element.Image;
    imageTag.className = 'images';

    let courseTag = document.createElement('p');
    mainDiv.appendChild(courseTag);
    courseTag.textContent = element.course;
    courseTag.className = 'courseName';

    let titleTag = document.createElement('h4');
    mainDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = 'title';

    let priceTag = document.createElement('h4');
    mainDiv.appendChild(priceTag);
    priceTag.textContent = element.price;
    priceTag.className = 'price';
};