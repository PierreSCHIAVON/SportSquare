// models/Participation.js

module.exports = (sequelize, DataTypes) => {
    const Participation = sequelize.define('Participation', {
        id_participation: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_users: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // Nom du modèle `User`
                key: 'id_user'
            }
        },
        id_evenement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Evenements', // Nom du modèle `Evenement`
                key: 'id_evenement'
            }
        },
        date_participation: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    
    // Associations
    Participation.associate = (models) => {
      Participation.belongsTo(models.User, { foreignKey: 'id_users', as: 'participant' });
      Participation.belongsTo(models.Evenement, { foreignKey: 'id_evenement', as: 'evenement' });
    };
  
    return Participation;
};
  