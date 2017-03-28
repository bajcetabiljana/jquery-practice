$(document).ready(function(){
    $('.newArticle').on('click', 'button', function(){
        console.log('pokaze ovaj tekst');
       console.log(this);
       console.log(Article);

       var Article =  $(this).parent().find('input').val();
       console.log(Article);
       var addArticleToTheList = $('<li><span class="item">'+Article+'</span> <span class="removeButton"> X </span> </li>');
       $('.alreadyAddedArticles').find('ul').append(addArticleToTheList);
       $(this).parent().find('input').val('');
    });

     $('.alreadyAddedArticles').on('click', '.removeButton', function(){
        console.log('test');
        $(this).parents('li').remove();
    });
     $('.alreadyAddedArticles').on('click', '.item', function(){
        var oldText = $(this).text();
        var inputField = $('<input>');
        inputField.val(oldText);
        inputField.on('focusout', function(){
            var text = $(this).val();
            $(this).replaceWith('span class="item">'+text+'</span> ');
        });
        //$(this).replaceWith('<input value="'+oldText+'">');
        $(this).replaceWith(inputField);
    });
});
