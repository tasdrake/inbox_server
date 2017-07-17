
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table =>{
    table.increments('id')
    table.string('subject').notNullable().defaultTo('no subject')
    table.boolean('read')
    table.boolean('selected')
    table.boolean('starred')
    table.specificType('labels', 'text[]')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
