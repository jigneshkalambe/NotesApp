const addBtn = document.querySelector("#addNote");
const appendBox = document.querySelector("#append");
let idNum = 1;

addBtn.onclick = function () {
    let box = document.createElement("div");
    let uniqueId = `box-${idNum}`;
    box.classList.add("col-3");
    box.id = uniqueId;
    box.innerHTML = `   <div class="mainBox">
                            <div class="boxFirstline d-flex justify-content-between">
                                <button class="copyBtn"><i class="bx bx-save"></i></button>
                                <button class="deleteBtn" id="${uniqueId}" ><i class='bx bx-trash'></i></button>
                            </div>
                            <div class="textArea">
                                <textarea id="textArea" placeholder="Write your note here..."></textarea>
                            </div>
                        </div>`;

    appendBox.appendChild(box);

    const deleteBtn = box.querySelector(".deleteBtn");
    deleteBtn.onclick = function () {
        deleteHandler(uniqueId);
    };

    const textArea = box.querySelector("#textArea");
    const copyBtn = box.querySelector(".copyBtn");
    copyBtn.onclick = function () {
        copyBtnHandler(textArea);
    };

    idNum++;
};

function deleteHandler(uniqueId) {
    let deleteBox = document.getElementById(uniqueId);
    if (deleteBox) {
        deleteBox.remove();
    }
}

function copyBtnHandler(textArea) {
    let textValue = textArea.value;
    if (textValue !== "") {
        navigator.clipboard.writeText(textValue).then(() => {
            alert("Text is copied successfully!");
        });
    } else {
        alert("Please enter some text to copy");
    }
}
