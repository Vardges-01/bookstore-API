import { compact, map} from "lodash";
import { AbstractDto } from "./dto/abtract.dto";
import { AbstractEntity } from "./entity/abstract.entity";

export {};

declare global{
    interface Array<T>{
        toDtos<DTO extends AbstractDto>(this: T[], options?: any): DTO[];
    }
}

Array.prototype.toDtos = function <Entity extends AbstractEntity<DTO>, DTO extends AbstractDto>(options?: any): DTO[] {
    return compact(map<Entity, DTO>(this as Entity[], (item) => item.toDto()));
};