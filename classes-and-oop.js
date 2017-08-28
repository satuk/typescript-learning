class Menu {
    constructor(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    list() {
        console.log('our menu for today');
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
let sundayMenu = new Menu(['pancakes', 'waffles'], 1);
sundayMenu.list();
class ChildrenMenu extends Menu {
    constructor(item_list, total_pages) {
        super(item_list, total_pages);
    }
    list() {
        console.log('Children Menu');
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
let menu_for_children = new ChildrenMenu(['fries', 'drink'], 1);
menu_for_children.list();
//# sourceMappingURL=classes-and-oop.js.map