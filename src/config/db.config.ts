import * as SqlConnection from 'sequelize';

export class SequelizeConfig {
    private sequelize: SqlConnection.Sequelize;
     public setConnection() {
        this.sequelize = new SqlConnection.Sequelize('feet', 'root', 'Bekool@321', {
                    host: 'localhost',
                    logging: true,
                    dialect: 'mysql'
                });
                console.log('Db Connected..................');
    }
    public getSequelize() {
        return this.sequelize;
    }
}
export const sequelize = new SequelizeConfig();


