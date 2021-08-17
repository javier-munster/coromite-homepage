import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-members",
    templateUrl: "./members.component.html",
    styleUrls: ["./members.component.css"]
})
export class MembersComponent implements OnInit {
    Math = Math;

    readonly founders = [
        {
            img: "assets/javier.jpg",
            name: "Javier Munster",
            subtitle: "Co-founder and CEO",
            body: "I have a passion for problem solving, game theory and all things technical. Over the past decade, I’ve enjoyed working with start-ups, Fortune 500 companies and public organizations. My work has been primarily as a full-stack developer. I did my undergrad in Computer Engineering at the University of Waterloo, and did a Master's at the University of Toronto with a specialization in security and distributed event-based systems. In my spare time, I manage a cryptocurrency farm, create hobby apps, and play board games.",
            favourite: {
                thing: "Book",
                info: "Man's Search for Meaning by Viktor Frankl"
            },
            fact: "Published a paper in the Distributed Event-Based Systems conference. Went to New Zealand to present my work."
        },
        {
            img: "assets/roach.jpeg",
            name: "Sieyor Roach",
            subtitle: "Co-founder and CTO",
            body: "I have 6 years of professional experience building technical solutions. I’ve worked with clients local and international in catering an effective technical strategy. I take pride in my accomplishments which include software solutions for Scotiabank, Skyjack, and Nasdaq. I believe in quality and transparency, identifying customer requirements and building a robust solution. I received my Bachelor's degree in Computer Engineering with a minor in Software Engineering from the University of Waterloo.",
            favourite: {
                thing: "Book",
                info: "Shutter Island by Dennis Lehane"
            },
            fact: "In the top 5% of Google Local Guides in Toronto. Received a pair of Google socks as a reward."
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
