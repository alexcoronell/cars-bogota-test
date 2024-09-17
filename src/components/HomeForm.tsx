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

interface dataInterface {
    field: number | string;
    validate: boolean
}


export default function HomeForm() {
    const [formData, setFormData] = useState<MessageInterface>({
        firstname: "",
        lastname: "",
        identificationNumber: "",
        department: "",
        municipality: "",
        mobilePhone: "",
        email: "",
        habeasData: false,
    })

    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        identificationNumber: "",
        department: "",
        municipality: "",
        mobilePhone: "",
        email: "",
        habeasData: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
        console.log(name, value);
        let finalValue: number | string | boolean = value;
        if (name === "identificationNumber" || name === "mobilePhone") {
            finalValue = validateJustNumber(value)
        }
        if (name === "habeasData") {
            finalValue = !formData.habeasData
        }
        setFormData({
            ...formData,
            [name]: finalValue
        })
    }


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
            if (!formData.department) return;
            setRequestStatusMunicipalities("loading")
            const data = await getMunicipalities(id);
            setMunicipalities(data)
            setRequestStatusMunicipalities("success")
        }
        getCurrentMunicipalities(formData.department as unknown as number);
    }, [formData.department])

    const regularExpressions = {
        name: /^([A-ZÁÉÍÓÚ][a-zñáéíóú]+[\s]*)+$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        idNumber: /[0-9]{1,8}/i,
        nPhone: /[0-9]{10}/i
    };

    const validateJustNumber = (n: string): number | string => {
        const vNumber = parseInt(n.replace(/[^0-9]/g, ''));
        return isNaN(vNumber) ? "" : vNumber;
    }

    const validateFirstname = (): boolean => {
        let error = ""
        if (formData.firstname.length === 0) {
            error = "El nombre es requerido"
        } else if (!regularExpressions.name.test(formData.firstname)) {
            error = "El nombre sólo debe contener letras"
        }
        setErrors(prev => ({
            ...prev,
            firstname: error
        }))
        return error.length === 0
    }

    const validateLastname = (): boolean => {
        let error = ""
        if (formData.lastname.length === 0) {
            error = "El apellido es requerido"
        } else if (!regularExpressions.name.test(formData.lastname)) {
            error = "El apellido sólo debe contener letras"
        }
        setErrors(prev => ({
            ...prev,
            lastname: error
        }))
        return error.length === 0
    }

    const validateEmail = (): boolean => {
        let error = ""
        if (!formData.email) {
            error = "El correo electrónico es requerido"
        } else if (!regularExpressions.email.test(formData.email)) {
            error = "El correo electrónico no es válido"
        }
        setErrors(prev => ({
            ...prev,
            email: error
        }))
        return error.length === 0
    }

    const validateIdentificationNumber = (): boolean => {
        let error = ""
        if (!formData.identificationNumber || formData.identificationNumber === 0) {
            error = "La cédula de identidad es requerida"
        }
        setErrors(prev => ({
            ...prev,
            identificationNumber: error
        }))
        return error.length === 0
    }

    const validateMobilePhone = (): boolean => {
        let error = ""
        if (!formData.mobilePhone || formData.mobilePhone === 0) {
            error = "El número de celular es requerido"
        }
        setErrors(prev => ({
            ...prev,
            mobilePhone: error
        }))
        return error.length === 0
    }

    const validateDepartment = (): boolean => {
        let error = ""
        if (!formData.department) {
            error = "El departamento es requerido"
        }
        setErrors(prev => ({
            ...prev,
            department: error
        }))
        return error.length === 0
    }

    const validateMunicipality = (): boolean => {
        let error = ""
        if (!formData.municipality) {
            error = "El Municipio es requerido"
        }
        setErrors(prev => ({
            ...prev,
            municipality: error
        }))
        return error.length === 0
    }

    const validateHabeasData = (): boolean => {
        let error = ""
        if (!formData.habeasData) {
            error = "Debe aceptar la política de tratamiendo de datos"
        }
        setErrors(prev => ({
            ...prev,
            habeasData: error
        }))
        return error.length === 0
    }


    const validateAll = ():void => {
        validateFirstname()
        validateLastname()
        validateIdentificationNumber()
        validateMobilePhone()
        validateEmail()
        validateDepartment()
        validateMunicipality()
        validateHabeasData()
    } 

    const validForm = (): boolean => {
        if (
            validateFirstname() &&
            validateLastname() &&
            validateIdentificationNumber() &&
            validateEmail() &&
            validateDepartment() &&
            validateMunicipality() &&
            validateHabeasData()
        ) {
            return true;
        } else {
            return false;
        }
    }


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        validateAll();
        console.log(formData);
        console.log(errors);
        if (!validForm()) return;
    }


    return (
        <section className={styles.HomeForm}>
            <form onSubmit={onSubmit}>

                {/* Firstname */}
                <div className="formgroup">
                    <label htmlFor="firstname">
                        <input type="text"
                            name="firstname"
                            value={formData.firstname}
                            id="firstname"
                            placeholder="firstname"
                            disabled={requestStatus == "loading"}
                            onChange={handleChange}
                            onBlur={validateFirstname}
                        />
                        <span>Nombre</span>
                    </label>
                    <p className={errors.firstname === "" ? "hidden" : ""}>
                        {errors.firstname}
                    </p>
                </div>

                {/* Lastname */}
                <div className="formgroup">
                    <label htmlFor="lastname">
                        <input type="text"
                            name="lastname"
                            value={formData.lastname}
                            id="lastname"
                            placeholder="lastname"
                            disabled={requestStatus == "loading"}
                            onChange={handleChange}
                            onBlur={validateLastname}
                        />
                        <span>Apellido</span>
                    </label>
                    <p className={errors.lastname === "" ? "hidden" : ""}>
                        {errors.lastname}
                    </p>
                </div>

                {/* Identification Number */}
                <div className="formgroup">
                    <label htmlFor="identificationNumber">
                        <input type="text"
                            name="identificationNumber"
                            value={formData.identificationNumber}
                            id="identificationNumber"
                            placeholder="identificationNumber"
                            disabled={requestStatus == "loading"}
                            onChange={handleChange}
                            onBlur={validateIdentificationNumber}
                        />
                        <span>Cédula de ciudadanía</span>
                    </label>
                    <p className={errors.identificationNumber === "" ? "hidden" : ""}>
                        {errors.identificationNumber}
                    </p>
                </div>

                {/* Mobile Phone */}
                <div className="formgroup">
                    <label htmlFor="mobilePhone">
                        <input type="text"
                            name="mobilePhone"
                            value={formData.mobilePhone}
                            id="mobilePhone"
                            placeholder="mobilePhone"
                            disabled={requestStatus == "loading"}
                            onChange={handleChange}
                            onBlur={validateMobilePhone}
                        />
                        <span>Número Celular</span>
                    </label>
                    <p className={errors.mobilePhone === "" ? "hidden" : ""}>
                        {errors.mobilePhone}
                    </p>
                </div>

                {/* Email */}
                <div className="formgroup">
                    <label htmlFor="email">
                        <input type="email"
                            name="email"
                            value={formData.email}
                            id="email"
                            placeholder="email"
                            disabled={requestStatus == "loading"}
                            onChange={handleChange}
                            onBlur={validateEmail}
                        />
                        <span>Correo Electrónico</span>
                    </label>
                    <p className={errors.email === "" ? "hidden" : ""}>
                        {errors.email}
                    </p>
                </div>

                {/* Department */}
                <div className="formgroup">
                    <label htmlFor="department">
                        <select name="department"
                            id="department"
                            onChange={handleChange}
                            onBlur={validateDepartment}
                        >
                            <option value={0}>Selecciona el departamento</option>
                            {
                                departments.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                        <span>Departamento</span>
                    </label>
                    <p className={errors.department === "" ? "hidden" : ""}>
                        {errors.department}
                    </p>
                </div>

                {/* Municipality */}
                <div className="formgroup">
                    <label htmlFor="municipality">
                        <select name="municipality"
                            id="municipality"
                            disabled={parseInt(formData.department as string) < 1}
                            onBlur={validateMunicipality}
                        >
                            <option value={0}>Selecciona el municipio</option>
                            {
                                municipalities.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                        <span>Municipio</span>
                    </label>
                    <p className={errors.municipality === "" ? "hidden" : ""}>
                        {errors.municipality}
                    </p>
                </div>

                <div className="formgroup-checkbox">
                    <label htmlFor="habeasData">
                        <input type="checkbox" name="habeasData" id="habeasData" className="hidden" onChange={handleChange} />
                        <div className={formData.habeasData ? "bg-orange-500" : ""}></div>
                        <span>Acepta</span>
                    </label>
                    <p className={errors.habeasData === "" ? "hidden" : ""}>
                        {errors.habeasData}
                    </p>
                </div>

                <button className="btn btn-primary" type="submit">Enviar</button>

            </form>
        </section>
    )
};
