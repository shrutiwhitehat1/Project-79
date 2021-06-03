menu_list_array = ["Cheese Pizza", 
                    "Veg Supreme Pizza", 
                    "Paneer Pizza", 
                    "Pav Bhaji Pizza", 
                    "Potato Pizza", 
                    "Veg Artistic Pizza",
                    "Shruti's Special"];

function getmenu(){
 
var htmldata;
htmldata="<o1 class='menulist'>"
menu_list_array.sort();
                      
for(var i=0;i<menu_list_array.length; i++){
htmldata=  htmldata+'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"<ol>"
document.getElementById("display_menu").innerHTML= htmldata;
}

function add_item(){
 
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata="<section class='cards' >"
  
    for(var i=0; i<menu_list_array.length; i++) {
  
        htmldata=htmldata+'<div class="card>'
                +'<img src="https://media.istockphoto.com/photos/pizza-margarita-with-cheese-top-view-isolated-on-white-background-picture-id1168754685?k=6&m=1168754685&s=612x612&w=0&h=UKuKcencxoEAipHKk1D7DTfMbFxGTpI3qXV57rnDfpM=">'
                + menu_list_array[i] + '</div>'
    }
 
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML= htmldata;

    
 }
    
function add_top() {
    var item=document.getElementById("add_item").value;
    menu_list_arrat.push(item);
    add_item();
}
 
                     