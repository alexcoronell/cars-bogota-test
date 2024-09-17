import { MunicipalityInterface } from "../types/Municipality.interface";
import { orderByName } from "../helpers/helpers";

const getMunicipalities = async(id: number): Promise<MunicipalityInterface[]> => {
    const url = `https://api-colombia.com//api/v1/Department/${id}/cities`
    const data = await fetch(url);
    const dataJson = await data.json();
    const municipalities = await orderByName(dataJson);
    return await municipalities;
}

export default getMunicipalities;