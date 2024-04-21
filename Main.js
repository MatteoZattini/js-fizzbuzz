const myContainer = document.querySelector('div')

for (let i = 1; i <= 100; i++) {
    
    if (i % i == 0 && i % 3 != 0 && i % 5 != 0 ) {
        console.log(i);
        const myItem = document.createElement('span')
        myContainer.append(myItem)
        myItem.innerHTML = ` ${i}`
    }
    if (i % 3 == 0) {
        console.log("fizz");
        const myItem = document.createElement('span')
        myContainer.append(myItem)
        myItem.innerHTML = ` ${"fizz"}`
    }
    if (i % 5 == 0) {
        console.log("buzz");
        const myItem = document.createElement('span')
        myContainer.append(myItem)
        myItem.innerHTML = "buzz"
    }

}


