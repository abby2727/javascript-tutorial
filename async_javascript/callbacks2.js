let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    Liquid: ['Water', 'Ice'],
    Holder: ['Cone', 'Cup', 'Stick'],
    Toppings: ['Chocolate', 'Peanuts']
}

const order = (fruitName, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]} was selected.`);
        call_production();
    }, 2000)
}

const production = () => {
    setTimeout(() => {
        console.log('Production has started.');

        setTimeout(() => {
            console.log('The fruit has been chopped.');

            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added.`);

                setTimeout(() => {
                    console.log('Machine started.');

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.Holder[0]}.`);

                        setTimeout(() => {
                            console.log(`${stocks.Toppings[0]} was added as toppings.`);

                            setTimeout(() => {
                                console.log('Serve Ice Cream! :>');
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
}

order(0, production);