'use strict';

const db = require('../server/db');
const { User, Portfolio, Stock } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' }),
  ]);

  const portfolios = await Promise.all([
    Portfolio.create({ portfolioName: 'Investments', userId: 1 }),
    Portfolio.create({ portfolioName: 'Investments', userId: 2 }),
    Portfolio.create({ portfolioName: 'Investments 2', userId: 1 }),
  ]);

  const stocks = await Promise.all([
    Stock.create({
      symbol: 'AAPL',
      quantity: 15,
      pricePaid: 61.47,
      DatePurchased: '2013-03-07',
      portfolioId: 1,
    }),
    Stock.create({
      symbol: 'AAPL',
      quantity: 15,
      pricePaid: 94.7,
      DatePurchased: '2016-05-20',
      portfolioId: 2,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${portfolios.length} portfolios`);
  console.log(`seeded ${stocks.length} stocks`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
