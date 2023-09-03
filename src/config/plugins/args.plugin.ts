import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const argv = yargs( process.argv ).parseSync()