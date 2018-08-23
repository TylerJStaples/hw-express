const friends = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity,
        };
        const userData = req.body;
        const userScores = userData.scores;
        
        for(let i = 0; i < friends.length; i++){
            let currentFriend = friends[i];
            totalDifference = 0;
            console.log(currentFriend.name);
            for(let x = 0; x < currentFriend.scores.length; i++){
                let currentFriendScore = currentFriend.scores[x];
                let currentUserScore = useScores[x];
                totalDifference += Math.abs(parseInt(currentUserScore)-parseInt(currentFriendScore));
            }
            if(totalDifference <= bestMatch.friendDifference){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        friends.push(userData);
        res.json(bestMatch);
    });
}