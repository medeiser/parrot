// Parrot 
// Simple app that replies the given word or sentence through a rest API

// Imports
const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')

const app = new Koa()
const router = new Router()

// Routes
// Supports GET parameter
router.get('/parrot/:word', async ctx => {
    ctx.body = ctx.params.word
})

// Supports GET request parameter "sentence"
router.get('/parrot', async ctx => {
    ctx.body = ctx.query.sentence
})

app.use(Logger())
    .use(router.routes())
    .listen(3000)