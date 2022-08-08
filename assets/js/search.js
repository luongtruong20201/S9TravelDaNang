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
// Search
function mySearchHeaderFixed(){
    let text_input = document.getElementById('search-hf').value;
    if (text_input != "") {
        localStorage.setItem('searchText', JSON.stringify(text_input));
    }
}
function mySearchHeader(){
    let text_input = document.getElementById('search-h').value;
    if (text_input != "") {
        localStorage.setItem('searchText', JSON.stringify(text_input));
    }
}

function mySearch() {
    let text_input = document.getElementById('search').value;
    if (text_input != "") {
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


var row = document.getElementById('show_result')
let Tours = JSON.parse(localStorage.getItem('Data'))

// ${search_tour[i]['name']}
function showTour() {
    let search_tour = searchTour(text)
    if(search_tour.length != 0){
        for (let i = 0; i < search_tour.length; i++) {
            let obj = JSON.stringify(search_tour[i])

            let col = document.createElement('div')
            col.className = 'col-sm-12 col-xxl-3 col-lg-4 col-md-6'
            col.innerHTML =   `<div class="d-flex justify-content-between" >
            <!-- card -->
            <div class="card my-3 w-100" style=" background-color: #F3F3F3;">
                <!-- Title of card -->
                <div class="title ">
                    <a  class = "d-flex justify-content-center" href="/#">
                        <h2 class=" fs-6 align-item-center mb-0 p-2" style="color: #d36e24; text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">${search_tour[i]['name']}</h2>
                    </a>
                </div>
                <!-- img of card -->
                <a  href="/#">
                    <img src="${search_tour[i]['img']}" class="card-img-top" alt="Tour">
                </a href="/#">
                <!-- places -->
                <div class="d-flex justify-content-between collapse py-2 Card__Text">
                    <hr class="flex-fill" style="width:9%" >
                    <span  class= " text-nowrap p-1 border border-secondary "style="text-overflow: clip;  overflow: hidden; font-size: 14px;">${search_tour[i]['destination']}</span>
                    <hr class="flex-fill" style="width:9%">
                </div>
                <!-- information -->
                <div class="card-body px-2 py-2 container-fluid d-flex align-item-center">
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
                        <button class ="container ps-1 text-white bg-warning border-0" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${search_tour[i]['id']}">
                            <i class="bi bi-telephone-fill me-2 pe-2"></i>
                            Đặt tour
                        </button>
                    </div>
                    <div class="flex-fill " >
                        <a href="TourDetail.html" class="container ps-1 text-white" target = "_blank" onclick = "getData(${obj}){
                            ${ 
                                localStorage.setItem('Data',`${obj}`)};}" >
                            <i class="bi bi-search-heart me-2 pe-2"></i>
                            <span>Chi tiết</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal${search_tour[i]['id']}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header ">
                    <div class="col-md-11 d-flex justify-content-center">
                        <h5 class="modal-title text-center" id="exampleModalLabel">Đặt tour nhanh</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form class="row g-3">
                        <div class="input-group">
                            <input class="form-control bg-white" id="disabledInput" type="text" value="Tên tour: ${search_tour[i]['destination']}" disabled>
                        </div>
                        <div class="input-group ">
                          <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Tên khách hàng" aria-describedby="inputGroupPrepend2" required>
                        </div>
                        <div class="col-md-6">
                          <input type="tel" placeholder = "Số Điện Thoại" class="form-control" id="validationDefault01" required>
                        </div>
                        <div class="col-md-6">
                            <input type="email" placeholder = "Email" class="form-control" id="validationDefault02" required>
                          </div>
                        <div class="col-md-4">
                            <input type="text" onfocus="(this.type = 'date')" placeholder="Ngày khởi hành"  class="form-control" id="validationDefault03" required>

                        </div>
                        <div class="col-md-4">
                            <input type="number" min="10" max ="1000" placeholder = "Người lớn" class="form-control" id="validationDefault04" required>
                        </div>
                        <div class="col-md-4">
                            <input type="number" min="10" max ="1000" placeholder = "Trẻ em" class="form-control" id="validationDefault05" required>
                        </div>
                        <div class="col-12">
                            <input type="text" placeholder = "Địa chỉ" class="form-control" id="validationDefault06" required>
                        </div>
                        </div>
                        <div class="col-12 pb-2 px-2">
                          <button class=" w-100 btn btn-warning" type="submit">Đặt tour ngay </button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>`
        row.appendChild(col)
    }
    
}else{
    let arlert = `<h1> Không có kết quả tìm kiếm ${text} </h1>`
    row.innerHTML = arlert
    window.onload = function (){
        arlert = ""
        row.innerHTML = arlert
    }
}
}
showTour()

window.onload = function(){
    window.localStorage.removeItem('searchText')
}