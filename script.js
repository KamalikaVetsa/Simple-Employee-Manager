function addEmployee() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Enter a name");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = name + " <button onclick='this.parentElement.remove()'>Delete</button>";

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
}
