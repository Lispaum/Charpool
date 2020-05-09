const { Model } = require('objection');

const options = 
{
    client: 'mysql2',
    connection: 
    {
        host: 'localhost',
        user: 'root',
        password: '1050729857aomttx#@!',
        database: 'charpool'
    }
}

const knex = require('knex')(options);
Model.knex(knex);

class chars extends Model{
    static get tableName(){
        return 'chars';
    }
}

module.exports = chars;

module.exports = (req, res) => {
    res.end('1 3')
  }