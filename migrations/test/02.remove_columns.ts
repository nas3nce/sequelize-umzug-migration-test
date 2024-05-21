import type { Migration } from "../../src"


export let up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('UzmzugTest', 'password');
}



