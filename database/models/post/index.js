const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Post extends Model { };

    Post.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.TEXT('tiny'),
            },
            text: {
                type: DataTypes.TEXT,
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                }
            }
        },
        {
            sequelize,
            modelName: 'posts'
        }
    );

    return Post;
}