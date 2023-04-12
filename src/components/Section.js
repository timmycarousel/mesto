class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._renderedItems = items;
  }
  //отрисовка элементов
  createCards() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  // принимает элементы и добавляет в контейнер
  addItem(element) {
    this._container.append(element);
  }
}

export { Section };
