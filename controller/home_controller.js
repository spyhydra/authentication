module.exports.home = function(req, res){
    
    return res.render('login', {
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}