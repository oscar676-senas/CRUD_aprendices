require("dotenv").config()

const { Prismapg } = require("@prisma/adapter-pg")
const { PrismaClient } = require("@prisma/client")

const adapter = new Prismapg({
    connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({ adaptador })

module.exports = prisma