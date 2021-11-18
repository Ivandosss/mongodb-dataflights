db.voos.findOne({ $and: [
  {
    "empresa.nome": 
    { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
  },
  {
    "aeroportoOrigem.sigla": { $eq: "SBGR" },
  },
  {
    "aeroportoDestino.sigla": { $eq: "KJFK" },
  }] },
  {
    _id: false,
    vooId: true,
  });
