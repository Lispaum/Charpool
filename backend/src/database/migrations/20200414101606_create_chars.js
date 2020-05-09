
exports.up = function(knex) {
    return knex.schema.createTable('chars', (table) => {
        table.increments('id');
        table.string('name');
        table.string('class')
        table.string('race');
        })
        .then(() => console.log("table 'chars' created"))
        .catch((err) => { console.log(err); throw err });
  
};

exports.down = function(knex) {
    return knex.chema.dropTable('chars');
  
};
