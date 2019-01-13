
function validate (){
    var name = document.getElementById("inputName").value
    var email = document.getElementById("inputEmail").value
    var phone = document.getElementById("inputPhone").value
    var checkbox = document.querySelectorAll("input.checkbox:checked")
    var isnum = /^\d+$/.test(phone)

    if (name == "" || email == "" || phone == "" || checkbox.length === 0 || isnum == false){
        alert('Please fill all fields correctly before submitting')
    } else {
        alert('Thanks for contacting us, someone will be in touch with you shortly')
    }
}