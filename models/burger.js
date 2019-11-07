var orm =  require('../config/orm');

var burger = {
    all: function(cb){
        orm.selectAll('burgers',function(res){
            cb(res);
        });
    },
    create: function(){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(){
        orm.updateOne('burgers', condition, function(res){
            cb(res);
        });
    }

};

module.exports = burger;

