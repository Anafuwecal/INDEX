
//close btn together with lists
window.onload = function () {
    added();
    closed();
    checked();
};

function added() {
    let myNodelist = document.getElementsByTagName("LI");
    let boxy = document.getElementById("box_id");
    let todo = document.getElementById("to_do");
    for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

// Click on a x button to delete the current list 
function closed() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

        }
    }
}

// Add a checked mark  when clicking on a list item
function checked() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

function addnew() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let li = document.createElement("li");
    let inputs = document.getElementById("new").value;
    let t = document.createTextNode(inputs);
    li.appendChild(t);
    if (inputs === '') {
        alert("Come on, there must be something you need to do!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("new").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // scrollBarFix()
}


//active button with .active class

$(function () {
    $('.add_new').click(function () {

        $(this).toggleClass('active');
        setTimeout(function () {
            $('.add_new').removeClass('active');
        }, 1100);
    });
});


