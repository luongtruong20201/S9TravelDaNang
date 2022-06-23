// listOfTours = [
//     {
//         heading: "TOUR DU LỊCH ĐÀ NẴNG",
//         tours: [
//             { id: 1, name: "Hành trình Di sản Miền Trung", destination: "Đà Nẵng - Hội An - Quảng Trị - Quảng Bình - Huế'", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_DaNang/1.jpg" },
//             { id: 2, name: "Đà Nẵng - Hội An - Cố đô Huế", destination: "Đà Nẵng - Hội An - huế", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_DaNang/2.jpg" },
//             { id: 3, name: "Đà Nẵng - Đảo Lý Sơn", destination: "Đà Nẵng - Đảo Lý Sơn", price: "Liên hệ để biết thêm", time: "2 Ngày 1 Đêm", vehicle: "Cano, Ô tô", img: "assets/Img/Tours/Tour_DaNang/3.jpg" },
//             // { name: "Đà Nẵng - Đảo Lý Sơn", name: "Đà Nẵng - Đảo Lý Sơn", price: "Liên hệ để biết thêm", time: "2 Ngày 1 Đêm", vehicle: "Cano, Ô tô", img: "assets/Img/Tours/Tour_DaNang/4.jpg" },
//             { id: 4, name: "Đà Nẵng - Mỹ Sơn - Hội An", destination: "Đà Nẵng - Mỹ Sơn - Hội An", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_DaNang/5.jpg" },
//             { id: 5, name: "Đà Nẵng - Hội An - Vinpearl Land Hội An", destination: "Đà Nẵng - Hội An - Bà Nà Hills - Vinpearl Land Nam Hội An", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_DaNang/6.jpg" },
//             { id: 6, name: "Đà Nẵng - Hội An - Núi Thần Tài", destination: "Đà Nẵng - Hội An - Bà Nà Hills - Núi Thần Tài", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_DaNang/7.jpg" },
//             { id:7, name: "Đà Nẵng - Hội An - Cù Lao Chàm", destination: "Đà Nẵng - Hội An - Bà Nà Hills - Cù Lao Chàm", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_DaNang/8.jpg" },
//             { id: 8, name: "Đà Nẵng - Hội An - Bà Nà Hills", destination: "Đà Nẵng - Hội An - Bà Nà Hills", price: "Liên hệ để biết thêm", time: "3 Ngày 2 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_DaNang/1.jpg" },
//         ]
//     },
//     {
//         heading: "TOUR DU LỊCH TRONG NƯỚC",
//         tours: [
//             { id: 1,name: "Đà Nẵng - Nha Trang - Đà Lạt - Quy Nhơn", destination: "Đà Nẵng - Nha Trang - Đà Lạt - Quy Nhơn", price: "Liên hệ để biết thêm", time: "5 Ngày 4 Đêm", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_TrongNuoc/1.jpg" },
//             { id: 2,name: "Đà Nẵng - VQG Bạch Mã", destination: "Đà Nẵng - Vườn quốc gia Bạch Mã", price: "Liên hệ để biết thêm", time: "1 Ngày", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_TrongNuoc/2.jpg" },
//             { id: 3, name: "Đà Nẵng - Mỹ Sơn - Hội An", destination: "Đà Nẵng - Mỹ Sơn - Hội An", price: "750.000 VNĐ", time: "1 Ngày", vehicle: "Ô tô", img: "assets/Img/Tours/Tour_TrongNuoc/3.jpg" },
//             { id: 4, name: "Thiên  đường nghỉ dưỡng Phú Quốc", destination: "Phú Quốc", price: "Liên hệ để biết thêm", time: "Liên hệ để biết thêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/4.jpg" },
//             { id: 5, name: "Khám phá Miền Tây", destination: "Miền Tây", price: "Liên hệ để biết thêm", time: "Liên hệ để biết thêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/5.jpg" },
//             { id: 6, name: "Đà Nẵng - Hà Nội - Ninh Bình", destination: "Đà Nẵng - Hà Nội - Ninh Bình", price: "Liên hệ để biết thêm", time: "3 Ngày 2 Đêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/6.jpg" },
//             { id: 7, name: "Hà Nội - Hạ Long - Ninh Bình", destination: "Đà Nẵng - Hà Nội - Hạ Long - Ninh Bình - Đà Nẵng", price: "Liên hệ để biết thêm", time: "5 Ngày 4 Đêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/7.jpg" },
//             { id: 8, name: "Hà Nội - Ninh Bình - Sapa - Hạ Long", destination: "Đà Nẵng - Hà Nội - Hạ Long - Ninh Bình - Đà Nẵng", price: "Liên hệ để biết thêm", time: "5 Ngày 4 Đêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/8.jpg" },
//             // { name: "Hà Nội - Ninh Bình - Sapa - Hạ Long", name: "Đà Nẵng - Hà Nội - Tràng An - Sapa - Hạ Long - Đà Nẵng", price: "Liên hệ để biết thêm", time: "6 Ngày 5 Đêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/1.jpg" },


//         ]
//     },
//     {
//         heading: "TOUR DU LỊCH QUỐC TẾ",
//         tours: [
//             { id: 1, name: "Tour Trung Quốc", destination: "Bắc Kinh - Thượng Hải - Hàng Châu - Tô Châu", price: "Liên hệ để biết thêm", time: "Liên hệ để biết thêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_QuocTe/1.jpg" },
//             { id: 2, name: "Tour Nhật Bản", destination: "Osaka - Nara - Kyoto - Núi Fuji - Tokio", price: "Liên hệ để biết thêm", time: "Liên hệ để biết thêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_QuocTe/2.jpg" },
//             { id: 3, name: "Tour Hàn Quốc", destination: "Seoul - Nami - Everland", price: "Liên hệ để biết thêm", time: "Liên hệ để biết thêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_QuocTe/3.jpg" },
//         ]
//     },
// ]

// let txt = JSON.stringify(listOfTours, undefined, 4)
// console.log(txt)
// localStorage.setItem('tours', txt)

let customer = [
        {
            name: "Lương Quang Trường",
            "email": "luongtruong20201@gmail.com"
        },
        {
            name: "Phạm Gia Hưng",
            email: "hungpg@gmail.com"
        },
        {
            name: "Nguyễn Quốc Tuấn",
            email: "truongluong20201@gmail.com"
        },
        {
            name: "Lê Hữu Tính",
            email: "tinh196664@nuce.edu.vn"
        }
]

let request = [
    {name: "Phạm Gia Hưng", email: "hungpg@gmail.com", request: 'Dịch vụ rất tốt'},
    {name: "Vũ Trọng Đạt", email: "datvu@gmail.com", request: "^^"}
]

localStorage.setItem('request', JSON.stringify(request, undefined, 4))
localStorage.setItem('customer', JSON.stringify(customer, undefined, 4))
let listOfTours = JSON.parse(localStorage.getItem('tours'))

function getFullTours() {
    let tour = document.getElementById('content')
    for (let i = 0; i < listOfTours.length; i++) {
        let container = document.createElement('div')
        container.className = 'container'
        let heading = document.createElement('div')
        heading.className = 'my-4 d-flex row'
        heading.innerHTML = `<div class="bg-warning border-danger border-top border-5 w-100 d-flex justify-content-center p-2">
    <h2 class="text-white fs-5 fw-bold mb-0">${listOfTours[i]['heading']}</h2>
</div>`
        container.appendChild(heading)
        let row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < listOfTours[i]['tours'].length; j++) {
            let col_3 = document.createElement('div')
            col_3.className = 'col-sm-12 col-xxl-3 col-lg-4 col-md-6'
            col_3.innerHTML =
                `<div class="d-flex justify-content-between" >
        <!-- card -->
        <div class="card my-3 w-100" style=" background-color: #F3F3F3;">
            <!-- Title of card -->
            <div class="title ">
                <a  class = "d-flex justify-content-center" href="/#">
                    <h2 class=" fs-6 align-item-center mb-0 p-2" style="color: #d36e24; text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">${listOfTours[i]['tours'][j]['name']}</h2>
                </a>
            </div>
            <!-- img of card -->
            <a  href="/#">
                <img src="${listOfTours[i]['tours'][j]['img']}" class="card-img-top" alt="...">
            </a href="/#">
            <!-- places -->
            <div class="d-flex justify-content-between collapse py-2 Card__Text">
                <hr class="flex-fill" style="width:9%" >
                <span  class= " text-nowrap p-1 border border-secondary "style="text-overflow: clip;  overflow: hidden; font-size: 14px;">${listOfTours[i]['tours'][j]['destination']}</span>
                <hr class="flex-fill" style="width:9%">
            </div>
            <!-- information -->
            <div class="card-body px-2 py-2 container-fluid d-flex align-item-center">
                <ul class="elementor-icon-list-items m-0 p-0">
                    <li class="elementor-icon-list-item pb-1">
                        <span>
                            <i class="bi bi-currency-dollar text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text"><strong>${listOfTours[i]['tours'][j]['price']}</strong></span>
                    </li>
                    
                    <li class="elementor-icon-list-item pb-1 mt-1 " >
                        <span>
                            <i class="bi bi-clock text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Thời gian: ${listOfTours[i]['tours'][j]['time']}</span>
                    </li>
                    
                    <li class="elementor-icon-list-item mt-1">
                        <span>
                            <i class="fa-solid fa-car text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Phương tiện: ${listOfTours[i]['tours'][j]['vehicle']}</span>
                    </li>
                </ul>
            </div>
            <!-- contact -->
            <div class="d-flex bg-warning">
                <div class="flex-fill ">
                    <button class ="container ps-1 text-white bg-warning border-0" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-telephone-fill me-2 pe-2"></i>
                        Đặt tour
                    </button>
                </div>
                <div class="flex-fill">
                    <a href="DiSanMienTrung.html" class="container ps-1 text-white">
                        <i class="bi bi-search-heart me-2 pe-2"></i>
                        <span>Chi tiết</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <input class="form-control bg-white" id="disabledInput" type="text" value="Tên tour: " disabled>
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
            row.appendChild(col_3)
        }
        container.appendChild(row)
        tour.appendChild(container)
    }
}


//Tours Quoc Te
function getToursQT() {
    let tour = document.getElementById('content')
    for (let i = 2; i < listOfTours.length; i++) {
        let container = document.createElement('div')
        container.className = 'container'
        let row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < listOfTours[i]['tours'].length; j++) {
            let col_3 = document.createElement('div')
            col_3.className = 'col-3'
            col_3.innerHTML =
                `<div class="d-flex justify-content-between" >
        <!-- card -->
        <div class="card my-3 w-100" style=" background-color: #F3F3F3;">
            <!-- Title of card -->
            <div class="title ">
                <a  class = "d-flex justify-content-center" href="/#">
                    <h2 class=" fs-6 align-item-center mb-0 p-2" style="color: #d36e24; text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">${listOfTours[i]['tours'][j]['name']}</h2>
                </a>
            </div>
            <!-- img of card -->
            <a  href="/#">
                <img src="${listOfTours[i]['tours'][j]['img']}" class="card-img-top" alt="...">
            </a href="/#">
            <!-- places -->
            <div class="d-flex justify-content-between collapse py-2 Card__Text">
                <hr class="flex-fill" style="width:9%" >
                <span  class= " text-nowrap p-1 border border-secondary "style="text-overflow: clip;  overflow: hidden; font-size: 14px;">${listOfTours[i]['tours'][j]['destination']}</span>
                <hr class="flex-fill" style="width:9%">
            </div>
            <!-- information -->
            <div class="card-body px-2 py-2 container-fluid d-flex align-item-center">
                <ul class="elementor-icon-list-items m-0 p-0">
                    <li class="elementor-icon-list-item pb-1">
                        <span>
                            <i class="bi bi-currency-dollar text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text"><strong>${listOfTours[i]['tours'][j]['price']}</strong></span>
                    </li>
                    
                    <li class="elementor-icon-list-item pb-1 mt-1 " >
                        <span>
                            <i class="bi bi-clock text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Thời gian: ${listOfTours[i]['tours'][j]['time']}</span>
                    </li>
                    
                    <li class="elementor-icon-list-item mt-1">
                        <span>
                            <i class="fa-solid fa-car text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Phương tiện: ${listOfTours[i]['tours'][j]['vehicle']}</span>
                    </li>
                </ul>
            </div>
            <!-- contact -->
            <div class="d-flex bg-warning">
                <div class="flex-fill ">
                    <button class ="container ps-1 text-white bg-warning border-0" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-telephone-fill me-2 pe-2"></i>
                        Đặt tour
                    </button>
                </div>
                <div class="flex-fill">
                    <a href="" class="container ps-1 text-white">
                        <i class="bi bi-search-heart me-2 pe-2"></i>
                        <span>Chi tiết</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <input class="form-control bg-white" id="disabledInput" type="text" value="Tên tour: " disabled>
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
            row.appendChild(col_3)
        }
        container.appendChild(row)
        tour.appendChild(container)
    }
}


// Tours Trong nuoc
function getToursTN() {
    let tour = document.getElementById('content')
    for (let i = 0; i < listOfTours.length - 1; i++) {
        let container = document.createElement('div')
        container.className = 'container'
        let row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < listOfTours[i]['tours'].length; j++) {
            let col_3 = document.createElement('div')
            col_3.className = 'col-sm-12 col-xxl-3 col-lg-4 col-md-6'
            col_3.innerHTML =
                `<div class="d-flex justify-content-between" >
        <!-- card -->
        <div class="card my-3 w-100" style=" background-color: #F3F3F3;">
            <!-- Title of card -->
            <div class="title ">
                <a  class = "d-flex justify-content-center" href="/#">
                    <h2 class=" fs-6 align-item-center mb-0 p-2" style="color: #d36e24; text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">${listOfTours[i]['tours'][j]['name']}</h2>
                </a>
            </div>
            <!-- img of card -->
            <a  href="/#">
                <img src="${listOfTours[i]['tours'][j]['img']}" class="card-img-top" alt="...">
            </a href="/#">
            <!-- places -->
            <div class="d-flex justify-content-between collapse py-2 Card__Text">
                <hr class="flex-fill" style="width:9%" >
                <span  class= " text-nowrap p-1 border border-secondary "style="text-overflow: clip;  overflow: hidden; font-size: 14px;">${listOfTours[i]['tours'][j]['destination']}</span>
                <hr class="flex-fill" style="width:9%">
            </div>
            <!-- information -->
            <div class="card-body px-2 py-2 container-fluid d-flex align-item-center">
                <ul class="elementor-icon-list-items m-0 p-0">
                    <li class="elementor-icon-list-item pb-1">
                        <span>
                            <i class="bi bi-currency-dollar text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text"><strong>${listOfTours[i]['tours'][j]['price']}</strong></span>
                    </li>
                    
                    <li class="elementor-icon-list-item pb-1 mt-1 " >
                        <span>
                            <i class="bi bi-clock text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Thời gian: ${listOfTours[i]['tours'][j]['time']}</span>
                    </li>
                    
                    <li class="elementor-icon-list-item mt-1">
                        <span>
                            <i class="fa-solid fa-car text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Phương tiện: ${listOfTours[i]['tours'][j]['vehicle']}</span>
                    </li>
                </ul>
            </div>
            <!-- contact -->
            <div class="d-flex bg-warning">
                <div class="flex-fill ">
                    <button class ="container ps-1 text-white bg-warning border-0" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-telephone-fill me-2 pe-2"></i>
                        Đặt tour
                    </button>
                </div>
                <div class="flex-fill">
                    <a href="" class="container ps-1 text-white">
                        <i class="bi bi-search-heart me-2 pe-2"></i>
                        <span>Chi tiết</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <input class="form-control bg-white" id="disabledInput" type="text" value="Tên tour: " disabled>
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
            row.appendChild(col_3)
        }
        container.appendChild(row)
        tour.appendChild(container)
    }
}

// localStorage.setItem('tours', JSON.stringify("", undefined, 4))

function dangKy(){
    let customerName = document.getElementById('customerName').value
    let customerMail = document.getElementById('customerMail').value
    let customer = JSON.parse(localStorage.getItem('customer'))
    customer = [...customer, {name: customerName, email: customerMail}]
    alert("Bạn đã đăng ký thành công")
    localStorage.setItem('customer', JSON.stringify(customer, undefined, 4))
}

function saveRequest(){
    let name = document.getElementById('inputName').value
    let mail = document.getElementById('inputEmail').value
    let requestText = document.getElementById('inputRequest').value
    let request = JSON.parse(localStorage.getItem('request'))
    request = [...request, {name: name, email: mail, request: requestText}]
    alert("Bạn đã đăng ký thành công")
    localStorage.setItem('request', JSON.stringify(request, undefined, 4))
}