const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const alert = require('alert');

const characters = [
    {
        "id": 1,
        "name": "Sartaj Singh",
        "age": 35,
        "profession": "Inspector",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/sartaj-singh.jpg"
    },
    {
        "id": 2,
        "name": "Ganesh Gaitonde",
        "age": 55,
        "profession": "Don",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/ganesh-gaitonde.jpg"
    },
    {
        "id": 3,
        "name": "Anjali Mathur",
        "age": 32,
        "profession": "RAW Officer",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/anjali-mathur.jpg"
    },
    {
        "id": 4,
        "name": "Khanna Guruji",
        "age": 65,
        "profession": "Saint",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/guruji.jpg"
    },
    {
        "id": 5,
        "name": "Dilip Parulkar",
        "age": 60,
        "profession": "DCP",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/dilip-parulkar.jpg"
    }
];

const episodes = [
    {
        "id": 1,
        "title": "Aswatthama",
        "description": "Sartaj Singh receives a phone call from gangster Ganesh Gaitonde, who tells him to save the city within 25 days. Sartaj sets out to find the truth and what follows is a journey into the dark world of Mumbai's underbelly.",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/1.jpg"
    },
    {
        "id": 2,
        "title": "Halahala",
        "description": "Ganesh Gaitonde's past is revealed as he rises to become a powerful gangster in Mumbai. Sartaj's investigations lead him to links between Gaitonde and corrupt politicians and officers.",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/2.jpg"
    },
    {
        "id": 3,
        "title": "Atapi Vatapi",
        "description": "Sartaj delves deeper into Gaitonde's past and comes across links to a mysterious guru and a shadowy organization known as 'MK'. Meanwhile, Gaitonde's power struggles with other gangsters come to a head.",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/3.jpg"
    },
    {
        "id": 4,
        "title": "Brahmahatya",
        "description": "Sartaj uncovers's Gaitonde's links to the powerful guru and finds himself drawn into the world of spirituality and religion. Meanwhile, Gaitonde's hold over the Mumbai underworld begins to slip as a new rival emerges.",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/4.jpg"
    },
    {
        "id": 5,
        "title": "Sarama",
        "description": "Sartaj's investigations into Gaitonde's past leads him to a dark and unsettling discovery about the city of Mumbai and the people who run it. Gaitonde's rival begins to consolidate his power as the city descends into chaos.",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/5.jpg"
    },
    {
        "id": 6,
        "title": "Ravanayan",
        "description": "Sartaj's investigations take a dangerous turn as he gets closer to the truth behind Gaitonde's warnings. Gaitonde's rival makes a bold move to solidify his hold over the Mumbai underworld.",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/6.jpg"
    },
    {
        "id": 7,
        "title": "Yayati",
        "description": "Sartaj's pursuit of the truth leads him to confront powerful and corrupt individuals who will stop at nothing to keep their secrets safe. Gaitonde's past and present collide as his world begins to unravel.",
        "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/7.jpg"
    }
];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render('index', {characters: characters, episodes: episodes});
})

app.listen(3000, function(){
    console.log("server started");
})