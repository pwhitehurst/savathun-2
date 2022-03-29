const emojiC = '🇨';
const emojiB = '🇧';
const emojiL = '🇱';
const emoji1 = '1️⃣';
const emoji2 = '2️⃣';
const emoji3 = '3️⃣';
const emoji4 = '4️⃣';

module.exports = {
    activity: {
        activity_emoji: '🇵',
        main_field: { name: 'Vow of the Disciple', value: 'React with 🇵', inline: true },
        main_embed: [
            {
                title: 'Vow of the Disciple Guide',
                description: 'React with the guide you would like:',
                fields: [
                    { name: 'Callouts', value: 'React with ' + emojiC, inline: true },
                    { name: 'Bonus Boss Drop', value: 'React with ' + emojiB, inline: true },
                    { name: 'Loot Table', value: 'React with ' + emojiL, inline: true },
                    { name: 'Acquisition', value: 'React with ' + emoji1, inline: true },
                    { name: 'Caretaker', value: 'React with ' + emoji2, inline: true },
                    { name: 'Exhibition', value: 'React with ' + emoji3, inline: true },
                    { name: 'Rhulk', value: 'React with ' + emoji4, inline: true }
                ],
            }
        ],
        emoji_used: [
            emojiC,
            emojiB,
            emojiL,
            emoji1,
            emoji2,
            emoji3,
            emoji4
        ],
        encounters: {
            '🇨': [
                {
                    title: 'Vow of the Disciple - Caydes Shadow Callouts',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/950979003492212786/950979078943539250/Caydes_Shadow_Callouts.png'
                    }
                }
            ],
            '🇧': [
                {
                    title: 'Vow of the Disciple - Extra Boss Weapon Drop',
                    image: {
                        url: 'https://media.discordapp.net/attachments/774168461110804490/952025118706655272/RDT_20220311_163750935546143831890907.jpg'
                    }
                }
            ],
            '🇱': [
                {
                    title: 'Vow of the Disciple - Loot Table',
                    image: {
                        url: 'https://www.blueberries.gg/wp-content/uploads/2022/03/Vow-of-the-Disciple-loot-table-infographic-v2-scaled.jpg'
                    }
                }
            ],
            '1️⃣': [{
                title: 'Vow of the Disciple - Acquisition',
                image: {
                    url: 'https://i.postimg.cc/43Ygk2Z6/Vot-D-Encounter-1-V6.png'
                }
            }],
            '2️⃣': [
                {
                    title: 'Vow of the Disciple - Caretaker',
                    image: {
                        url: 'https://i.imgur.com/U1w3ci0.jpeg',
                    }
                }
            ],
            '3️⃣': [
                {
                    title: 'Vow of the Disciple - Exhibition',
                    image: {
                        url: 'https://i.postimg.cc/NFf6w3vV/Vot-D-Encounter-3-V6.jpg'
                    }
                }
            ],
            '4️⃣': [
                {
                    title: 'Vow of the Disciple - Rhulk',
                    image: {
                        url: 'https://i.postimg.cc/sXb7VRx6/Vot-D-Encounter-4-v2.png'
                    }
                }
            ]
        }
    }
}