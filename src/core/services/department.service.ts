import { type DepartmentInterface } from "../types/Department.interface";
import { orderByName } from "../helpers/helpers";

const url = "https://api-colombia.com/api/v1/Department";

const getDepartments = async (): Promise<DepartmentInterface[]> => {
    const data = await fetch(url);
    const dataJson = await data.json();
    const deparments = await orderByName(dataJson);
    return await deparments;
}

export default getDepartments;