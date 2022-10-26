'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('urls', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			longUrl: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			shortUrl: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('urls');
	},
};
