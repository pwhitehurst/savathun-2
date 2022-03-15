const emojiC = '🇨';
const emojiB = '🇧';
const emojiL = '🇱';
const emojiW = '🇼';
const emoji1 = '1️⃣';
const emoji2 = '2️⃣';
const emoji3 = '3️⃣';
const emoji4 = '4️⃣';

module.exports = {
    activity: {
        activity_emoji: emojiL,
        main_field: { name: 'Last Wish', value: 'React with ' + emojiL, inline: true },
        main_embed: [
            {
                title: 'Last Wish Guide',
                description: 'React with the guide you would like:',
                fields: [
                    { name: 'Wishes', value: 'React with ' + emojiW, inline: true },
                    { name: 'Kalli', value: 'React with ' + emoji1, inline: true },
                ],
            }
        ],
        emoji_used: [
            emojiW,
            emoji1
        ],
        encounters: {
            '🇼': [
                {
                    title: 'Last Wish - Wishes',
                    image: {
                        url: 'https://i.imgur.com/lsLd5LF.jpg'
                    }
                }
            ],
            '1️⃣': [
                {
                    title: 'Last Wish - Kalli',
                    image: {
                        url: 'https://imgur.com/gLjLjfI.jpg'
                    }
                }
            ]
        }
    }
}