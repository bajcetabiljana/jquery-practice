function Storage(name) {
    this.name = name;
    this.articles = [];
    this.location = ['shelf', 'floor', 'box','outerstorage'];
    this.addNewArticle = function(article) {
        return this.articles.push(article);
    }
    this.listOfArticles = function() {
        this.articles.forEach(article => console.log(article));
    }
    this.articleLoc = function(article) {
        return this.articles.map(article => article.location);
    }
    this.showArticleLocation = function(article) {
        console.log(this.articleLoc(article));
    }
    this.logistic = function(article) {
        // return this.location.push
    }
}


function Article(name, price, location) {
    this.articleName = name;
    this.price = price;
    this.location = ['shelf', 'floor', 'box','outerstorage'];
}

var storage1 = new Storage('Small Starage');
var article1 = new Article('lamp', 10, 'shelf');
var article2 = new Article('table', 50, 'floor');
var article3 = new Article('doll', 2, 'shelf');
var article4 = new Article('screw', 1, 'box');

storage1.addNewArticle(article1);
storage1.addNewArticle(article2);
storage1.addNewArticle(article3);
storage1.addNewArticle(article4);
console.log(storage1);
console.log(storage1.listOfArticles());
console.log(storage1.articleLoc());



