let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords);

let count = 0;
storyWords.forEach(function(word) {
count ++;
});

console.log(count);

storyWords = storyWords.filter(function(word) {
return !unnecessaryWords.includes(word);
});
console.log(storyWords);

var betterWords = storyWords.filter(function(word){
return !unnecessaryWords.includes(word);
})
let betterWordsCount = 0;
betterWords.forEach(function(word) {
betterWordsCount ++;
});
console.log(betterWordsCount);

let overUsedCount = betterWords.reduce(function(count, word) {
if (overusedWords.includes(word)) {
    count++;
};
return count;
}, 0);
console.log("Overused word count:", overUsedCount);

let sentenceCount = 0;

betterWords.forEach(function(sent) {
if (sent.endsWith('.') || sent.endsWith('!')) {
    sentenceCount++;
}
});
console.log('Sentence count:', sentenceCount);

console.log(betterWordsCount);
console.log(sentenceCount); 
console.log(overUsedCount);



let challenge = function (betterWordsCount, sentenceCount, overUsedCount) {
    if (betterWordsCount === 182 && sentenceCount === 12 && overUsedCount === 8) {
        console.log(`The number of words in this paragraph is ${betterWordsCount}, with a total of ${sentenceCount} sentences. You also have ${overUsedCount} over used words`)

    };
};
challenge(betterWordsCount, sentenceCount, overUsedCount);


console.log(betterWords.join(' '));
