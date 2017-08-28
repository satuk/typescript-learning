class Menu {
    items: Array<string>;
    pages: number;

    constructor( item_list: Array<string>, total_pages: number ) {
        this.items = item_list;
        this.pages = total_pages;
    }

    list(): void {
        console.log( 'our menu for today' );

        for ( let i = 0; i < this.items.length; i++ ) {

            console.log( this.items[ i ] );

        }
    }
}

// new instance
let sundayMenu = new Menu( [ 'pancakes', 'waffles' ], 1 );

// call the list method
sundayMenu.list();


// new class
class ChildrenMenu extends Menu {
    constructor( item_list: Array<string>, total_pages: number ) {
        super( item_list, total_pages );
    }

    list(): void {

        console.log( 'Children Menu' );
        for ( let i = 0; i < this.items.length; i++ ) {

            console.log( this.items[ i ] );

        }
    }
}

// create a new instance
let menu_for_children = new ChildrenMenu( [ 'fries', 'drink' ], 1 );

// listing
menu_for_children.list();
