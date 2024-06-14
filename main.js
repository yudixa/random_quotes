// Quote fragments
const quoteFragments = {
    sad: [
        ["Every day may not be good, ", "but there is something good in every day."],
        ["Keep your face always toward the sunshine—and ", "shadows will fall behind you."],
        ["The only way to do great work is to ", "love what you do."],
        ["Believe you can ", "and you're halfway there."]
    ],
    happy: [
        ["The purpose of our lives ", "is to be happy."],
        ["Happiness is not something ready made. ", "It comes from your own actions."],
        ["The best way to cheer yourself ", "is to try to cheer someone else up."],
        ["Happiness is when ", "what you think, what you say, and what you do are in harmony."]
    ],
    anger: [
        ["For every minute you remain angry, ", "you give up sixty seconds of peace of mind."],
        ["Anger is an acid that can do more harm to the vessel in which it is stored ", "than to anything on which it is poured."],
        ["Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; ", "you are the one who gets burned."],
        ["The greatest remedy for anger is ", "delay."]
    ],
    neutral: [
        ["Life is 10% what happens to us ", "and 90% how we react to it."],
        ["Life is really simple, ", "but we insist on making it complicated."],
        ["In the end, ", "it's not the years in your life that count. It's the life in your years."],
        ["The best way to predict your future is to ", "create it."]
    ]
};

// Function to generate a random quote based on a given feeling
function generateQuote(feeling) {
    // Check if the feeling is valid
    if (!quoteFragments[feeling]) {
        return "Sorry, I don't have quotes for that feeling.";
    }

    // Get the array of quote fragments for the feeling
    const fragments = quoteFragments[feeling];

    // Select a random quote fragment
    const randomIndex = Math.floor(Math.random() * fragments.length);
    const selectedFragment = fragments[randomIndex];

    // Combine the fragments to form a quote
    const quote = selectedFragment[0] + selectedFragment[1];

    return quote;
}

// Function to get a random feeling
function getRandomFeeling() {
    const feelings = Object.keys(quoteFragments);
    const randomIndex = Math.floor(Math.random() * feelings.length);
    return feelings[randomIndex];
}

// Example usage: Generate a random quote for each feeling
// console.log("Quote for sad: ", generateQuote('sad'));
// console.log("Quote for happy: ", generateQuote('happy'));
// console.log("Quote for anger: ", generateQuote('anger'));
// console.log("Quote for neutral: ", generateQuote('neutral'));

// Example usage: Generate a random quote for a random feeling
const randomFeeling = getRandomFeeling();
console.log(`Quote for ${randomFeeling}: `, generateQuote(randomFeeling));