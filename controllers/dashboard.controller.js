const renderViewDashboard = (req, res) => {
    res.render('pages/dashboard', { title: 'Dashboard' });
}

module.exports = {
    renderViewDashboard
}