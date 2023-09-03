export interface CreateTableUseCase {
  execute: ( options: CreateTableOptions ) => string
}

export interface CreateTableOptions {
  base: number
  limit?: number 
}

export class CreateTable implements CreateTableUseCase{

  constructor(){}

  execute( { base, limit }: CreateTableOptions) {

    let outputMessage: string = ''

    for (let i = 1; i <= 10; i++) {

      outputMessage += `${ base } x ${ i } = ${ base * i } \n`
    
    }

    return outputMessage

  }
  
}