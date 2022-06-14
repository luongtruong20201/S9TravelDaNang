tours = [
    {title: "Hành trình Di sản Miền Trung", name: "Đà Nẵng - Hội An - Quảng Trị - Quảng Bình - Huế'", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô"},
    {title: "Đà Nẵng - Hội An - Cố đô Huế", name: "Đà Nẵng - Hội An - huế", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô"},
    {title: "Đà Nẵng - Đảo Lý Sơn", name: "Đà Nẵng - Đảo Lý Sơn", price: "Liên hệ để biết thêm", time: "2 Ngày 1 Đêm", vehicle: "Cano, Ô tô"},
    {title: "Đà Nẵng - Đảo Lý Sơn", name: "Đà Nẵng - Đảo Lý Sơn", price: "Liên hệ để biết thêm", time: "2 Ngày 1 Đêm", vehicle: "Cano, Ô tô"},
    {title: "Đà Nẵng - Mỹ Sơn - Hội An", name: "Đà Nẵng - Mỹ Sơn - Hội An", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô"},
    {title: "Đà Nẵng - Hội An - Vinpearl Land Hội An", name: "Đà Nẵng - Hội An - Bà Nà Hills - Vinpearl Land Nam Hội An", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô"},
    {title: "Đà Nẵng - Hội An - Núi Thần Tài", name: "Đà Nẵng - Hội An - Bà Nà Hills - Núi Thần Tài", price: "Liên hệ để biết thêm", time: "4 Ngày 3 Đêm", vehicle: "Ô tô"},
]

// console.log(localStorage.setItem("tour", JSON.stringify(tour)));

const txt = JSON.stringify(tours, undefined, 4)
localStorage.setItem("tours", txt)

