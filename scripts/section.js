class Section {
  constructor({ items, renderer }, selector) {
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
    this._renderedItems = items;
  }
  //отрисовка элементов
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  //принимает элементы и добавляет в контейнер
  addItem(element) {
    this._selector.append(element);
  }
}

export { Section };
