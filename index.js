
let passwordLength =document.getElementById("exampleInputEmail1");
let password =document.getElementById("exampleInputPassword1");
let saveButton =document.getElementById("saveButton");



const generatorPassword = (len)=>{
    const tampung  = "1234567890~!@#$%^&*()_+=-QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm[]\;,.{}:<>?";
    const data = tampung
    let generator ='';
    for (let i = 0 ; i < len;i++){
        generator += data[~~(Math.random() * data.length)]
    }
    return(generator)
}

const getPassword = ()=>{
    const newPassword = generatorPassword(passwordLength.value);
    password.value = newPassword
}


const savePassword = () =>{
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    alert('berhasil')
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
}

$(document).ready(function () {
    $("#togglePassword").click(function () {
        var passwordField = $("#exampleInputPassword1");
        var passwordFieldType = passwordField.attr("type");
        if (passwordFieldType === "password") {
            passwordField.attr("type", "text");
        } else {
            passwordField.attr("type", "password");
        }
    });
});
