function addNewItem(){
    var newItemText =  $('.newArticle input').val();
    var addArticleToTheList = $('<li> <span class="item"> '+newItemText+' </span> <span class="remove"> X </span> </li>');
    $('.alreadyAddedArticles').find('ul').append(addArticleToTheList);
    $('.newArticle input').val('');
    $(addArticleToTheList).on('click', '.remove' , function(){
        $(this).parent().hide();
    });
}

function onEnter(fn){
    return function(e) {
        if(e.which== 13) {
            fn();
        }
    }
}

function editItem(){
    console.log(this);
    var text = $(this).text();
    console.log('Edit item : ' + text);
    var inputField = $('<input type="text" value="'+text+'" />');
    $(this).replaceWith(inputField);
}

function stopEditing(){
    console.log(this)
    var newValue = $(this).val();
    var itemSpan = $(' <span class="item"> '+ newValue+' </span> ');
    $(this).replaceWith(itemSpan);
}

$(document).ready(function(){
    $('.newArticle').on('click', 'button', addNewItem);
    $('.newArticle').on('keypress', 'input', onEnter(addNewItem));
    $('.alreadyAddedArticles').on('click', '.item' , editItem);
    $('.alreadyAddedArticles').on('focusout', 'input' , stopEditing);
});
