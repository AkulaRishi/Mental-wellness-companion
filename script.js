document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        appendMessage('User', userInput);
        processResponse(userInput);
        document.getElementById('userInput').value = '';
    }
});
function appendMessage(sender, message) {
    const chatlog = document.getElementById('chatlog');
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatlog.appendChild(newMessage);
}

function processResponse(input) {
    let botResponse;

    // Basic responses for mental health issues and mood descriptions
    if (input.toLowerCase().includes('anxious') || input.toLowerCase().includes('anxiety')) {
        botResponse = 'Feeling anxious can be overwhelming. Try some deep breathing exercises, grounding techniques, or journaling to help ease your mind. If it persists, consider speaking to a mental health professional.';
    } else if (input.toLowerCase().includes('stressed') || input.toLowerCase().includes('stress')) {
        botResponse = 'Stress can take a toll on your well-being. Take a moment to pause, breathe deeply, and focus on self-care activities like a walk or listening to calming music.';
    } else if (input.toLowerCase().includes('sad') || input.toLowerCase().includes('depressed')) {
        botResponse = 'Feeling sad or low is tough. It can help to talk to someone you trust, engage in activities you enjoy, or try journaling your thoughts. Seek professional support if needed.';
    } else if (input.toLowerCase().includes('lonely')) {
        botResponse = 'Loneliness can be hard. Consider reaching out to a friend or loved one, joining a community group, or exploring hobbies to connect with others.';
    } else if (input.toLowerCase().includes('happy') || input.toLowerCase().includes('joyful')) {
        botResponse = 'It’s wonderful to hear that you’re feeling happy! Celebrate and cherish these moments. Maybe share your positivity with someone else!';
    } else if (input.toLowerCase().includes('angry') || input.toLowerCase().includes('frustrated')) {
        botResponse = 'Anger can be intense. Try to step back, take a few deep breaths, or do something active to release the tension. Reflect on the cause once you feel calmer.';
    } else if (input.toLowerCase().includes('tired') || input.toLowerCase().includes('exhausted')) {
        botResponse = 'Feeling tired or exhausted might mean you need a break. Make sure to rest, hydrate, and give yourself permission to recharge.';
    } else if (input.toLowerCase().includes('overwhelmed')) {
        botResponse = 'Feeling overwhelmed? Try breaking tasks into smaller steps and prioritizing. Remember, it’s okay to ask for help and take things one step at a time.';
    } else if (input.toLowerCase().includes('grateful') || input.toLowerCase().includes('thankful')) {
        botResponse = 'Gratitude is a wonderful emotion. Reflecting on what you’re thankful for can bring even more positivity into your day!';
    } else if (input.toLowerCase().includes('calm') || input.toLowerCase().includes('peaceful')) {
        botResponse = 'Feeling calm is a great state of mind. Consider practices like meditation or mindfulness to maintain this sense of peace.';
    } else {
        botResponse = 'Im here with only some atrributes in future i will develope some more attributes.THANK YOU';
    }

    appendMessage('Bot', botResponse);
}
