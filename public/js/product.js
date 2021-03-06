// Asynchronous fetch(): request the JSON array from the new JSON endpoint using fetch().
export const product = fetch(`${window.location.origin}/api/v0/gallery/:id`)
  .then((res) => {
    // JSON 'data' returned from server
    return res.json();
  })
  .then((product) => {
    console.log(product);

    let output = '';

    // Loop through `products` array using `array.forEach()`to create an image card
    products.forEach((product) => {
      output += 
        `<figure class="card">
         <img src=${product.imagePath} alt="${product.title}" >
            <figcaption> 
              <h2>[${product.title}]</h2>
              <h3>${product.description}</h3>
              <h3>$${product.price}</h3>
            </figcaption>
          </a>
        </figure>`;
    });

    //Send output to Dom
    document.querySelector('.gallery').innerHTML = output;
})

// Check errors 
.catch((err) => {
  console.log('Error!');
});

