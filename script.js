
// Use `querySelector` for single elements instead of `getElementsByClassName`
const inputName = document.querySelector(".input1");
const inputMobile = document.querySelector(".input2");
const inputAge = document.querySelector(".input5");
const inputEmail = document.querySelector(".input3");
const inputAddress = document.querySelector(".input4");
const submitBtn = document.querySelector(".btn");
const don=document.querySelector(".do");
const studentTable = document.querySelector(".Studentform table");

submitBtn.addEventListener("click", function (e) {
    don.classList.remove("do")
    e.preventDefault(); // Prevent form from submitting

    // Create a new table row
    const tr = document.createElement("tr");

    // Create and append Name
    const tdName = document.createElement("td");
    tdName.style.color = "black"
    tdName.style.border = "solid orange 2px"
    tdName.textContent = inputName.value;
    tr.appendChild(tdName);

    // Create and append Mobile Number
    const tdMobile = document.createElement("td");
    tdMobile.style.border = "solid orange 2px"
    tdMobile.style.color = "black"

    tdMobile.textContent = inputMobile.value;
    tr.appendChild(tdMobile);

    // Create and append Age
    const tdAge = document.createElement("td");
    tdAge.style.border = "solid orange 2px"
    tdAge.style.color = "black"


    tdAge.textContent = inputAge.value;
    tr.appendChild(tdAge);

    // Create and append Email
    const tdEmail = document.createElement("td");
    tdEmail.style.border = "solid orange 2px"
    tdEmail.style.color = "black"

    tdEmail.textContent = inputEmail.value;
    tr.appendChild(tdEmail);

    // Create and append Delete button
    const tdAction = document.createElement("td");
    const deleteBtn = document.createElement("img");
    deleteBtn.src = "img.png";
    deleteBtn.style.width = "30px";
    deleteBtn.style.height = "25px";
    deleteBtn.style.paddingLeft = "10px"
    deleteBtn.style.backgroundColor = "white";
    deleteBtn.style.cursor = "pointer"
    tdAction.style.border = "solid orange 2px"

    deleteBtn.className = "actionBtn";
    deleteBtn.addEventListener("click", function () {
        tr.remove();
    });
    tdAction.appendChild(deleteBtn);
    tr.appendChild(tdAction);

    // Append the row to the table
    studentTable.appendChild(tr);

    // Optionally, clear form inputs
    inputName.value = "";
    inputMobile.value = "";
    inputAge.value = "";
    inputEmail.value = "";
    inputAddress.value = "";
});