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
    const userName = document.getElementById('user-name').value;
    if (userName.trim() === "") {
        alert("Please enter your name to view a fact.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = `${userName}, here's a fact: ${facts[randomIndex]}`;
});

document.getElementById('submit-feedback').addEventListener('click', function() {
    const feedback = document.getElementById('feedback').value;
    if (feedback.trim() === "") {
        alert("Please enter your feedback before submitting.");
        return;
    }
    alert("Thank you for your feedback!");
    document.getElementById('feedback').value = ""; // Clear the feedback input
});
