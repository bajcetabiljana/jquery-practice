$(document).ready(function(){
    $('.newArticle').on('click', 'button', function(){
       var Article =  $('input').val();
       var addArticleToTheList = $('<li>'+Article+'</li>');
       $('.alreadyAddedArticles').find('ul').append(addArticleToTheList);
       $('input').val('');
    });
});