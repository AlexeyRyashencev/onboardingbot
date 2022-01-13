export const getInviteReplica = () =>
    ({
        text: 'Чеклист',
        blocks: [
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': 'Вот твой чеклист :white_check_mark::'
                }
            },
            {
                'type': 'divider',
            },
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': ':one: Настройка рабочего окружения:\n' +
                        '• <http://confluence.moscow.alfaintra.net/pages/viewpage.action?pageId=293550541|Заявка на wifi>\n' +
                        '• <http://confluence.moscow.alfaintra.net/pages/viewpage.action?pageId=51351685|Заявка на VPN (3 штуки)>'
                }
            },
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': ':two: Цели на испытательный срок:\n'
                }
            },
            {
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': ':three: Третий пункт:\n'
                }
            },
            {
                'type': 'divider'
            },
            {
                'type': 'context',
                'elements': [
                    {
                        'type': 'mrkdwn',
                        'text': '👀 Просмотреть все свои таски `/task`'
                    }]
            }
        ]
    });