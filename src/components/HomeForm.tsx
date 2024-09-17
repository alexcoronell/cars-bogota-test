"use client"
import { ChangeEvent, useState, useEffect } from "react"

/* Interfaces */
import { MessageInterface } from "@/core/types/Message.interface"
import { DepartmentInterface } from "@/core/types/Department.interface";
import { MunicipalityInterface } from "@/core/types/Municipality.interface";

/* Services */
import getDepartments from "@/core/services/department.service";
import getMunicipalities from "@/core/services/municipality.service";

import styles from '@/css/homeForm.module.css';

type RequestStatus = "init" | "loading" | "success" | "failed";


export default function HomeForm() {
    const [firstname, setFirstname] = useState({ field: "", validate: true });
    const [lastname, setLastname] = useState({ field: "", validate: true });
    const [email, setEmail] = useState({ field: "", validate: true });
    const [department, setDepartment] = useState({ field: 0, validate: true });
    const [municipality, setMunicipality] = useState({ field: 0, validate: true });
    const [mobilePhone, setMobilePhone] = useState("");
    const [habeasData, setHabeasData] = useState<boolean>(false);
    const [requestStatus, setRequestStatus] = useState<RequestStatus>("init");
    const [requestStatusDepartments, setRequestStatusDepartments] = useState<RequestStatus>("init");
    const [requestStatusMunicipalities, setRequestStatusMunicipalities] = useState<RequestStatus>("init");
    const [departments, setDepartments] = useState<DepartmentInterface[]>([]);
    const [municipalities, setMunicipalities] = useState<MunicipalityInterface[]>([]);

    useEffect(() => {
        const getData = async () => {
            setRequestStatusDepartments("loading")
            const data = await getDepartments();
            setDepartments(data);
            setRequestStatusDepartments("success")
        }
        getData();
    }, [])

    useEffect(() => {
        const getCurrentMunicipalities = async (id: number) => {
            if(!department.field) return;
            setRequestStatusMunicipalities("loading")
            const data = await getMunicipalities(id);
            setMunicipalities(data)
            setRequestStatusMunicipalities("success")
        }
        getCurrentMunicipalities(department.field);
    }, [department])

    const regularExpressions = {
        name: /^([A-ZÁÉÍÓÚ][a-zñáéíóú]+[\s]*)+$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^[0-9]/
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
    }

    const onChangeFirstname = (e: ChangeEvent<HTMLInputElement>): void => {
        const newValue = e.target as HTMLInputElement;
        const newFirstname = newValue.value;
        const nameValidate = regularExpressions.name.test(newFirstname);
        setFirstname((prev) => ({ ...prev, field: newFirstname, validate: nameValidate }))
    }

    const onChangeLastname = (e: ChangeEvent<HTMLInputElement>): void => {
        const newValue = e.target as HTMLInputElement;
        const newLastname = newValue.value;
        const nameValidate = regularExpressions.name.test(newLastname);
        setLastname((prev) => ({ ...prev, field: newLastname, validate: nameValidate }))
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        const newValue = e.target as HTMLInputElement;
        const newEmail = newValue.value;
        const emailValidate = regularExpressions.email.test(newEmail);
        setEmail((prev) => ({ ...prev, field: newEmail, validate: emailValidate }))
    }

    const onChangeDepartment = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { value } = e.target as HTMLSelectElement;
        const id = parseInt(value)
        const validate = ( id > 0 ) ? true : false;
        setMunicipality(prev => ({...prev, field: 0, validate: false}));
        setDepartment(prev => ({...prev, field: id, validate }))
    }

    const onChangeMunicipality = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { value } = e.target as HTMLSelectElement;
        const id = parseInt(value)
        const validate = ( id > 0 ) ? true : false;
        setMunicipality(prev => ({...prev, field: id, validate}));
    }


    return (
        <section className={styles.HomeForm}>
            <form onSubmit={onSubmit}>

                {/* Firstname */}
                <div className="formgroup">
                    <label htmlFor="name">
                        <input type="text"
                            name="firstname"
                            value={firstname.field}
                            id="firstname"
                            placeholder="firstname"
                            disabled={requestStatus == "loading"}
                            onChange={onChangeFirstname}
                            onBlur={onChangeFirstname}
                        />
                        <span>Nombre</span>
                    </label>
                    <p className={!firstname.validate ? "" : "hidden"}>
                        {firstname.field.length == 0 ? "El Campo es requerido" : "Caracteres especiales no permitidos"}
                    </p>
                </div>

                {/* Lastname */}
                <div className="formgroup">
                    <label htmlFor="name">
                        <input type="text"
                            name="lastname"
                            value={lastname.field}
                            id="lastname"
                            placeholder="lastname"
                            disabled={requestStatus == "loading"}
                            onChange={onChangeLastname}
                            onBlur={onChangeLastname}
                        />
                        <span>Apellido</span>
                    </label>
                    <p className={!lastname.validate ? "" : "hidden"}>
                        {lastname.field.length == 0 ? "El Campo es requerido" : "Caracteres especiales no permitidos"}
                    </p>
                </div>

                {/* Email */}
                <div className="formgroup">
                    <label htmlFor="name">
                        <input type="email"
                            name="email"
                            value={email.field}
                            id="email"
                            placeholder="email"
                            disabled={requestStatus == "loading"}
                            onChange={onChangeEmail}
                            onBlur={onChangeEmail}
                        />
                        <span>Correo Electrónico</span>
                    </label>
                    <p className={!email.validate ? "" : "hidden"}>
                        {email.field.length == 0 ? "El campo es requerido" : "El correo electrónico no es válido"}
                    </p>
                </div>

                {/* Department */}
                <div className="formgroup">
                    <label htmlFor="department">
                        <select name="department" id="department" onChange={onChangeDepartment} >
                            <option value={0}>Selecciona el departamento</option>
                            {
                                departments.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                        <span>Departamento</span>
                    </label>
                </div>

                {/* Municipality */}
                <div className="formgroup">
                    <label htmlFor="municipality">
                        <select name="municipality" id="municipality" disabled={department.field < 1}>
                        <option value={0}>Selecciona el municipio</option>
                            {
                                municipalities.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                        <span>Municipio</span>
                    </label>
                </div>

                <div className="formgroup-checkbox">
                    <label htmlFor="habeasData">
                        <input type="checkbox" name="habeasData" id="habeasData" className="hidden" onChange={() => setHabeasData(prev => !prev)} />
                        <div className={habeasData ? "bg-orange-500" : ""}></div>
                        <span>Acepta</span>
                    </label>
                </div>

            </form>
        </section>
    )
};
