const cardsGenrator =(function () {
    async  function getData() {
        const data =  await fetch("../data.json");
        const list =  await data.json();
        return list // get data from json with JSON.stringify

    }
    let cards,datam;
     function getCards() {
      cards = getData();
      cards.then(res => {
          datam =res
          console.log(datam);
                        }); // res is the recived data
     }
     getCards();
    console.log(datam);  
})();