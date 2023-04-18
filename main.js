const input = document.getElementById("task");
const plus = document.getElementById("plus");
const display = document.getElementById("display");

plus.addEventListener("click", function
    (){
        input.focus();
        if (input.value) {
            const box = document.createElement("div");
            box.classList.add("box");

            const check = document.createElement("div");
            check.classList.add("check");
            const checkImg = document.createElement("img");
            checkImg.classList.add("hide");
            checkImg.src = "circle-check-regular.svg";
            check.appendChild(checkImg);

            const item = document.createElement("span");
            item.classList.add("item");
            item.innerText = input.value;

            const deleted = document.createElement("div");
            deleted.classList.add("delete");
            const deletedImg = document.createElement("img");
            deletedImg.src = "circle-xmark-regular.svg";
            deleted.appendChild(deletedImg);

            box.appendChild(check);
            box.appendChild(item);
            box.appendChild(deleted);

            display.appendChild(box)


            input.value = ""
            input.focus();
        }

        const checkList = document.querySelectorAll(".check");
        const checkImgList = document.querySelectorAll(".hide")
        const deleteList = document.querySelectorAll(".delete");
        const boxList = document.querySelectorAll(".box")

        for (let i = 0; i < checkList.length; i++) {
            checkList[i].addEventListener("click", function
                () {
                checkImgList[i].classList.add("show");
            })
        }

        for (let i = 0; i < deleteList.length; i++) {
            deleteList[i].addEventListener("click", function
                () {
                boxList[i].classList.add("hide");
            })
        }

})