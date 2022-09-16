const { Type } = require("../db.js");
const axios = require("axios");

async function getTypes(req, res, next) {
  try {
    const bdInfo = await Type.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(bdInfo);
  } catch (e) {
    next(e);
  }
}

const storeAll = async () => {
  try {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/type");
    const apiInfo = await apiUrl.data.results.map((e) => {
      return {
        id: e.url.split("/").splice(6, 1).join(),
        name: e.name,
      };
    });
    await Type.bulkCreate(apiInfo);
    console.log("Types correctly stored into the DB");
  } catch {
    console.log("Unexpected error while storing pokemon types in the DB");
  }
};

module.exports = {
  getTypes,
  storeAll,
};
