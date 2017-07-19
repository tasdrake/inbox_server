
exports.up = (knex, Promise) => {
  return knex.schema.createTable('messages', table =>{
    table.increments('id');
    table.boolean('checked').defaultTo(false);
    table.string('subject').notNullable().defaultTo('no subject');
    table.text('body').notNullable();
    table.boolean('read').defaultTo(false);
    table.boolean('selected').defaultTo(false);
    table.boolean('starred').defaultTo(false);
    table.specificType('labels', 'text[]');
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('messages');
};
