const messages = [
    "Daniel",
    "Cristina",
    "Jose",
    "Doris",
    "David",
    "German",
    "Maria"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };