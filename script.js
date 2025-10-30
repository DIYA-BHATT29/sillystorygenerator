function generateTenLineStory(name, humorStyle) {
  
    const sillyEvents = [
        `One morning, ${name} woke up inside a giant watermelon.`,
        `A herd of tiny elephants marched across their slippers.`,
        `Breakfast featured waffles that sang opera solos from the toaster.`,
        `${name} wore mismatched shoes, and both demanded to be the left one.`,
        `A stray penguin asked ${name} how to open a lemonade stand.`,
        `Sudden rain made all the furniture start to salsa dance.`,
        `${name}'s pet snail challenged a racing car and nearly won.`,
        `The neighborhood cats threw a tea party for local pigeons.`,
        `${name} taught a group of ducks how to ride bicycles.`,
        `At bedtime, ${name}'s pillow whispered, "Time for your adventure in Marshmallow Land!"`,
        `During lunch, ${name} found their soup filled with tiny juggling clowns.`,
        `A cloud floated into the room, delivering glittery socks for everyone.`,
        `${name} accidentally joined a parade led by hopping pineapples.`,
        `The mailbox started telling jokes every time ${name} walked by.`,
        `${name} made friends with bubbles that refused to pop and instead sang lullabies.`
    ];
    
    let selected = [];
    let pool = sillyEvents.slice(); 

    for (let i = 0; i < 10; i++) {
        if(pool.length === 0) break;
        let idx = Math.floor(Math.random() * pool.length);
        selected.push(pool[idx]);
        pool.splice(idx, 1); // 
    }
    return selected.join('\n');
}

document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value.trim() || "Captain Silliness";
    const humorStyle = document.querySelector('input[name="humor"]:checked').value;
    const story = generateTenLineStory(nameInput, humorStyle);
    document.getElementById('storyBox').textContent = story;
});

