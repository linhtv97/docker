const Koa = require('koa');
const Router = require('koa-router');
const config = require('./knexfile');
const knex = require('knex')(config);

require('dotenv').config();
const app = new Koa();
const router = new Router();

router.get('/docker', (context) => {
    context.body = "Anh yeu em S2"
});

router.get('/', async (context, next) => {
    context.body = await knex('users').select('*').where('id', 1).first();
});
router.get('/create', async (context)=> {
    await knex('users').insert({username: 'linhdz', password: 123});
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(process.env.PORT, () => {
    console.log("app listen port " + process.env.PORT);
});