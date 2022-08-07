// Search Header
let btn_Search = document.getElementById("Btn-Seach")
let input_search = document.getElementById("input_search")
let btn_close = document.getElementById("close_input")
function ShowInput(){   
    input_search.style.display ='block';
}
function closeInput(){
    input_search.setAttribute('style','display: none !important')

}
function ShowInputhf(){   
    document.getElementById("input_search-hf").style.display ='block';
}
function closeInputhf(){
    document.getElementById("input_search-hf").setAttribute('style','display: none !important')
}


function mySearch() {
    let text_input = document.getElementById('search').value;
    if (text_input != '') {
        localStorage.setItem('searchText', JSON.stringify(text_input));
    }

}

let tours = JSON.parse(localStorage.getItem('tours'))
let text =  JSON.parse(localStorage.getItem('searchText'))
function searchTour(text) {
    let search_tour = [];
    for (let i = 0; i < tours.length; i++) {
        for (let j = 0; j < tours[i]['tours'].length; j++) {
            if(tours[i]['tours'][j]['name'] != ''){
                let uppercase = tours[i]['tours'][j]['name'].toUpperCase()
                if (uppercase.includes(text.toUpperCase())) {
                    search_tour.push(tours[i]['tours'][j])
                }
            }
        }
    
    }
    return search_tour;
}


function showTour() {
    let search_tour = searchTour(text)
    if(search_tour.length != 0){
        for (let i = 0; i < search_tour.length; i++) {
            let col = document.createElement('div')
            col.className = 'col-sm-12 col-xxl-3 col-lg-4 col-md-6'
            col.innerHTML =   `<div class="d-flex justify-content-between" >
            <!-- card -->
            <div class="card my-3" style="width: 18rem; background-color: #F3F3F3;">
            <!-- Title of card -->
            <div class="title ">
                <a  class = "d-flex justify-content-center" href="/#">
                        <h2 class=" fs-5 align-item-center mb-0 p-2" style="color: #d36e24; text-overflow: ellipsis;overflow: hidden; white-space:  nowrap;">${search_tour[i]['name']}</h2>
                </a>
            </div>
            <!-- img of card -->
            <a  href="/#">
                <img src="${search_tour[i]['img']}" class="card-img-top" alt="...">
            </a href="/#">
            <!-- places -->
            <div class="d-flex justify-content-between collapse Card__Text">
            <hr class="flex-fill" style="width:9%" >
                <span  class= " text-nowrap p-1 border border-secondary "style="text-overflow: clip;  overflow: hidden; font-size: 14px;">${search_tour[i]['name']}</span>
                <hr class="flex-fill" style="width:9%">
                </div>
                <!-- information -->
                <div class="card-body px-2 py-2 container">
                <ul class="elementor-icon-list-items m-0 p-0">
                <li class="elementor-icon-list-item pb-1">
                <span>
                <i class="bi bi-currency-dollar text-danger"></i>
                </span>
                <span class="elementor-icon-list-text"><strong>${search_tour[i]['price']}</strong></span>
                    </li>
                    
                    <li class="elementor-icon-list-item pb-1 mt-1 " >
                        <span>
                            <i class="bi bi-clock text-danger"></i>
                            </span>
                        <span class="elementor-icon-list-text">Thời gian: ${search_tour[i]['time']}</span>
                        </li>
                    
                        <li class="elementor-icon-list-item mt-1">
                        <span>
                            <i class="fa-solid fa-car text-danger"></i>
                            </span>
                        <span class="elementor-icon-list-text">Phương tiện: ${search_tour[i]['vehicle']}</span>
                    </li>
                    </ul>
                    </div>
            <!-- contact -->
            <div class="d-flex bg-warning">
                <div class="flex-fill ">
                    <a href="" class="container ps-1 text-white">
                        <i class="bi bi-telephone-fill me-2 pe-2"></i>
                        <span>Đặt Tour</span>
                    </a>
                </div>
                <div class="flex-fill">
                    <a href="" class="container ps-1 text-white">
                    <i class="bi bi-search-heart me-2 pe-2"></i>
                        <span>Chi tiết</span>
                        </a>
                        </div>
                        </div>
        </div>
    </div>`
        row.appendChild(col)
        window.localStorage.removeItem('searchText')
    }
    
}else{
    let arlert = `<h1> Không có kết quả tìm kiếm ${text} </h1>`
    row.innerHTML = arlert
    window.onload(() => {
        arlert = ""
        row.innerHTML = arlert
    })
}
}
showTour()
window.onload(() => {
    window.localStorage.removeItem('searchText')
    
})