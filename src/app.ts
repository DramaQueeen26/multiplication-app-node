import { mkdirSync, writeFileSync } from 'fs'

const base: number = 5
let operation: string = ''
let content: string = ''

const header: string = `
=====================================
            Tabla del 5              
=====================================
`
console.log( header )

for (let i = 1; i <= 10; i++) {
  
  operation += `${ base } x ${ i } = ${ base * i } \n`
  console.log(`${ base } x ${ i } = ${ base * i }`)

}

content = header + operation

const outputPath = 'outputs'

mkdirSync( outputPath, { recursive: true } )
writeFileSync(`outputs/${ base }.txt`, content)

console.log( 'Archivo creado' )