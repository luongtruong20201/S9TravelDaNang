let vehicle = ['Xe máy', "Ô tô", "Tàu", "Máy bay"]
var tours = JSON.parse(localStorage.getItem('tours'))
// console.log(tours)


var request = JSON.parse(localStorage.getItem('request'))
var customer = JSON.parse(localStorage.getItem('customer'))
// console.log(request)

function addHeading(str) {
  let heading = document.getElementById(str)

  for (let i = 0; i < tours.length; i++) {
    heading.innerHTML += `<option value=${i}>${tours[i].heading}</option>`
  }
}

addHeading('heading')
addHeading('heading1')

function nameOfFile() {
  let fileName = document.getElementById('anhtour').value
  let txt = "C:\\fakepath\\"
  return fileName.slice(txt.length, fileName.length)
}

function getID(str) {
  let index = document.getElementById(str).rows.length - 1
  let id = Number(document.getElementById(str).rows[index].cells[0].innerHTML) + 1
  return id
}

function themTour() {
  let theloai = document.getElementById('heading1').value
  let tentour = document.getElementById('tentour').value
  let giatien = document.getElementById('giatien').value
  let thoigian = document.getElementById('date').value
  if (thoigian === "")
    thoigian = "Liên hệ để biết thêm"
  let phuongtien = vehicle[Number(document.getElementById('phuongtien').value)]
  let anhtour = nameOfFile()
  let link = ["assets/Img/Tours/Tour_DaNang/", "assets/Img/Tours/Tour_TrongNuoc/", "assets/Img/Tours/Tour_QuocTe/"]
  let diadiem = document.getElementById('diadiem').value
  let id = getID('tableBody')
  let tour = { id: id, name: tentour, destination: diadiem, price: giatien, time: thoigian, vehicle: phuongtien, img: link[theloai] + anhtour }
  let listOfTours = JSON.parse(localStorage.getItem('tours'))
  listOfTours[theloai].tours.push(tour)
  let txt = JSON.stringify(listOfTours, undefined, 4)
  localStorage.setItem('tours', txt)
  console.log(listOfTours)
}
heading.addEventListener('change', () => {
  let value = document.getElementById('heading').value
  let tableBody = document.getElementById('tableBody')
  tableBody.innerHTML = ``
  for (let i = 0; i < tours[value]['tours'].length; i++) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
        <td class="text-center">${i + 1}</td>
        <td class="text-center">${tours[value]['tours'][i]['id']}</td>
        <td class="text-center">${tours[value]['tours'][i]['name']}</td>
        <td class="text-center">${tours[value]['tours'][i]['destination']}</td>
        <td class="text-center">${tours[value]['tours'][i]['price']}</td>
        <td class="text-center">${tours[value]['tours'][i]['time']}</td>
        <td class="text-center">${tours[value]['tours'][i]['vehicle']}</td>
        <td class="text-center">
            <button class="btn btn-primary" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" onclick="idTour()"> Sửa <i class="bi bi-pen-fill"></i></button>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                                  <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalToggleLabel2">Sửa Tour</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                      </div>
                                                      <div class="modal-body">
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Tên tour:</h6>
                                                              <div class="input-group">
                                                                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="nameChange">
                                                                </div>
                                                            </div>
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Giá tiền:</h6>
                                                              <div class="input-group">
                                                                  <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="priceChange">
                                                                </div>
                                                            </div>
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Thời gian:</h6>
                                                              <div class="input-group">
                                                                  <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="timeChange">
                                                                </div>
                                                            </div>
                                                            <div class="d-flex mb-3   ">
                                                              <h6 class="w-50">Phương tiện:</h6>
                                                              <div class="input-group">
                                                                  <select name=""class="form-control" multiple id="vehicleChange">
                                                                      <option value="0">Xe máy</option>
                                                                      <option value="1" selected>Ô tô</option>
                                                                      <option value="2">Tàu</option>
                                                                      <option value="3">Máy bay</option>
                                                                    </select>
                                                              </div>
                                                        </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Huỷ bỏ</button>
                                                        <button class="btn btn-success btn-submit" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onclick="suaTours()">Sửa</button>

                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
        </td>
        <td class="text-center">
            <button class="btn btn-danger" type="button" onclick="deleteTour(this)"> Xóa <i class="bi bi-pen-fill"></i></button>
        </td>
        `
    tableBody.appendChild(tr)
  }
})

function idTour() {
  var d = this.parentNode.parentNode.rowIndex - 1
  let id = document.getElementById('tableBody').rows[d].cells[1].innerHTML
  console.log(id)
  return id
}

function suaTours() {
  let id = idTour()
  console.log(id)
  let priceChange = document.getElementById('priceChange').value
  let vehicleChange = document.getElementById('vehicleChange').value
  let timeChange = document.getElementById('timeChange').value
  let select = document.getElementById('heading').value
  for (let j = 0; j < tours[select]['tours'].length; j++) {
    if (tours[select]['tours'][j].id == id) {
      tours[select]['tours'][j].name = nameChange
      tours[select]['tours'][j].price = priceChange
      tours[select]['tours'][j].vehicle = vehicle[vehicleChange]
      if (timeChange == '') timeChange = "Liên hệ để biết thêm"
      tours[select]['tours'][j].time = timeChange
    }
  }
  localStorage.setItem('tours', JSON.stringify(tours, undefined, 4))
}

function deleteTour(row) {
  let request = confirm("Bạn có muốn xóa không")
  if (request === true) {
    var d = row.parentNode.parentNode.rowIndex - 1;
    let id = document.getElementById('tableBody').rows[d].cells[1].innerHTML
    document.getElementById('tableBody').deleteRow(d);
    let txt = localStorage.getItem('tours')
    tours = JSON.parse(txt)
    let select = document.getElementById('heading').value
    tours[select]['tours'] = tours[select]['tours'].filter((tour) => {
      return tour.id != id
    })
    txt = JSON.stringify(tours, undefined, 4)
    localStorage.setItem('tours', txt)
  }
}

function getCustomerRequest() {
  let tableBody = document.getElementById('tableBodyRequest')
  console.log(request)
  console.log('hello')
  for (let i = 0; i < request.length; i++) {
    tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="text-center">${i + 1}</td>
      <td class="text-center">${request[i].name}</td>
      <td class="text-center">${request[i].email}</td>
      <td class="text-center">${request[i].request}</td>
    `
    tableBody.appendChild(tr)
  }
}


function getCustomer() {
  let customer = JSON.parse(localStorage.getItem('customer'))
  console.log(customer)
  let tableBody = document.getElementById('tableBodyKM')
  for (let i = 0; i < customer.length; i++) {
    tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="text-center">${i + 1}</td>
      <td class="text-center">${customer[i].name}</td>
      <td class="text-center">${customer[i].email}</td>
    `
    tableBody.appendChild(tr)
  }
}
