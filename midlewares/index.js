const middlewares = {

    isLoggedIn : function (req, res, next) {
        console.log(console.session);
        if (req.session.login) return next();
        res.redirect('/simulador');
    }
};
module.exports = middlewares;