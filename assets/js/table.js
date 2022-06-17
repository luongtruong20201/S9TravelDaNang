var tours = JSON.parse(localStorage.getItem('tours'))

// k = 1

console.log(tours)

let heading = document.getElementById('heading')

for (let i = 0; i <tours.length; i++) {
    heading.innerHTML += `<option value = ${i}>${tours[i].heading}</option>`
}

heading.addEventListener('change', () => {
    let select = heading.value
    // console.log(select)
    let postLatestTableBody = document.getElementById('postLatestTableBody')
    postLatestTableBody.innerHTML = ``
    let k = 1;

    for (let j = 0; j < tours[select]['tours'].length; j++) {
        let tablerow = document.createElement('tr')
        tablerow.innerHTML = `<td class="text-center">${k}</td>
                        <td class="text-center">${tours[select]['tours'][j]['name']}</td>
                        <td class="text-center">${tours[select]['tours'][j]['title']}</td>
                        <td class="text-center">${tours[select]['tours'][j]['price']}</td>
                        <td class="text-center">${tours[select]['tours'][j]['time']}</td>
                        <td class="text-center">${tours[select]['tours'][j]['vehicle']}</td>`
        postLatestTableBody.appendChild(tablerow);
        k++;
    }
})

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