import fs from 'fs'
import { existsSync, readFileSync, rmSync } from 'fs';
import { SaveFile } from './save-file.use-case';

describe('save-file.use-case.ts', () => {

  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs/file-destination',
    fileName: 'custom-table-name'
  }
  
  const customFilePath = `${ customOptions.fileDestination }/${ customOptions.fileName }.txt`

  afterEach( () => {
    if ( existsSync('outputs') ) rmSync('outputs', { recursive: true })
    if ( existsSync( customOptions.fileDestination ) ) rmSync( customOptions.fileDestination, { recursive: true })
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

  test('should save file with custom values', () => { 

    const saveFile = new SaveFile()

    const result = saveFile.execute( customOptions )
    const fileContent = readFileSync( customFilePath, { encoding: 'utf-8' })
    const fileExists = existsSync( customFilePath )


    expect( result ).toBeTruthy()
    expect( fileExists ).toBeTruthy()
    expect( fileContent ).toBe( customOptions.fileContent )


  })

  test('should return false if directory could not be created', () => { 
    
    const saveFile = new SaveFile()

    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation( () => { throw new Error('This is a custom error message from testing') } )

    const result = saveFile.execute( customOptions )

    expect( result ).toBe( false )

    mkdirSpy.mockRestore()

  })

  test('should return false if file could not be created', () => { 
    
    const saveFile = new SaveFile()

    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation( () => { throw new Error('This is a custom error message from testing') } )

    const result = saveFile.execute({ fileContent: 'Testing' })

    expect( result ).toBe( false )

    writeFileSpy.mockRestore()

  })

})