import { App } from '@slack/bolt';
import { getHelloReplica, getInviteReplica } from './replicas';
import { onboardingBotChannelId } from './configs/onboarding-bot';

require('dotenv').config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
    const port = 3000;
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();

// messages block
app.message('test', async ({ message, say }) => {
    say(getInviteReplica(message.user));
});

// command block
app.command('/task', async ({ command, say, ack }) => {
    await ack();
    await say('Задачи');
});

// events block
app.event('member_joined_channel', async ({ event, client, logger, say }) => {
    if (event.channel === process.env.SLACK_ONBOARDING_CHANNEL_ID) {
        logger.info('Нового пользователя добавили в Slack');
        say(getHelloReplica(event.user));
        try {
            logger.info('Поприветствовал в личном сообщении>');
            const result = await client.chat.postMessage({
                ...getInviteReplica(event.user),
                channel: event.user,
            });
            logger.info(result);
        }
        catch (error) {
            logger.error(error);
        }
    }
});

// actions block
app.action('approve_button_target1', async ({ action, ack }) => {
    await ack();
    await respond(`true`);
});

