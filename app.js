const row = document.getElementById('row')
const loadProduct = () =>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => displayProduct(data))
}
const displayProduct = products =>{
    products.forEach(product => {
       const col = document.createElement('div');
       col.classList.add('col');
       col.innerHTML= `
       <div class="card">
       <img src="${product.image}" class="card-img-top p-4" style="height:250px">
       <div class="card-body">
       <div class="d-flex justify-content-between">
       <small>${product.category}</small>
       <small class="bg-warning px-2" >${product.rating.rate}</small>
       
       </div>
         <p class="card-title">${product.title}</p>
         <div class="d-flex justify-content-between my-4">
          <h3 class="">Price : ${product.price}</h3>
         <button class="btn btn-success">Add to Cart</button>
         </div>
        
       </div>
     </div>
       `
       console.log(product);
       row.appendChild(col)
    });
}
loadProduct()