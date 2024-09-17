/* Components */
import { SvgSpinnersBlocksWave } from "../icons/SvgSpinnersBlockWave";
import { MdiWarning } from "../icons/MdiWarning";
import { MdiSuccessCircle } from "../icons/MdiSuccessCircle";
import { MdiErrorOutline } from "../icons/MdiErrorOutline";

/* Types */
import { RequestStatus } from "@/core/types/RequestStatus.type";

interface StatusMessageProps {
    statusRequest: RequestStatus;
    text: string;
}

export default function ModalResponse({ statusRequest, text }: StatusMessageProps) {
    let classes = ""
    let title = ""
    let borderColor = ""
    if(statusRequest === "loading") classes = "text-orange-500";
    if(statusRequest === "warning") {
        classes = "text-yellow-600"
        borderColor = "border-yellow-600"
        title = "Advertencia"
    };
    if(statusRequest === "success") {
        classes = "text-green-700"
        borderColor = "border-green-700"
        title: "Exito"
    };
    if(statusRequest === "error") {
        classes = "text-red-700";
        borderColor = "border-red-700"
        title ="Error"
    };

    return (
        <>
            {
                statusRequest === "loading" ? (
                    <SvgSpinnersBlocksWave className={`${classes} text-9xl`} />
                )
                : (
                <div className={`bg-white/80 text-neutral-950 w-[80%] max-w-[450px] h-full max-h-[350px] p-10 flex flex-col items-center justify-center border-2 ${borderColor}`}>
                    {statusRequest === 'warning' && (<MdiWarning className={`${classes} text-8xl`} />)}
                    {statusRequest === 'success' && (<MdiSuccessCircle className={`${classes} text-8xl`} />)}
                    {statusRequest === 'error' && (<MdiErrorOutline className={`${classes} text-8xl`} />)}
                    <h3 className={`${classes} text-4xl`}>{title}</h3>
                    <p className="text-center text-lg font-bold">{text}</p>
                </div>
                )
            }
        </>
    )
};
