const knex = require('../../db'); // returns the knex connection!

const Model = knex('category');

module.exports = {
    getAll: function(){
        return Model.select('*')
    },
    getOne: function(id){
        return Model.where('id', id).first()
    },
    create: function(category){
        return Model.insert(category, '*')
    },
    update: function(id, category){
        return Model.where('id', id).update(category, '*')
    },
    delete: function(id){
        return Model.where('id', id).del()
    },
}