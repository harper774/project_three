const $email = $("#email");
const $password = $("#password");

$('#signin-btn').on("click", async function (e) {

    e.preventDefault();
    console.log("1");
    try {
        const email = $email.val().trim();
        const password = $password.val().trim();
        console.log(email, password);
        const response = await $.ajax({
            url: "/auth/register_login",
            method: "POST",
            data: {
                email,
                password,
            },
        });
        if (response.error) {
            // if error, alert the user
            // eslint-disable-next-line no-undef
            console.log(response.error);
        }

        // if everything ok, redirect to user dashboard page
        return window.location.replace("/user");
    } catch (error) {
        // eslint-disable-next-line no-undef
        return alertUser(error.responseJSON.error);
    }
});