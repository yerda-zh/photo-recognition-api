const handleImage = (req, res, knex) => {
    const {id} = req.body;
    knex.where('id', '=', id)
    .increment('entries', 1).from('users').returning('entries')
    .then(entries => res.json(entries[0].entries))
    .catch(err => res.status(400).json('unable to get count of entries'));
};

module.exports = {
    handleImage
};
