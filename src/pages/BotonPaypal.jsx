import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";

const PayPalButtonsComponent = () => {

    const Navigate = useNavigate()


    const initialOptions = {
        "cliend-id": "AZNN0dnCDNMyFMgAUtgAcmDPb5DwnUmlXy0EOPCOzMdgrP-JKNTDxOvkFJb4B0JUaAChRWPN0pcHQ34n",
        currency: "USD",
        internet : "capture",

    }



    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "5"
                    }
                }
            ]
        })
    }


    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const name = details.payer.name.given_name
        
            console.log(name)
            console.log("esta funcionando?")
            alert("transaction completed by ")
        })
    }


        return (
            <PayPalScriptProvider options ={initialOptions}>
                <PayPalButtons createOrder={createOrder} onApprove={onApprove}/>
            </PayPalScriptProvider>
        )
    
}



export default function BotonPaypal(){
    return (
        <div>
        <PayPalButtonsComponent />
        </div>
    )
}