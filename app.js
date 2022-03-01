//  search button click to find phone 
const searchButton = () =>{
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value ;
    searchInput.value = '';
    // console.log(searchText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayProduc(data.data))
} 
// product show to UI 
const displayProduc = (products) =>{
    // console.log(products)
    if(products.length == 0){
        console.log('name not found')
        alert('please write phone name')
    }else{
        const productContainer = document.getElementById('product_container')
                const fist20Product = products.splice(0, 20);
                 productContainer.textContent = ''; 
                    fist20Product.forEach(product =>{
                    const newDiv = document.createElement('div')
                newDiv.innerHTML = `
                <div class="card p-2 m-2 ">
                    <img class="w-50 mx-auto" src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${product.phone_name}</h5>
                     <h6 class="card-text">${product.brand}</h6>
                    </div>
                 <a href="#scroll"><button onclick="productDetailBtn('${product.slug}')" class="btn btn-info m-3 border text-cerner">View details</button></a>
                 </div>`;
            productContainer.appendChild(newDiv)       
    })

}
     
}

// product detail btn by Id  
const productDetailBtn = (slugId) =>{
    console.log(slugId)
const ulr = `https://openapi.programming-hero.com/api/phone/${slugId}`
    fetch(ulr)
    .then(res => res.json())
    .then(data =>showDetails(data.data))
}

const showDetails = (singleProduct) =>{
// console.log(singleProduct)
const detailInfo = document.getElementById('detail_info');
        detailInfo.innerHTML =''
       const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        <img class="w-50 p-2 mx-auto" src="${singleProduct.image}" class="card-img-top" alt="meal">
        <div>
            <h3 class="card-title">${singleProduct.name}</h3>
            <h5 class="card-title">${singleProduct.brand}</h5>
            <p class="card-text">${singleProduct.releaseDate ? singleProduct.releaseDate: 'release date not found'}</p>
            <h6 class="text-primary">Main Features:</h6>
            <ol style="list-style-type: none">
                <li>Storage:${singleProduct.mainFeatures.storage}</li>
                <li>Display: ${singleProduct.mainFeatures.displaySize}</li>
                <li>Chicest: ${singleProduct.mainFeatures.chipSet}</li>
                <li>Memory: ${singleProduct.mainFeatures.memory}</li>
            </ol>
            <h6 class="text-primary">Sensors:</h6>
            <p>${singleProduct.mainFeatures.sensors}</p>
            <a href="#" class="btn btn-info">Buy Now</a>
        </div>`;
  detailInfo.appendChild(div)

}