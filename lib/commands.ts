interface Categories {
    name: string,
    commands: Command[]
}

interface Command {
    name: string
    description: string
    limited?: Limited
}

interface Limited {
    name: string
}

export var commands: Categories[] = [
    {
        name: 'Teleportation Commands',
        commands: [
            {
                name: '/tpa',
                description: 'send a teleport request to a player'
            },
            {
                name: '/tpahere',
                description: 'send a teleport request to teleport a player to you'
            },
            {
                name: '/tpacancel',
                description: 'cancel a teleport request'
            },
            {
                name: '/tptoggle',
                description: 'prevent anyone from sending teleportation requests to you'
                
            },
            {
                name: '/kill',
                description: 'set your health to 0 without much effort'
            },
        ]
    },
    {
        name: 'Communication Commands',
        commands: [
            {
                name: '/msg <player name>',
                description: 'message a player'
            },
            {
                name: '/r',
                description: 'reply to the last player who messaged you'
            },
            {
                name: '/l',
                description: 'message the last player you messaged'
            },
            {
                name: '/ignore <player name>',
                description: 'ignore the player until next server restart'
            },
            {
                name: '/ignorehard <player name>',
                description: 'ignore the player forever'
            },
            {
                name: '/togglechat',
                description: 'prevent getting chat messages'
            },
        ]
    },
    {
        name: 'Statistics Commands',
        commands: [
            {
                name: '/stats',
                description: 'check server statistics '
            },
            {
                name: '/tps',
                description: 'check server tps and cpu usage'
            },
        ],
    },
    {
        name: 'Server Socials Commands',
        commands: [
            {
                name: '/discord',
                description: 'link to the official discord'
            }
        ]
    },
    {
        name: 'Player Customization Commands',
        commands: [
            {
                name: '/nick and /nick with color',
                description: 'change your nickname and or the color of it',
                limited: {
                    name: '[dono 1 for /nick and dono 2 for /nick and /nick with color]'
                }
            },
        ]
    }
]
