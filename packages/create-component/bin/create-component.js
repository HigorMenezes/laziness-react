#!/usr/bin/env node

/**
 * --
 */

const { program } = require('commander');
const { prompt } = require('inquirer');

program
  .option(
    '-n, --name <component name>',
    'define the component name that will be build',
    null
  )
  .parse(process.argv);

console.log(program.args);
console.log(program.opts());

async function run() {
  const result = await prompt([
    {
      type: 'input',
      name: 'componentName',
      message: 'What is the component name?',
    },
    {
      type: 'checkbox',
      name: 'requiredList',
      message: 'Select the options to build the component.',
      choices: ['prop-types', 'styled-components', 'material-ui'],
    },
  ]);
  console.log(result);
}

run();
