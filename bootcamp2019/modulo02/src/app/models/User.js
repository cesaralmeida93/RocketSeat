import { Model, Sequelize } from 'sequelize';
import bcrypt, { hash } from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      user.password_hash = await bcrypt.hash(user.password_hash, 8);
    });

    return this;
  }

  checkPassword(password_hash) {
    return bcrypt.compare(password_hash, this.password_hash);
  }
}

export default User;
