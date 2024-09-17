import { DepartmentInterface } from "../types/Department.interface";
import { MunicipalityInterface } from "../types/Municipality.interface";

export const orderByName = (data: DepartmentInterface[] | MunicipalityInterface[]) => {
    return data.sort((a: DepartmentInterface | MunicipalityInterface, b: DepartmentInterface | MunicipalityInterface) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
    })
}