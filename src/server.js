import { App } from '@slack/bolt';
import { getHelloReplica, getInviteReplica } from './replicas';

require('dotenv').config();

const usersCurators = {
    'U02Q2M51V47': 'U02Q2M51V47',
    'U02RW33TKEY': 'U02Q2M51V47'
};
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
app.message('куратор', async ({ say }) => {
    say(getInviteReplica());
});

// command block
app.command('/task', async ({ command, say, ack }) => {
    await ack();
    await say('eeee');
});

// events block
app.event('member_joined_channel', async ({ event, client, logger, say }) => {
    if (event.channel === process.env.SLACK_ONBOARDING_CHANNEL_ID) {
        logger.info('Нового пользователя добавили в Slack');
        say(getHelloReplica(event.user));
        say({
            ...getInviteReplica(),
            channel: event.user
        });
    }
});

// actions block
app.action('approve_button_target1', async ({ action, ack }) => {
    await ack();
    await respond(`true`);
});

