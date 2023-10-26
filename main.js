const customersCont = document.querySelector('.container'); // CALL THE DIV 
console.log(customersCont)

customers.map((customer) => customerCard(customer)); // CALL THE FUNCTION 

// WHEN YOU CALL THE FUNCTION WHAT WILL IT DO 

function customerCard(customer) {

    let customerCard = document.createElement('div'); // ^^^ set the function above a.k.a the loop ^^^
    let customerHeadshot = document.createElement('img');
    let customerName = document.createElement('h2');
    let customerEmail = document.createElement('a');
    let customerContact = document.createElement('ul');
    let customerAddress1 = document.createElement('li');
    let customerAddress2 = document.createElement('li')
    let customerBirthay = document.createElement('dd'); // youre gonna need to use a dt or dl to create the list 
    let customerEstablished = document.createElement('dd');

    // where can we find the information needed for the functions above, pull them from the customers.js file 

    // headshot 

    customerHeadshot.src = `${customer.picture.large}`;
    customerCard.appendChild(customerHeadshot);


    customerHeadshot.classList.add('picture');

    // name 

    customerName.innerText = `${customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1)} ${customer.name.last.charAt(0).toUpperCase() + customer.name.first.slice(1)}`;
    customerCard.appendChild(customerName);


    customerName.classList.add('name');

    // customerContact is the container for the list so you have to add the list elements to the container in ordrer for it to show up as such 

    customerEmail.innerText = `${customer.email}`;
    customerAddress1.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerAddress2.innerText = `${customer.location.city} ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`

    customerCard.appendChild(customerContact);
    /*  Question: how can you get the list inside of the unordered list div 
         Answer: append information to that "container"   */
    customerContact.appendChild(customerEmail);
    customerContact.appendChild(customerAddress1);
    customerContact.appendChild(customerAddress2);

    console.log(customerContact)

    customerEmail.classList.add('email');
    customerAddress1.classList.add('address-one');
    customerAddress2.classList.add('address-two');
    customerContact.classList.add('contact-info');

    // birthday

    customerBirthay.innerText = `Birthday: ${moment(customer.dob.date).format("MMM D, YYYY")}`;
    customerCard.appendChild(customerBirthay);

    customerBirthay.classList.add('dob');

    // registered date 

    customerEstablished.innerText = `Customer Since: ${moment(customer.registered.date).format("MMM D, YYYY")}`;
    customerCard.appendChild(customerEstablished);

    customerEstablished.classList.add('est');

    // add all of this to the customer card 
    customersCont.appendChild(customerCard);

    customerCard.classList.add('card');

}

// \/\/\/\/\/\/ THIS IS A ROUGH DRAFT OF ALL THE ABOVE ^>^<^> \/\/\/\/\/


// /* pull in customer f&l name information to show on the page */
// function custInfo(customer) {


//     customerName.innerText = `${customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1)} ${customer.name.last.charAt(0).toUpperCase() + customer.name.first.slice(1)}`;
//     customerCard.appendChild(customerName);
//     customersCont.appendChild(customerName)
// }
// let database = customers.map((customer) => custInfo(customer))

// // everything is similar going thorugh each

// // pull in customer email or contact information 

// let contactCont = document.querySelector('.container')

// function custContact(customer) {
//     let customerCard = document.createElement('div');

//     customerEmail.innerText = `${customer.email} ${customer.cell}`;
//     customerCard.appendChild(customerEmail)
//     contactCont.appendChild(customerEmail)
// }
// let database2 = customers.map((customer) => custContact(customer))

// // pull in customer address/location

// let addressCont = document.querySelector('.container')

// function custAddress(customer) {
//     let customerCard = document.createElement('div');

//     customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} 
//     ${customer.location.city} ${nameToAbbr(customer.location.state)} ${customer.location.postcode} `;
//     customerCard.appendChild(customerAddress);
//     addressCont.appendChild(customerAddress);
// }
// let database3 = customers.map((customer) => custAddress(customer))

// // pull in customer DOB and customer since

// let birthDate = document.querySelector('.container')

// function custBirthday(customer) {
//     let customerCard = document.createElement('div');

//     customerBirthay.innerText = `${moment(customer.dob.date).format("MMM D, YYYY")}`;
//     customerCard.appendChild(customerBirthay);
//     birthDate.appendChild(customerBirthay);
// }
// let database4 = customers.map((customer) => custBirthday(customer))

// // pull in customer est

// let custSince = document.querySelector('.container')

// function custEstablish(customer) {
//     let customerCard = document.createElement('div');

//     customerEstablished.innerText = `${moment(customer.registered.date).format("MMM D, YYYY")}`;
//     customerCard.appendChild(customerEstablished)
//     custSince.appendChild(customerEstablished)
// }
// let database5 = customers.map((customer) => custEstablish(customer))

// // in class but for the headshots ** not working btw

// let custPicture = document.querySelector('.container')

// function custPhoto(customer) {

//     let customerCard = document.createElement('div');

//     customerHeadshot.src = `${customer.picture.large}`;
//     customerCard.appendChild(customerHeadshot);
//     customerHeadshot.appendChild(customerHeadshot);
// }
// let database6 = customers.map((customer) => custPhoto(customer))


// // function customerToHTML(customer) {
// //     return `div class="custoemrCard" >
// //     <img src="${customer.picture.large}" class="customerHeadshot">
// //     </div>`
// // }