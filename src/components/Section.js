class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    // this._renderedItems = items;
  }
  //отрисовка элементов
  // renderItems(items) {
  //   items.forEach(this._renderer);
  // }

  //отрисовка элементов

  // renderItems() {
  //   this._renderedItems.forEach((item) => {
  //     this._renderer(item);
  //   });
  // }

  // принимает элементы и добавляет в контейнер
  addItem(items) {
    items.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }

  prependItem(element) {
    this._container.prepend(element);
  }
}

export { Section };
