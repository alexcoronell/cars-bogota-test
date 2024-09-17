import { MessageInterface } from "@/core/types/Message.interface";

interface StatusMessageProps {
    dataRegister: MessageInterface;
    registerNumber: string
}

import styles from "@/css/modalRegister.module.css";

export default function ModalRegister({ dataRegister, registerNumber }: StatusMessageProps) {
    return (
        <div className={styles.ModalRegister}>
            <h4>Registro:</h4>
            <h3>#{registerNumber}</h3>
            <div className={styles.ModalRegister__data}>
                <p>Nombre:</p>
                <h5>{dataRegister.firstname}</h5>
                <p>Apellido:</p>
                <h5>{dataRegister.lastname}</h5>
                <p>Cédula de Ciudadanía:</p>
                <h5>{dataRegister.identificationNumber}</h5>
                <p>Número celular:</p>
                <h5>{dataRegister.mobilePhone}</h5>
                <p>Correo Electrónico:</p>
                <h5>{dataRegister.email}</h5>
                <p>Departamento:</p>
                <h5>{dataRegister.department}</h5>
                <p>Municipio:</p>
                <h5>{dataRegister.municipality}</h5>
            </div>
        </div>
    )
};
