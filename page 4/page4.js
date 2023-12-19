let events = [
    {
        date: "18 May",
        time: "10:00 – 12:00",
        title: "The company's business page as an additional tool to support the announcement of vacancies.",
        format: "Online lecture",
        link: "View more",
    },
    {
        date: "27 May",
        time: "11:00 – 12:00",
        title: "Who is a project manager and do I want to be PM?",
        format: "Online lecture",
        link: "View more",
    },
    {
        date: "15 June",
        time: "11:00 – 12:00",
        title: "Marketing or growth hacking: main differences and what business needs",
        format: "Online lecture",
        link: "View more",
    },
    {
        date: "27 June",
        time: "15:00 – 19:00",
        title: "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI",
        format: "Online lecture",
        link: "View more",
    },
    {
        date: "02 July",
        time: "11:00 – 13:00",
        title: "How to brief a client and present your design to approve it from the first show.",
        format: "Online lecture",
        link: "View more",
    },
    {
        date: "10 July",
        time: "09:00 – 14:00",
        title: "Find and evaluate: search and assessment tools for candidates.",
        format: "Online lecture",
        link: "View more",
    },
    {
        date: "16 July",
        time: "10:00 – 13:00",
        title: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
        link: "View more",
    },
    {
        date: "24 July",
        time: "11:00 – 13:00",
        title: "Building a customer service department. Best Practices.",
        link: "View more",
    },
    {
        date: "05 Aug",
        time: "11:00 – 14:00",
        title: "Formation of the organizational structure of the company in the face of uncertainty.",
        link: "View more",
    },
    
];
let eventDiv = document.getElementById('events');
for(element of events){
    let mainDiv = document.createElement('div');
eventDiv.appendChild(mainDiv);
mainDiv.className = 'mainDiv';

let dateTag = document.createElement('h1');
mainDiv.appendChild(dateTag);
dateTag.textContent = element.date;
dateTag.className = 'date';

let timeTag = document.createElement('p');
mainDiv.appendChild(timeTag);
timeTag.textContent = element.time;
timeTag.className = 'time';

let titleTag = document.createElement('h4');
mainDiv.appendChild(titleTag);
titleTag.textContent = element.title;
titleTag.className = 'title';

let linkTag = document.createElement('a');
mainDiv.appendChild(linkTag);
linkTag.href = './page4.html';
linkTag.textContent = element.link;
linkTag.className = 'link';
};