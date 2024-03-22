import { DataTypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db.js";
import User from "./User.model.js";

export default class Chats extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Chats.init(
  {
    chatId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    senderId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      // references: {
      //   model: User,
      //   key: "user_id",
      // },
    },
    receiverId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), // sequelize can support ARRAY datatype with postgreSQL
      // references: {
      //   model: User,
      //   key: "user_id",
      // },
    },
  },
  {
    modelName: "chats",
    sequelize: db,
  }
);
