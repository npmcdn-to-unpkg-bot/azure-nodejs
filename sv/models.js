﻿var Sequelize = require('sequelize');
var sequelize = require('./connection');

var User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'id'
    },
    sid: {
        type: Sequelize.STRING,
        field: 'sid'
    },
    username: {
        type: Sequelize.STRING,
        field: 'username'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
    user_role: {
        type: Sequelize.INTEGER,
        field: 'roleId'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt'
    }
}, {
    freezeTableName: true
});

var Role = sequelize.define('roles', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'id'
    },
    sid: {
        type: Sequelize.STRING,
        field: 'sid'
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt'
    }
});

var Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'id'
    },
    sid: {
        type: Sequelize.STRING,
        field: 'sid'
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt'
    }
},{
    freezeTableName: true
});

var Topic = sequelize.define('topics', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'id'
    },
    sid: {
        type: Sequelize.STRING,
        field: 'sid'
    },
    title: {
        type: Sequelize.STRING,
        field: 'title'
    },
    message: {
        type: Sequelize.STRING,
        field: 'message'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt'
    },
    post_by: {
        type: Sequelize.INTEGER,
        field: 'userId'
    },
    topic_category: {
        type: Sequelize.INTEGER,
        field: 'categoryId'
    }
}, {
    freezeTableName: true
});


User.belongsTo(Role, { foreignKey: 'user_role' });
Topic.belongsTo(User, { foreignKey: 'post_by' });
Topic.belongsTo(Category, { foreignKey: 'topic_category' });

exports.User = User;
exports.Role = Role;
exports.Category = Category;
exports.Topic = Topic;