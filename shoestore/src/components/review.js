writeFireData = e => {
    e.preventDefault();
    const calledReview = database.ref("review/");

    calledReview.on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            //item.key = childSnapshot.key;

            calledReview.push(item);
        });

        return calledReview;
    })
}