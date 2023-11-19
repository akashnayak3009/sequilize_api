import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
            len: {
                args: [4, 10],
                msg: "Password must be between 4 and 10 characters",
            }
        }
    }
}, {
    timestamps: true,
    hooks: {
        beforeValidate: (user) => {
            if (user.email) {
                user.email = user.email.replace(/\s/g, '');
            }
        },
        beforeSave: async (user) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);
                user.password = hashedPassword;
            }
        }
    }
});

User.prototype.isPasswordMatched = function (password) {
    return bcrypt.compareSync(password, this.password);
};

export default User;