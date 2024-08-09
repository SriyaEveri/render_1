import db from '../model/index.js';

const setupDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true });

        await db.Loan.bulkCreate([
            { name: 'car loan', type: 'Equity'},
            { name: 'home loan', type: 'Bond' }
        ]);

        console.log('Finance database setup complete.');
    } catch (error) {
        console.error('Finance database setup error:', error);
    }
};

setupDatabase();

