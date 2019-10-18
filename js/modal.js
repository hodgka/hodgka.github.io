let modal = document.getElementById('email_modal');
modal_visible = modal.style.visibility === 'visible';


console.log("Modal Visible: ", modal_visible);

function openModal() {
    console.log("Open Modal called...");
    let modal = document.getElementById("email_modal");
    modal.style.display = 'block';
    modal.style.visibility = 'visible';
    modal_visible = !modal_visible;
    console.log("Modal Visible: ", modal_visible);
}

function closeModal() {
    modal.style.display = 'none';
    modal.style.visibility = 'hidden';
    modal_visible = !modal_visible;
    console.log("Modal Visible: ", modal_visible);
};

function copyEmail() {
    let email = document.getElementById("email");
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(email);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
}