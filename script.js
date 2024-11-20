const facts = [ 
    "I love spending time with my friends",
    "I am aspiring to excel in the field of cybersecurity",
    "I enjoy roasting people a lot",
    "I consider myself very notorious",
    "I often get caught talking and chilling in class",
    "I have a tall friend whom I love to hit, even though I can't reach them",
    "I am the shortest guy in my college and am known for doing a lot of funny stuff, earning me the nickname 'chhota packet bada dhamaka'",
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
