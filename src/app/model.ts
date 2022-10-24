export class Model {
  user;
  items;
  constructor() {
    this.user = 'Furkan';
    this.items = [
      new TodoItem('spor', false),
      new TodoItem('kahvaltı', false),
      new TodoItem('kitap', true),
      new TodoItem('sinema', true),
    ];
  }
}

export class TodoItem {
  description;
  action;
  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
