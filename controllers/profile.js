const handleProfileGet = (req, res, knex) => {
    const {id} = req.params;
    knex.select('*').from('users').where({id})
    .then(user => {
        user.length ? res.json(user[0]) : res.status(404).json('Not found')
    }).catch(err => res.status(400).json('error getting the user'));
};

module.exports = {
    handleProfileGet
};