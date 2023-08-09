const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const role = document.querySelector("#role");

function resetFields() {
    email.value = "";
    password.value = "";
}

// eslint-disable-next-line no-unused-vars
function signIn() {
    // post body data
    const url = "http://localhost:3000/admin";
    const data = {
        email: email.value,
        password: password.value,
    };
    // request options
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    // send POST request
    fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            // showMensagem(res.message, res.status);
            if (res.status === 1 || res.status === "sucess") {
                resetFields();
            }
        });
}
// eslint-disable-next-line no-unused-vars
function signUp() {
    // post body data
    const url = "http://localhost:3000/admin/cadastrar";
    const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        role: role.value,
    };
    // request options
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    // send POST request
    fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            console.log(res.message, res.status);
            // showMensagem(res.message, res.status);
            if (res.status === 1 || res.status === "sucess") {
                resetFields();
            }
        });
}
