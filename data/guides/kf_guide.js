const emojiB = '🇧';
const emojiK = '🇰';

module.exports = {
    activity: {
        activity_emoji: emojiK,
        main_field: { name: 'King\'s Fall', value: 'React with ' + emojiK, inline: true },
        main_embed: [
            {
                title: 'King\'s Fall Guide',
                description: 'React with the guide you would like:',
                fields: [
                    { name: 'Bonus Boss Drop', value: 'React with ' + emojiB, inline: true }                ],
            }
        ],
        emoji_used: [
            emojiB
        ],
        encounters: {
            '🇧': [
                {
                    title: 'King\'s Fall - Extra Boss Weapon Drop',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/795095580660596736/1013181694645375056/image0.jpg'
                    }
                }
            ]

        }
    }
}