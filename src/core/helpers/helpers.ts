import { DepartmentInterface } from "../types/Department.interface";
import { MunicipalityInterface } from "../types/Municipality.interface";

export const orderByName = (data: DepartmentInterface[] | MunicipalityInterface[]) => {
    return data.sort((a: DepartmentInterface | MunicipalityInterface, b: DepartmentInterface | MunicipalityInterface) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
    })
}

export const generateRegisterNumber = ():string => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890"
    let registerNumber = "";
    for(let i= 0; i < 4; i++) {
        const index = Math.floor(Math.random() * 4);
        registerNumber += letters[index]
    }
    for(let i= 0; i < 8; i++) {
        const index = Math.floor(Math.random() * 8);
        registerNumber += numbers[index]
    }

    return registerNumber;
}