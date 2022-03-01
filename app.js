//  search button click to find phone 
const searchButton = () =>{
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value ;
    console.log(searchText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => console.log(data.data))
} 
const displayProduc = () =>{
              
}