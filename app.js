
//  search button click to find phone 
const searchButton = () =>{
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value ;
    searchInput.value = '';
    if(searchText == ''){
        alert('product not found')
    }else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayProduc(data.data))
    }
    
} 

// product show to UI 
const displayProduc = (products) =>{
    document.getElementById('detail_info').classList.remove('border')
    if(products.length == 0){
        alert('name not found')
    }else{
        const productContainer = document.getElementById('product_container')
         const fist20Product = products.splice(0, 20);
            productContainer.textContent = ''; 
             fist20Product.forEach(product =>{
         const newDiv = document.createElement('div')
                newDiv.classList.add('col')
             newDiv.innerHTML = `
                <div class="card p-2 m-2 text-center ">
                    <img class="w-50 mx-auto" src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${product.phone_name}</h5>
                     <h6 class="card-text">${product.brand}</h6>
                    </div>
                 <a href="#scroll">
                 <button onclick="productDetailBtn('${product.slug}')" class="btn btn-info m-3 border text-cerner">
                 View details</button></a>
                 </div>`;
        productContainer.appendChild(newDiv)       
    })

}
const detailInfo = document.getElementById('detail_info');
        detailInfo.innerHTML =''
     
}
// product detail btn by Id  
const productDetailBtn = (slugId) =>{
const ulr = `https://openapi.programming-hero.com/api/phone/${slugId}`
    fetch(ulr)
    .then(res => res.json())
    .then(data =>showDetails(data.data))
}

// detail btn click to show product details 
const showDetails = (singleProduct) =>{
const detailInfo = document.getElementById('detail_info');
        detailInfo.innerHTML =''
       const div = document.createElement('div');
        div.classList.add('card')
        div.classList.add('border-0')
        div.innerHTML = `
        <img src="${singleProduct.image}" class="w-50 pt-4 pb-3 mx-auto card-img-top" alt="img">
        <div class="container">
            <h3 class='my-3'>${singleProduct.name}</h3>
            <p class='mb-3 fw-bold'> ${singleProduct.releaseDate ? singleProduct.releaseDate : 'Release Date Not Found' } </p>
            <table id="main-fetuses" class="table table-striped border">
                <tr>
                    <th class="fs-5" colspan="2">Main Features</th>
                </tr>
                <tr>
                    <th>Chip Set</th>
                    <td>${singleProduct.mainFeatures.chipSet}</td>
                </tr>
                <tr>
                    <th>display Size</th>
                    <td>${singleProduct.mainFeatures.displaySize}</td>
                </tr>
                <tr>
                    <th>Memory</th>
                    <td>${singleProduct.mainFeatures.memory}</td>
                </tr>
                <tr>
                    <th>Storage</th>
                    <td>${singleProduct.mainFeatures.storage}</td>
                </tr>
                <tr>
                    <th>Brand</th>
                    <td>${singleProduct.brand}</td>
                </tr>
            </table>
        </div>`;
  detailInfo.appendChild(div)

// get  product sensor info form api
const sensorDetails = singleProduct.mainFeatures.sensors;

// ----------------------sensor---------------------------
const sensorUl = document.createElement('ul');
sensorUl.className = 'list-group' + ' ' + ' mb-4 px-3';
const sensTitle = document.createElement('h3');
sensTitle.innerHTML = `<strong> Sensor Details </strong>`;
sensorUl.appendChild(sensTitle);
sensorDetails.forEach(sens => {
    const sensorLi = document.createElement('li');
    sensorLi.className = 'list-group-item';
    sensorLi.innerHTML = `${sens}`
    sensorUl.appendChild(sensorLi);
})

detailInfo.appendChild(sensorUl);
// --------------------product others details------------------
const othersDiv = document.createElement('div');

// ---------------------main features and img---------------------------
othersDiv.innerHTML = `
<div class="card-body">
    <table id="main-fetuses" class="table table-striped border">
        <tr>
            <th class="fs-5" colspan="2">Others Details</th>

        </tr>
        <tr>
            <th>Bluetooth</th>
            <td>${singleProduct?.others?.Bluetooth ? singleProduct.others.Bluetooth :'not found'}</td>
        </tr>
        <tr>
            <th>GPS</th>
            <td>${singleProduct?.others?.GPS?singleProduct.others.GPS : 'not found'}</td>
        </tr>
        <tr>
            <th>NFC</th>
            <td>${singleProduct?.others?.NFC?singleProduct.others.NFC : 'not found'}</td>
        </tr>
        <tr>
            <th>Radio</th>
            <td>${singleProduct?.others?.Radio? singleProduct.others.Radio : 'not found'}</td>
        </tr>
        <tr>
            <th>USB</th>
            <td>${singleProduct?.others?.USB? singleProduct.others.USB : 'not found'}</td>
        </tr>
        <tr>
            <th>WLAN</th>
            <td>${singleProduct.others?.WLAN ? singleProduct.others.WLAN : 'Not Found'}</td>
        </tr>
    </table>
</div>`;
detailInfo.appendChild(othersDiv);

detailInfo.classList.add('border')

}