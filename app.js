//  search button click to find phone 
const searchButton = () =>{
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value ;
    searchInput.value = '';
    // console.log(searchText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayProduc(data.data.splice(0,20)))
} 
// product show to UI 
const displayProduc = (products) =>{
    console.log(products)
    if(products.length == 0){
        console.log('name not found')
        alert('please write phone name')
    }else{
        const productContainer = document.getElementById('product_container')
                 productContainer.textContent = ''; 
                    products.forEach(product =>{
                    const newDiv = document.createElement('div')
                newDiv.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${product.phone_name}</h5>
                     <p class="card-text">${product.brand}</p>
                    </div>
                    <button onclick="productDetailBtn('${product.slug}')" class="btn btn-info m-3 border text-cerner">View details</button>
                 </div>`;
            productContainer.appendChild(newDiv)       
    })

}
     
}

// product detail btn by Id  
const productDetailBtn = (slugId) =>{
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
        div.classList.add('single_card')
        div.innerHTML = `
        <img src="${singleProduct.image}" class="card-img-top" alt="meal">
        <div class="card-body">
            <h5 class="card-title">${singleProduct.brand}</h5>
            <p class="card-text">${singleProduct.releaseDate ? singleProduct.releaseDate : 'release date not found'}</p>
            <p class="card-text">${singleProduct.sensors}</p>
            <a href="" class="btn btn-primary">Go to Youtube</a>
        </div>`;
  detailInfo.appendChild(div)

}