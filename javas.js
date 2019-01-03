/* JS ALERT */
function myFunction1(){
    alert("You must use your phone to calling the number!");
}

/* DOM */
function mOver(obj) {
    obj.innerHTML = "CLICK THE BUTTON!"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Gawat Darurat : (0778) - 431777 ext 777"
  }

/* JSON */
var json = {
"No": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
"Cabang": ["Pekanbaru - Jl. Sudirman", "Batam", "Tangerang", "Bekasi Barat", "Makassar", "Ujung Batu", "Jakarta - RS Evasari Awal Bros", "Panam", "Pekanbaru - Jl.A.Yani", "Chevron Duri", "Bekasi Timur", "Betang Pambelum Palangka Raya",],
"Berdiri / Bergabung Tahun" : ["29 Agustus 1998", "26 Juni 2003", "25 Agustus 2006", "8 Agustus 2008", "25 Juli 2011", "6 Juli 2012", "25 Oktober 2011", "22 Januari 2014", "1 April 2015", "15 September 2016", "1 November 2017", "7 Juli 2018"]
};

var table = $('<table/>'),
table_head = $('<thead/>'),
head_row = $('<tr/>'),
table_body = $('<tbody/>'),
body_row = [];

$.each(json, function(th, items) {
head_row.append('<th>' + th + '</th>');
$.each(items, function(index, item) {

if (body_row[index] === undefined) {
body_row[index] = $('<tr/>');
body_row[index].append('<td>' + item + '</td>');
} 
else
body_row[index].append('<td>' + item + '</td>');
});

//console.log(items);
});

table_head.append(head_row);
table_body.append(body_row)
table.append(table_head);
table.append(table_body);
$('body').html(table)
