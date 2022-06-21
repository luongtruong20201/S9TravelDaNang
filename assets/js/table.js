
// function addHeading() {

// }

// addHeading()

// let heading = document.getElementById('heading')

// for (let i = 0; i < tours.length; i++) {
//     heading.innerHTML += `<option value = ${i}>${tours[i].heading}</option>`
// }

// heading.addEventListener('change', () => {
//     let select = heading.value
//     // console.log(select)
//     let table = document.getElementById('dataTable')
//     table.innerHTML = `
//     <tr>
//         <th class="text-center">Tour</th>
//         <th class="text-center">Title</th>
//         <th class="text-center">Price</th>
//         <th class="text-center">Time</th>
//         <th class="text-center">Vehicle</th>
//         <th></th>
//     </tr>`
//     let k = 1;

//     for (let j = 0; j < tours[select]['tours'].length; j++) {
//         let tablerow = document.createElement('tr')
//         tablerow.innerHTML = `
//                         <td class="text-center">${tours[select]['tours'][j]['name']}</td>
//                         <td class="text-center">${tours[select]['tours'][j]['title']}</td>
//                         <td class="text-center">${tours[select]['tours'][j]['price']}</td>
//                         <td class="text-center">${tours[select]['tours'][j]['time']}</td>
//                         <td class="text-center">${tours[select]['tours'][j]['vehicle']}</td>
//                         <td class="text-center">
//                             <input type="button" value="Delete" onclick="deleteTour(this)" />
//                         </td>
//                         `
//         table.appendChild(tablerow);
//         k++;
//     }
// })

// let postLatestTableBody = document.getElementById('postLatestTableBody')
// for(let i = 0; i<tours.length; i++){
//     for(let j = 0; j<tours[i]['tours'].length; j++){
//         let tablerow = document.createElement('tr')
//         tablerow.innerHTML =   `<td class="text-center">${k}</td>
//                             <td class="text-center">${tours[i]['tours'][j]['name']}</td>
//                             <td class="text-center">${tours[i]['tours'][j]['title']}</td>
//                             <td class="text-center">${tours[i]['tours'][j]['price']}</td>
//                             <td class="text-center">${tours[i]['tours'][j]['time']}</td>
//                             <td class="text-center">${tours[i]['tours'][j]['vehicle']}</td>`
//         postLatestTableBody.appendChild(tablerow);
//         k++;
//     }
// }

function deleteTour(row) {
    var d = row.parentNode.parentNode.rowIndex;
    console.log(d)
    let name = document.getElementById('table').rows[d].cells[0].innerHTML
    console.log(name)
    document.getElementById('table').deleteRow(d);
    let txt = localStorage.getItem('tours')
    tours = JSON.parse(txt)
    console.log(tours)
    let select = document.getElementById('heading').value
    tours[select]['tours'] = tours[select]['tours'].filter((tour) => {
        return tour.name != name
    })
    // console.log(tours)
    // localStorage.setItem(JSON.stringify(tours, undefined, 4))
    txt = JSON.stringify(tours, undefined, 4)
    localStorage.setItem('tours', txt)
}


// for (var i = 1; i < table.rows.length; i++) {
//     table.rows[i].cells[6].onclick = function () {
//         var c = confirm("do you want to delete this row");
//         if (c === true) {
//             index = this.parentElement.rowIndex;
//             table.deleteRow(index);
//         }

//         //console.log(index);
//     };

// }

function editTour() {

}