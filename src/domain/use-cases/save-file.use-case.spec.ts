import { existsSync, readFileSync, rmSync } from 'fs';
import { SaveFile } from './save-file.use-case';

describe('save-file.use-case.ts', () => {

  afterEach( () => {
    rmSync('outputs', { recursive: true })
  })


  test('should save file with default values', () => { 
    
    const saveFile = new SaveFile()

    const filePath = 'outputs/table.txt'
    const options = {
      fileContent: 'test content'
    }

    const result = saveFile.execute( options )
    const fileExists = existsSync( filePath )
    const fileContent = readFileSync( filePath, { encoding: 'utf-8' })

    expect( result ).toBeTruthy()
    expect( fileExists ).toBeTruthy()
    expect( fileContent ).toBe( options.fileContent )

  })

})