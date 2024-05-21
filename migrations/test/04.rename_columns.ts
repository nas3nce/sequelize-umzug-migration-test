import type { Migration } from "../../src"


export let up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.renameColumn('UzmzugTest', 'password' , 'renamed_column');
}

export let down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.renameColumn('UzmzugTest','renamed_column',  'password' )
}


