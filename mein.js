'Use strict'

const cat = {
    satiety: 0,
    sleep: function () {
        if (this.satiety < 100) {
            alert('The cat wants to eat, feed the cat before his going to sleep.');   
        } else {
            this.satiety = this.satiety - 100;
        }
    },
    feedСat: function(amount) {
        this.satiety = this.satiety + amount;
    },
}

cat.feedСat(1000);
cat.sleep();
cat.sleep();
console.log(cat.satiety);