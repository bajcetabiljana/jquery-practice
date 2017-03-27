 // Triger event on enter
$(document).keypress(function(e) {
    if(e.which == 13) {
        var Article =  $('input').val();
       var addArticleToTheList = $('<li> <span class="item"> '+Article+' </span> <span class="remove"> X </span> </li>');
       $('.alreadyAddedArticles').find('ul').append(addArticleToTheList);
       $('input').val('');
       $(addArticleToTheList).on('click', '.remove' , function(){
            $(this).parent().hide();
        });
       $(addArticleToTheList).on('click', '.item' , function(){
            $(this).replaceWith('<input value="'+Article+'">');
            
        });
    }
});
$(document).ready(function(){
    $('.newArticle').on('click', 'button', function(){
       var Article =  $('input').val();
       var addArticleToTheList = $('<li> <span class="item"> '+Article+' </span> <span class="remove"> X </span> </li>');
       $('.alreadyAddedArticles').find('ul').append(addArticleToTheList);
       $('input').val('');
       $(addArticleToTheList).on('click', '.remove' , function(){
            $(this).parent().hide();
        });
       $('.alreadyAddedArticles').on('click', '.item' , function(){ 
        var additedArticle = $('<li> <span class="item"> '+newValue+' </span> <span class="remove"> X </span> </li>');
            $(this).replaceWith('<input value='+Article+'>');
            var newValue = $(this).val();
            $(this).parent().replaceWith(additedArticle);
        });
    });    
});
