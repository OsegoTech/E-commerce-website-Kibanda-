const getSignup = (req, res) => {
    res.render('customer/auth/signup');
};

const signup = (req, res) => {
    
}

const getLogin = (req, res) => {

};

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    signup: signup
};
