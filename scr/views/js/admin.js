const signInEmail = document.querySelector("#email_login");
const signInPassword = document.querySelector("#password_login");

function resetFields() {
    signInEmail.value = "";
    signInPassword.value = "";
}

// eslint-disable-next-line no-unused-vars
function signIn() {
    // post body data
    const url = "http://localhost:3000/admin";
    const data = {
        email: signInEmail.value,
        password: signInPassword.value,
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
