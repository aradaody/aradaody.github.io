function sendEmail() {
    value = [document.getElementById("email").value,document.getElementById("name").value,document.getElementById("subject").value,document.getElementById("emailMessage").value];
    var checkValues = value.every(checkInput);
    if(!checkValues) {
        alert('Veuillez remplir tous les champs');
        return;
    } 
    try {
        Email.send({
            Host: "smtp.gmail.com",
            Username : "anjaratianaradaody@gmail.com",
            Password : "dimyvavy111299",
            To : 'anjaratianaradaody@yahoo.com',
            From : value[0],
            Subject : value[1],
            Body : value[2],
            }).then(
                message => console.log(message)
            );
    }
    catch(exception) {
        console.log(exception.message);
    }	
}
function checkInput(value, index, array) {
    return value.trim() != "";
}