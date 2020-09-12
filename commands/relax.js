module.exports = {
    name: 'relax',
    description: 'Display the relax cat Emoticat',
    execute(message, args, MessageAttachment) {
      message.delete({timeout: 1});
      message.channel.send(`*${message.author.username}*`);
      const attachment = new MessageAttachment('https://i.imgur.com/rGqozoB.png');
      message.channel.send(attachment);
    }
  }