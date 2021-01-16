module.exports = {
    dragonTreasure: async(req, res) => {
        const db = req.app.get('db');
        const treasure = await db.get_dragon_treasure(1);

        return res.status(200).send(treasure);
    },
    getUserTreasure: async(req, res) => {
        const db = req.app.get('db');
        const treasure = await db.get_user_treasure([req.session.user.id]);

        return res.status(200).send(treasure);
    },
    addUserTreasure: async(req, res) => {
        const {treasureURL} = req.body,
              {id} = req.session.user,
              db = req.app.get('db'),
              userTreasure = await db.add_user_treasure([treasureURL, id]);
        
        res.status(200).send(userTreasure);
    },
    getAllTreasure: async(req, res) => {
        const db = req.app.get('db'),
              treasure = await db.get_all_treasure();

        return res.status(200).send(treasure);
    }
}