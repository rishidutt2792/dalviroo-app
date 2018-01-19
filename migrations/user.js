exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('products', (table) => {
      table.increments('id').primary();
      // Email
      table.string('name').unique().notNullable().comment('name');
      table.integer('price').comment('price');
      table.boolean('isActive').defaultTo(true).comment('Active?');
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
    }).then(() => {
        // add some seed data 
        return knex('products').insert([{
        name: 'Wrap',
        price: '150',
        },{
        name: 'Chicken Rice Feast',
        price: '280',
        },{
        name: 'Grilled Chicken Breast:',
        price: '250',
        },{ 
        name: 'Jumbo Chicken Wrap',
        price: '220'
        },{ 
        name: 'Royal indian meal',
        price: '265'
        },{ 
        name: 'Jumbo Veg Wrap',
        price: '225'}

      ]);
    }),
 
    // order table
    knex.schema.createTableIfNotExists('order', (table) => {
      table.increments('id').primary();
      table.integer('productId').notNullable().references('products.id').comment('productId');
      table.integer('quantity').comment('quantity of product');
      table.date('datePurchased').comment('datePurchase of product');
      table.boolean('isPrepared').defaultTo(false).comment('Prepared?');
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
    }).then(() => {
      console.log('Created Table: order table');
    }),
    //prediction table
    knex.schema.createTableIfNotExists('prediction', (table) => {
      table.increments('id').primary();
      table.date('date').comment('date of prediction for a product');
      table.integer('productId').notNullable().references('products.id').comment('productId');
      table.integer('prediction').comment('quantity of product');
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
    }).then(() => {
      console.log('Created Table: prediction table');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.raw('drop table if exists users cascade'),
    knex.raw('drop table if exists products cascade'),
    knex.raw('drop table if exists order cascade'),
    knex.raw('drop table if exists prediction cascade')


  ]).then((values) => {
    console.log('dropped all tables : ', values);
  }, (reason) => {
    console.log('failed to rollback db : ', reason);
  });

};
