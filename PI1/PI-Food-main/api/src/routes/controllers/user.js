const { User } = require("../../db");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const getUsers = async () => {
  try {
    const dbInfo = await User.findAll();
    return dbInfo;
  } catch (error) {
    console.log("El error de controllers user getinfoDB es: ", error.message);
    throw new Error("El error controller getInfoDB es: ", error.message);
  }
};

module.exports = { validateEmail, getUsers };
