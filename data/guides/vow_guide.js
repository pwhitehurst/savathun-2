const emojiC = '🇨';
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
                    { name: 'Callouts', value: 'React with ' + emojiC },
                    { name: 'Acquisition', value: 'React with ' + emoji1, inline: true },
                    { name: 'Caretaker', value: 'React with ' + emoji2, inline: true },
                    { name: 'Exhibition', value: 'React with ' + emoji3, inline: true },
                    { name: 'Rhulk', value: 'React with ' + emoji4, inline: true }
                ],
            }
        ],
        emoji_used: [
            emojiC,
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
            '1️⃣': [{
                title: 'Vow of the Disciple - Acquisition',
                image: {
                    url: 'https://i.postimg.cc/43Ygk2Z6/Vot-D-Encounter-1-V6.png'
                }
            }],
            '2️⃣': [
                {
                    title: 'Vow of the Disciple - Caretaker Floor 1',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/950979003492212786/951558023615230082/MH2gzYr.png',
                    }
                },
                {
                    title: 'Vow of the Disciple - Caretaker Floor 2',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/950979003492212786/951558069836480532/vSWekf9.png',
                    }
                },
                {
                    title: 'Vow of the Disciple - Caretaker Floor 3',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/950979003492212786/951558119308296222/0S3GhDa.png',
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