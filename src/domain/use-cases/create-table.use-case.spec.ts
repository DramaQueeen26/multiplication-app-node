import { CreateTable } from './create-table.use-case';

describe('create-table.use-case.ts', () => { 

  test('should create table with default values', () => { 
  
    const createTable = new CreateTable()

    const table = createTable.execute({ base: 2 })
    const rows = table.split('\n')
    
    expect( createTable ).toBeInstanceOf( CreateTable )
    expect( table ).toContain('2 x 1 = 2')
    expect( table ).toContain('2 x 10 = 20')
    expect( rows.length ).toBe( 10 )

  })

  test('should create table with custom values', () => {

    const options = {
      base: 3,
      limit: 20
    }
    
    const createTable = new CreateTable()

    const table = createTable.execute( options )
    const rows = table.split('\n')

    expect( table ).toContain(`${ options.base } x 1 = ${ options.base * 1 }`)
    expect( table ).toContain(`${ options.base } x ${ options.limit } = ${ options.base * options.limit }`)
    expect( rows.length ).toBe( options.limit )

  })

})