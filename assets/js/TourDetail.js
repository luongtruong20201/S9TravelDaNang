 row = document.getElementById('show_result')
let tour_list = JSON.parse(localStorage.getItem('tours'))
Tours = JSON.parse(localStorage.getItem("Data"))
console.log(Tours)
// Chi tiết tour
function TourDetail(Tours){
    let Tour_Detail = document.getElementById('TourDetail') 
    document.getElementById('NameOfPage').innerHTML = `
        <h1>${Tours['name']}</h1>
        <p><a href="index.html" class="text-white">Trang chủ</a> - Tour du lịch - ${Tours['name']}</p>`
    Tour_Detail.innerHTML = `
            <div class="col-sm-12 col-xxl-4 col-lg-4 col-md-6 TourDetail__Img">
                <img src="${Tours['img']}" alt="" class="img-thumbnail">
            </div>
            <div class="col-sm-12 col-xxl-4 col-lg-4 col-md-6 p-0 align-self-start TourDetailMenu">
                <ul>
                    <li class="TourDetailMeunu-list"><span class="TourDetal-text"><i class="bi bi-currency-dollar"></i>Giá: ${Tours['price']} </span></li>
                    <li class="TourDetailMeunu-list"><span class="TourDetal-text"><i class="bi bi-clock"></i> Thời gian: ${Tours['time']}</span> </li>
                    <li class="TourDetailMeunu-list"><span class="TourDetal-text"><i class="bi bi-list-ol"></i> Điểm đến: ${Tours['destination'].replaceAll(' - ',', ')}</span></li>
                    <li class="TourDetailMeunu-list"><span class="TourDetal-text"><i class="bi bi-arrow-left-right"></i> Lịch trình: ${Tours['destination']}</span></li>
                    <li class="TourDetailMeunu-list"><span class="TourDetal-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"/>
                      </svg> Phương tiện: ${Tours['vehicle']}</span> </li>
                    <li class="TourDetailMeunu-list"><span class="TourDetal-text"><i class="bi bi-house-door-fill"></i> 
                        Cư trú: Hotel <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></span></li>
                    <li class="TourDetailMeunu-list-button">
                        <button class ="container ps-1 text-white bg-warning border-0 btn btn-primary d-flex justify-content-between align-items-center rounded-4 mt-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i class="bi bi-pencil-square ps-2 fs-4 text-white"></i>
                            <span class="pe-2 text-center " style="text-transform:uppercase">
                                <b>Đặt tour ngay</b>
                            </span>
                            <span></span>
                        </button>
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
                                          <input class="form-control bg-white" id="disabledInput" type="text" value="Tên tour:" disabled>
                                      </div>
                                      <div class="input-group ">
                                        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Tên khách hàng"             aria-describedby="inputGroupPrepend2" required>
                                      </div>
                                      <div class="col-md-6">
                                        <input type="tel" placeholder = "Số Điện Thoại" class="form-control" id="validationDefault01" required>
                                      </div>
                                      <div class="col-md-6">
                                          <input type="email" placeholder = "Email" class="form-control" id="validationDefault02" required>
                                        </div>
                                      <div class="col-md-4">
                                          <input type="text" onfocus="(this.type = 'date')" placeholder="Ngày khởi hành"  class="form-control"          id="validationDefault03" required>
                                    
                                      </div>
                                      <div class="col-md-4">
                                          <input type="number" min="10" max ="1000" placeholder = "Người lớn" class="form-control" id="validationDefault04"             required>
                                      </div>
                                      <div class="col-md-4">
                                          <input type="number" min="10" max ="1000" placeholder = "Trẻ em" class="form-control" id="validationDefault05"            required>
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
                          </div> 
                    </li>
                </ul>
                
                <div class="col-sm-12 col-xxl-3 col-lg-4 col-md-6 TourDetail__table">
                    <table class="table table-hover w-100">
                        <thead class="bg-warning text-white text-center">
                            <tr>
                                <th>Hỗ trợ khách hàng</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td><a href="tel: 0935 327 969"><i class="bi bi-telephone-outbound-fill"></i> Hotline: 0935 327 969</a></td>
                        </tr>
                        <tr>
                            <td><a href="tel:0979 324 821"><i class="bi bi-telephone-outbound-fill"></i> Hotline: 0979 324 821</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://m.me/s9dn.travel"><i class="bi bi-messenger"></i> Chat Facebook</a></td>
                        </tr>
                        <tr>
                            <td><a href="mailto:s9traveldn@gmail.com"><i class="bi bi-envelope-fill"></i> Email: s9traveldn@gmail.com</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    `
}
TourDetail(Tours)