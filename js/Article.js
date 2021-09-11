class Article {
    static counter = 0;
    id;
    HTMLarticle;
    currentImg;

    constructor(article) {
        this.id = ++Article.counter;
        this.article = article;
        this.currentImg = 1;
        this.article.querySelector('img').setAttribute('src', 'img/article' + this.id + '/' + this.currentImg + '.jpg');
    }

    nextImg() {
        if (this.currentImg + 1 > 5) {
            this.currentImg = 1;
        }
        this.article.querySelector('img').setAttribute('src', 'img/article' + this.id + '/' + ++this.currentImg + '.jpg');
    }

    previousImg() {
        if (this.currentImg + 1 < 1) {
            this.currentImg = 5;
        }
        this.article.querySelector('img').setAttribute('src', 'img/article' + this.id + '/' + --this.currentImg + '.jpg');
    }
}