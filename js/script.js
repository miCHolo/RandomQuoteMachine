var quotes = [
    {
        quote: "Imagination is more important than knowledge",
        author: "Albert Einstein"
    },
    {
        quote: "I've made the most important discovery of my life. It's only in the mysterious equation of love that any logical reasons can be found.",
        author: "John Forbes Nash"
    },
    {
        quote: "May the force be with you.",
        author: "Star Wars"
    }
];

var colors = [
    "darkGrey",
    "lightblue",
    "orange",
    "red",
    "cyan"
];

var index = Math.floor(Math.random() * quotes.length);
var colIndex = Math.floor(Math.random() * colors.length);

console.log(index);

var app = new Vue({
    el: '#app',
    data: {
        quote: quotes[index].quote,
        author: "~" + quotes[index].author,
        bgColor: colors[colIndex]
    },
    methods: {
        submit: function(event) {
            index = Math.floor(Math.random() * quotes.length);
            colIndex = Math.floor(Math.random() * colors.length);
            this.quote = quotes[index].quote;
            this.author = "~" + quotes[index].author;
            this.bgColor = colors[colIndex];
        }
    }
});