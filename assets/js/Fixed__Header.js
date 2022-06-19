let Header__Main = document.getElementsByClassName("Header__Main-Fixed")
        window.addEventListener('scroll',() =>{
            const scrolled = window.scrollY;
            console.log(scrolled);
            if(scrolled >= 120){
                for(var i = 0;i <Header__Main.length;i++)
                {
                    Header__Main[i].style.display = "block";
                }
            }
            else{
                for(var i = 0;i <Header__Main.length;i++)
                {
                    Header__Main[i].style.display = "none";
                }
            }
        })