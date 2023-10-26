const entryPoint = document.querySelector('.container');

// based on class example

function customerCard(customer) {

    return `<div class="customer-card">
    <img src=${customer.picture.large} class="customerHeadshot">;
    
    </div>`
}