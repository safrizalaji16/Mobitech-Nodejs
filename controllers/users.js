const { comparePassword } = require("../helpers/bcrypt");
const { jwtSign } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      const newUser = await User.create({
        email,
        password,
        role: "user",
      });

      res.status(201).json({
        data: {
          id: newUser.id,
          email: newUser.email,
          msg: "User Register Success!",
        },
      });
    } catch (err) {
      next(err);
    }
  }
  static async adminRegister(req, res, next) {
    try {
      const newUser = await User.create({
        ...req.body,
        role: "admin",
      });

      res.status(201).json({
        data: {
          id: newUser.id,
          email: newUser.email,
          msg: "Admin Register Success!",
        },
      });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw {
          name: "Error email or password",
        };
      }

      const findUser = await User.findOne({
        where: { email },
      });

      if (!findUser || !comparePassword(password, findUser.password)) {
        throw {
          name: "Error email or password",
        };
      }

      const access_token = jwtSign({ id: findUser.id });

      res.status(200).json({
        data: {
          access_token,
          email: findUser.email,
          role: findUser.role,
          msg: "Login Success!",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      res.json({ data: users });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const userById = await User.findByPk(id);

      if (!userById) {
        throw {
          name: "User Not Found",
        };
      }

      await User.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `User with email ${productById.email} has been deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
