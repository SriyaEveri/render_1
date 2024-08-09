export default (sequelize, DataTypes) => {
    const Loan = sequelize.define('Loan', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Loan;
};
