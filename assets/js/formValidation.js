/*global console, emailjs, alert*/
/*jslint long*/

// EmailJS used to send commission enquiry form data directly to the artist
// Source: https://www.emailjs.com

// Cloudinary API used to handle multiple photo uploads before passing URLs to EmailJS
// Source: https://cloudinary.com

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    function runValidation() {
        const errors = [];

        // Getting the elements
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const petname = document.getElementById("petname");
        const pettype = document.getElementById("pettype");
        const medium = document.getElementById("medium");
        const size = document.getElementById("size");

        // Checking Name is valid
        if (!name.value.trim()) {
            errors.push({ id: "name", message: "Please enter your name" });
        }

        // Checking valid email
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            errors.push({
                id: "email",
                message: "Please enter your email address."
            });
        } else if (!validEmail.test(email.value.trim())) {
            errors.push({
                id: "email",
                message: "Please enter a valid email address"
            });
        }

        // Checking pet name is valid
        if (!petname.value.trim()) {
            errors.push({
                id: "petname",
                message: "Please enter your pet's name."
            });
        }

        // Checking pet type is valid
        if (!pettype.value) {
            errors.push({
                id: "pettype",
                message: "Please select a type of pet"
            });
        }

        // Checking Medium is valid
        if (!medium.value) {
            errors.push({ id: "medium", message: "Please select a medium" });
        }

        // Checking Size is valid
        if (!size.value) {
            errors.push({ id: "size", message: "Please select a size" });
        }

        return errors;
    }

    function showErrors(errors) {
        // Clear previous errors
        document.querySelectorAll(".error-message")
            .forEach((el) => el.remove());
        const summary = document.getElementById("error-summary");
        summary.innerHTML = "";
        summary.style.display = "block";

        errors.forEach(function (err) {
            // Field level message
            const input = document.getElementById(err.id);
            const msg = document.createElement("span");
            msg.className = "error-message";
            msg.textContent = err.message;
            input.parentNode.appendChild(msg);

            // Summary list
            const li = document.createElement("li");
            li.textContent = err.message;
            summary.appendChild(li);
        });
    }

    function showSuccess() {
        form.innerHTML = `
            <div class="success-message">
                <h3 class="font-heading">Thank you!</h3>
                <p>Your enquiry for ${form.petname.value} has been sent.
                Gordon will be in touch within 48 hours.</p>
            </div>
        `;
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const errors = runValidation();

        if (errors.length === 0) {
            const fileInput = document.getElementById("photo");
            let photoUrls = [];

            // Loop through all files if any are provided
            if (fileInput.files.length > 0) {
                try {
                    const cloudinaryUrl =
                        "https://api.cloudinary.com/v1_1/dwzixvekx/image/upload";

                    // Array of upload promises
                    const uploadPromises = Array.from(
                        fileInput.files
                    ).map(async function (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", "loyal_paws");

                        const res = await fetch(cloudinaryUrl, {
                            body: formData,
                            method: "POST"
                        });

                        if (!res.ok) {
                            throw new Error("Upload failed");
                        }

                        const data = await res.json();
                        return data.secure_url;
                    });

                    // Wait for uploads to complete
                    photoUrls = await Promise.all(uploadPromises);
                } catch (uploadError) {
                    console.error("Cloudinary Error:", uploadError);
                    alert(
                        "There was an issue uploading your images. " +
                        "Please try again."
                    );
                    return;
                }
            }

            // Combine all URLs into a string separated by new lines
            let photoLinkString;
            if (photoUrls.length > 0) {
                photoLinkString = photoUrls.join("\n \n");
            } else {
                photoLinkString = "No Photos Provided";
            }

            emailjs.send("service_ad8i0ak", "template_t4vjoyj", {
                about_pet: form.about_pet.value,
                email: form.email.value,
                medium: form.medium.value,
                name: form.name.value,
                pet_name: form.petname.value,
                pet_type: form.pettype.value,
                photo_url: photoLinkString,
                size: form.size.value
            })
            .then(function () {
                showSuccess();
            })
            .catch(function (err) {
                console.error("EmailJS error:", err);
                alert(
                    "Sorry, there was an error sending your enquiry. " +
                    "Please try again later."
                );
            });

        } else {
            showErrors(errors);
        }
    });
});