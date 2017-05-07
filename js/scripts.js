function fetch(url, sucess, error) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function(e){
        if(this.status === 200) {
            return (sucess)(e);
        }
        else {
            return (error)(e);
        }
    }

    xhr.send(null);

}


// Wykorzystanie
fetch("https://jsonplaceholder.typicode.com/users", function(data) {
    console.log("Sukces");
    console.log(data);
}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});