// Generate index

const generateIndex = num => {
    return Math.floor(Math.random() * num);
}

const jokes = [
"I'm afraid for the calendar. Its days are numbered.",
"My wife said I should do lunges to stay in shape. That would be a big step forward.",
"Why do fathers take an extra pair of socks when they go golfing?/" /"In case they get a hole in one!",
"Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
"What do a tick and the Eiffel Tower have in common?\" \"They're both Paris sites.",
"What do you call a fish wearing a bowtie?\" \"Sofishticated.",
"How do you follow Will Smith in the snow?\" \"You follow the fresh prints.",
"If April showers bring May flowers, what do May flowers bring?\" \"Pilgrims.",
"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
"How does dry skin affect you at work?\" \"You don’t have any elbow grease to put into it.",
]

const printRandomJoke = jokes => {
    const index = generateIndex(jokes.length);
    console.log(jokes[index-1]);
}


printRandomJoke(jokes);

