const displayError = (res, view, err) => res.render(`${view}`, {err: err});


module.exports = displayError;