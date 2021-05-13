function MenuItem(name, color, width) {
  this.name = name,
  this.color = color;
  this.width = width;
}

MenuItem.prototype.makeRed = function () {
  this.color = 'red';
}

MenuItem.prototype.setUserColor = function(color) {
  this.color = color;
}

function MainMenuItem(name, color, width) {
  MenuItem.call(this, name, color, width)
}

MainMenuItem.prototype = Object.create(MenuItem.prototype);
MainMenuItem.prototype.constructor = MainMenuItem;

const item1 = new MenuItem('bar', 'blue', 200);
const mainItem = new MainMenuItem('mainBar', 'green', 500);

console.log('item1.color: ', item1.color)
console.log('item2.color: ', mainItem.color)
mainItem.makeRed()
item1.setUserColor('yellow')
console.log('item1.color: ', item1.color)
console.log('mainItem.color: ', mainItem.color)
