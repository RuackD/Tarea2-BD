import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma

// fofos
async function main() {
    
}

main()
    .catch((e) => console.error(e))
    .finally (async() => await prisma.$disconnect())