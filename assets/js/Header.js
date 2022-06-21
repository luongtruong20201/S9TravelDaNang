let Btn_Show_Header = document.getElementById("toggle-button-show")
let Btn_Close_Header = document.getElementById("toggle-button-close")
let Menu = document.getElementById("navbar-links")
function ShowMenuHeader(){
        Menu.setAttribute("style","display: flex;")
        Btn_Show_Header.setAttribute("style","display: none")
        Btn_Close_Header.setAttribute("style","display: flex;")

}
function CloseMenuHeader(){
    Menu.setAttribute("style","display: none;")
    Btn_Show_Header.setAttribute("style","display: flex")
    Btn_Close_Header.setAttribute("style","display: none;")
}
// header fixed
let Btn_Show_Headerhf = document.getElementById("toggle-button-showhf")
let Btn_Close_Headerhf = document.getElementById("toggle-button-closehf")
let Menuhf = document.getElementById("navbar-linkshf")
function ShowMenuHeaderhf(){
    Menuhf.setAttribute("style","display: flex;")
    Btn_Show_Headerhf.setAttribute("style","display: none")
    Btn_Close_Headerhf.setAttribute("style","display: flex;")

}
function CloseMenuHeaderhf(){
Menuhf.setAttribute("style","display: none;")
Btn_Show_Headerhf.setAttribute("style","display: flex")
Btn_Close_Headerhf.setAttribute("style","display: none;")
}
