var books = [

];
var namebook = [{ "_id": "5fa3fd6dd8637cc97e4abc2d", "name": "Bdministrative law", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc2d" }, { "_id": "5fa3fd6dd8637cc97e4abc39", "name": "hgriculture", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc39" }, { "_id": "5fa3fd6dd8637cc97e4abc14", "name": "Algebra", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc14" }, { "_id": "5fa3fd6dd8637cc97e4abc47", "name": "Cnalog", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc47" }, { "_id": "5fa3fd6dd8637cc97e4abc15", "name": "Analytics", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc15" }, { "_id": "5fa3fd6dd8637cc97e4abc3f", "name": "Anatomy", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc3f" }, { "_id": "5fa3fd6dd8637cc97e4abc77", "name": "Ancient civilization", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc77" }, { "_id": "5fa3fd6dd8637cc97e4abc54", "name": "Ancient history", "__v": 0, "genreId": "5fa3fd6dd8637cc97e4abc54" }];
var authors = ["Alanin", "Susu", "kaka", "mama"];
let author2, book;
function renderView() {
    var html = ' ';
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        html += '<tr>';
        html += '<td>' + document.getElementById('myInputBook').value + '</td>';
        html += ' <td>' + document.getElementById('myInput').value + '</td>';
        html += '<td>' + book.room + '</td>';
        html += '<td>' + book.quantily + '</td>';
        html += '<td>' + book.birthday + '</td>';
        html += '<td colspan="2">';
        html += '<i class="glyphicon glyphicon-trash"></i>';
        html += '<i class="fa fa-edit"></i>';
        html += '</td>';
        html += '</tr>';

    }
    var book_element = document.getElementById('book_infomation');
    book_element.innerHTML = html;
}




const tuBanDatTen = () => {

    document.getElementById('name').innerHTML = book;
    // console.log(book_name);
    document.getElementById('author').innerHTML = author2;
    var submit_element = document.getElementById('submit');
    submit_element.addEventListener('click', function() {

        var book_room = document.getElementById('room').value;
        var book_quanlity = document.getElementById('quantity').value;
        var book_birthday = document.getElementById('birthday').value;
        var book_object = {
            // name: book_name,
            // author: book_author,
            room: book_room,
            quantily: book_quanlity,
            birthday: book_birthday,
        }
        books.push(book_object);
        document.getElementById('tableList').style.display = "block";
        renderView();

    })
}

let select;
// function myFunction() {
//     var filter, txtValue;

const render = () => {
    var html = ' ';
    for (var i = 0; i < authors.length; i++) {
        html += `<li onclick={selectauthor(${i})}><a href="#">+${authors[i]}</a></li>`;
    }
    document.getElementById("myUL").innerHTML = html;
}
const rendeBook = () => {
    var html = ' ';
    for (var i = 0; i < namebook.length; i++) {
        html += `<li onclick={selectBook(${i})}><a href="#">+${namebook[i].name}</a></li>`;
    }
    document.getElementById("myULBook").innerHTML = html;
}
let author = ' ';
const selectauthor = (select) => {
    document.getElementById("myInput").value = authors[select];
}
const selectBook = (choose) => {
    document.getElementById("myInputBook").value = namebook[choose].name;
}



function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

function myFunctionBook() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInputBook");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULBook");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

const getGenre = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.responseText);
    }
    xhttp.open('GET', 'https://library-sevice.herokuapp.com/getGenres', true);
    xhttp.send();;
}

function clickButtonNext() {
	book = document.getElementById('myInputBook').value;
    document.getElementById("BookSearch").style.display = "none";
		document.getElementById("AuthorSearch").style.display = "block";
}

function clickInputBook() {
	author2 = document.getElementById('myInput').value;
    document.getElementById("AuthorSearch").style.display = "none";
		document.getElementById("book_them").style.display = "block";
		tuBanDatTen();
}

function AddBook() {
    document.getElementById("BookSearch").style.display = "block";
}

renderView();
rendeBook();
render();