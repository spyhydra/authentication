module.exports.home = function(req, res){
    
    return res.render('index', {
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}