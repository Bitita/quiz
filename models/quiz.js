//Definicion del modelO Quizz

module.exports = function(sequelize, DataTypes){
   return sequelize.define('Quiz',
     { pregunta: 
        {type: DataTypes.STRING, 
         validate: { notEmpty: { msg: "--> La pregunta debe estar llena"}}
      },
       respuesta: {type: DataTypes.STRING,
                   validate: { notEmpty: { msg: "--> La respuesta debe estar llena"}}
       }
     });
}