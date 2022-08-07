tours = [
    {
        heading: "TOUR DU LỊCH TRONG NƯỚC",
        tours: [
            { title: "Thiên  đường nghỉ dưỡng Phú Quốc", name: "Phú Quốc", price: "Liên hệ để biết thêm", time: "Liên hệ để biết thêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/4.jpg" },
            { title: "Khám phá Miền Tây", name: "Miền Tây", price: "Liên hệ để biết thêm", time: "Liên hệ để biết thêm", vehicle: "Ô tô - Máy Bay", img: "assets/Img/Tours/Tour_TrongNuoc/5.jpg" },
        ]
    },
]
let tour = document.getElementById('TourMienNam')
for (let i = 0; i < tours.length; i++) {
    let container = document.createElement('div')
    container.className = 'container'
    let row = document.createElement('div')
    row.className = 'row'
    for (let j = 0; j < tours[i]['tours'].length; j++) {
        let col_3 = document.createElement('div')
        col_3.className = 'col-sm-12 col-xxl-3 col-lg-4 col-md-6'
        col_3.innerHTML = 
        `<div class="d-flex justify-content-between" >
        <!-- card -->
        <div class="card my-3 w-100" style=" background-color: #F3F3F3;">
            <!-- Title of card -->
            <div class="title ">
                <a  class = "d-flex justify-content-center" href="/#">
                    <h2 class=" fs-6 align-item-center mb-0 p-2" style="color: #d36e24; text-overflow: ellipsis;overflow: hidden; white-space: nowrap;">${tours[i]['tours'][j]['title']}</h2>
                </a>
            </div>
            <!-- img of card -->
            <a  href="/#">
                <img src="${tours[i]['tours'][j]['img']}" class="card-img-top" alt="...">
            </a href="/#">
            <!-- places -->
            <div class="d-flex justify-content-between collapse py-2 Card__Text">
                <hr class="flex-fill" style="width:9%" >
                <span  class= " text-nowrap p-1 border border-secondary "style="text-overflow: clip;  overflow: hidden; font-size: 14px;">${tours[i]['tours'][j]['name']}</span>
                <hr class="flex-fill" style="width:9%">
            </div>
            <!-- information -->
            <div class="card-body px-2 py-2 container-fluid d-flex align-item-center">
                <ul class="elementor-icon-list-items m-0 p-0">
                    <li class="elementor-icon-list-item pb-1">
                        <span>
                            <i class="bi bi-currency-dollar text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text"><strong>${tours[i]['tours'][j]['price']}</strong></span>
                    </li>
                    
                    <li class="elementor-icon-list-item pb-1 mt-1 ">
                        <span>
                            <i class="bi bi-clock text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Thời gian: ${tours[i]['tours'][j]['time']}</span>
                    </li>

                    <li class="elementor-icon-list-item mt-1">
                        <span>
                            <i class="fa-solid fa-car text-danger"></i>
                        </span>
                        <span class="elementor-icon-list-text">Phương tiện: ${tours[i]['tours'][j]['vehicle']}</span>
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
                          <button class=" w-100 btn btn-warning" type="submit">Đặt tour ngay</button>
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