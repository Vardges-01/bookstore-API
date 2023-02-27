import { IsDate, IsString } from "class-validator";
import { AbstractEntity } from "../entity/abstract.entity";

export abstract class AbstractDto {
    @IsString()
    id: string;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;

    protected constructor(
        entity: AbstractEntity,
    ) {


        this.id = entity.id;
        this.createdAt = entity.createdAt;
        this.updatedAt = entity.updatedAt;

    }
}
