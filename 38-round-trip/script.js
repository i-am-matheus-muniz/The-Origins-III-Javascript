departTripTicket = {
    name: "Matheus Muniz",
    from: "São Paulo",
    to: "Orlando",
    businessClass: true,
    upgrade() {
        if (departTripTicket.businessClass == false) {
            departTripTicket.businessClass = true;
        } else {
            console.log("Your ticket is already business class!");
        }
    }
}

returnTripTicket = {
    name: "Matheus Muniz",
    from: "Orlando",
    to: "São Paulo",
    businessClass: false,
    upgrade() {
        if (returnTripTicket.businessClass == false) {
            returnTripTicket.businessClass = true;
        } else {
            console.log("Your ticket is already business class!");
        }
    }
}

console.log(departTripTicket);
console.log(returnTripTicket);

departTripTicket.upgrade();