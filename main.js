
/* pull in customer f&l name information to show on the page */
let customersCont = document.querySelector('.name')

function custInfo(customer) {
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);
    customersCont.appendChild(customerName)
}
let database = customers.map((customer) => custInfo(customer))

// everything is similar going thorugh each

// pull in customer email or contact information 

let contactCont = document.querySelector('.contact')

function custContact(customer) {
    let customerCard = document.createElement('div');
    let customerEmail = document.createElement('h4');
    customerEmail.innerText = `${customer.email} ${customer.cell}`;
    customerCard.appendChild(customerEmail)
    contactCont.appendChild(customerEmail)
}
let database2 = customers.map((customer) => custContact(customer))

// pull in customer address/location

let addressCont = document.querySelector('.address')

function custAddress(customer) {
    let customerCard = document.createElement('div');
    let customerAddress = document.createElement('h3');
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${customer.location.state} ${customer.location.postcode} `;
    customerCard.appendChild(customerAddress);
    addressCont.appendChild(customerAddress);
}
let database3 = customers.map((customer) => custAddress(customer))

// pull in customer DOB and customer since

let birthDate = document.querySelector('.birthday')

function custBirthday(customer) {
    let customerCard = document.createElement('div');
    let customerBirthay = document.createElement('h4');
    customerBirthay.innerText = `${customer.dob.date} ${customer.dob.age}`;
    customerCard.appendChild(customerBirthay);
    birthDate.appendChild(customerBirthay);
}
let database4 = customers.map((customer) => custBirthday(customer))

// pull in customer est

let custSince = document.querySelector('.established')

function custEstablish(customer) {
    let customerCard = document.createElement('div');
    let customerEstablished = document.createElement('h3');
    customerEstablished.innerText = `${customer.registered.date}`;
    customerCard.appendChild(customerEstablished)
    custSince.appendChild(customerEstablished)
}
let database5 = customers.map((customer) => custEstablish(customer))