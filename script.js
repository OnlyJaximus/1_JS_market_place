let allTotal = 0;

function addToCart(element){

    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quntity = mainEl.querySelector('input').value;


    let cartItems = document.querySelector('.cart-items');

    let input = element.previousElementSibling;
 //   console.log(element.previousElementSibling);


 //Test
 //console.log(typeof(quntity));


    if(parseInt(quntity)> 0){
     //  console.log('Vece je');

        price = price.substring(1);
        price = parseInt(price);
        let total =price * parseInt(quntity);

        allTotal += total;

        // Test
       //  console.log(typeof(price));
       //  console.log(price);
       // console.log(total);

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>$${price} x ${quntity} = $<span>${total}</span></p>
                                    <button onclick="removeFromCart(this)" class='remove-item'>Ukloni</button>
                               </div>`

        document.querySelector('.total').innerText = `Total: $${allTotal}`;


        element.innerText = 'Dodato';
        element.setAttribute('disabled','true');
    }else {
       alert('Odaberi kolicinu');
    }


 // Test
    // console.log(input);
   // console.log(input.value);
    // console.log(price);
    // console.log(name);
    console.log(quntity);
}


function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    price = parseInt(price);
    allTotal -= price;

    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    mainEl.remove();


    vegetables.forEach(function(vege){
        let itemName = vege.querySelector('.si-content h3').innerText

        if(itemName === name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Dodaj';
        }
        console.log(vege);
    });



    // console.log('removing');
    // console.log(mainEl);
    console.log(vegetables);
}