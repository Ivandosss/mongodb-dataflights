db.voos.findOne(
{ 
  $and: [
    {
      $nor: [
        {
          litrosCombustivel: { $gt: 600 },
        },
        {
          "empresa.nome": { $in: ["GOL", "AZUL"] },
        },
      ] },
        {
          litrosCombustivel: { $exists: true },
        },     
  ], 
},
{
  _id: false,
  vooId: true,
  "empresa.nome": true,
  litrosCombustivel: true,
},
);
