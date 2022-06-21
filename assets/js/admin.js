var tours = JSON.parse(localStorage.getItem('tours'))
console.log(tours)

let heading = document.getElementById('heading')

for(let i = 0; i<tours.length; i++){
    heading.innerHTML += `<option value=${i}>${tours[i].heading}</option>`
}

// console.log(tours[0]['tours'][0]['title'])
heading.addEventListener('change', () => {
    let value = document.getElementById('heading').value
    // console.log(value)
    let tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ``
    for(let i = 0; i<tours[value]['tours'].length; i++){
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td class="text-center">${i + 1}</td>
        <td class="text-center">${tours[value]['tours'][i]['title']}</td>
        <td class="text-center">${tours[value]['tours'][i]['name']}</td>
        <td class="text-center">${tours[value]['tours'][i]['price']}</td>
        <td class="text-center">${tours[value]['tours'][i]['time']}</td>
        <td class="text-center">${tours[value]['tours'][i]['vehicle']}</td>
        <td class="text-center">
            <button class="btn btn-success" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModalToggle2"> Sửa <i class="bi bi-pen-fill"></i></button>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                                  <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalToggleLabel2">Sửa Tour</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div class="modal-body">
                                                            <div class = "d-flex align-items-center  mb-3 ">
                                                              <h6 class="w-50">Thể loại:</h6>
                                                              <div class="w-100">
                                                                  <select name="" id="heading" class="form-control" >
                                                                    <option value=""></option>
                                                                  </select>
                                                              </div>
                                                            </div>
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Tên tour:</h6>
                                                              <div class="input-group">
                                                                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                                                </div>
                                                            </div>
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Giá tiền:</h6>
                                                              <div class="input-group">
                                                                  <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                                                </div>
                                                            </div>
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Thời gian:</h6>
                                                              <div class="input-group">
                                                                  <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                                                </div>
                                                            </div>
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Phương tiện:</h6>
                                                              <div class="input-group">
                                                                  <select name=""class="form-control" >
                                                                      <option value="">Xe máy</option>
                                                                      <option value="" selected>Ô tô</option>
                                                                      <option value="">Tàu</option>
                                                                      <option value="">Máy bay</option>
                                                                    </select>
                                                              </div>
                                                        </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Huỷ bỏ</button>
                                                        <button class="btn btn-success" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Sửa</button>

                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
        </td>
        <td class="text-center">
            <button class="btn btn-success" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModalToggle2"> Sửa <i class="bi bi-pen-fill"></i></button>
        </td>
        `
        // console.log(tours[value].tours[i].name)
    tableBody.appendChild(tr)
    }
})