import { readFileSync, writeFile } from 'fs';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFileSync('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFileSync('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string) {
    const contents = await readFileSync('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: message };
    await writeFile('messages.json', JSON.stringify(messages), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File written successfully\n');
      }
    });
  }
}
