interface Food {
    name: string;
    calories: number;
}

function speak( food: Food ): void {
    console.log( 'our ' + food.name + ' has ' + food.calories + ' calories.' );
}

let ice_cream = {
    name: 'apple',
    calories: 110
};

speak( ice_cream );
