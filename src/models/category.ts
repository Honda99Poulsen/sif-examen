import { Model, Table, Column, DataType }  from "sequelize-typescript"


@Table({
    tableName: 'categories',
    timestamps: false
})
export class Category extends Model{
    
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })

    public id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        unique: true,
    })

    public name: string;

    @Column({
        type: DataType.STRING(250),
    })

    public description: string;
}

