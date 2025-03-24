import {Modal, View, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import TextInputWithLabel from "./TextInputWithLabel";
import GenericButton from "./GenericButton";
import QuantityInput from "./QuantityInput";

export default function EditStockPopup(props: {visible: boolean, setVisible: Function, food: {quantity: number, expires?: string, purchased?: string, owner?: string}}) {
    // const [errors, setErrors] = useState({name: "", category: "", description: ""})
    // const [values, setValues] = useState({name: props.food.name, category: props.food.category, description: props.food.description});

    const style = {
        width: 345,
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2,
        padding: 24,
    }

    return <Modal
            transparent={true} visible={props.visible}
            onRequestClose={() => props.setVisible(false)}
        >
        {/* transparent screen behind modal, press to close modal */}
        <TouchableOpacity onPress={() => props.setVisible(false)} style={{flex: 1, flexWrap: "wrap", flexDirection: "column", justifyContent: "center", alignContent: "center", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
            {/* modal content - not touchable so it doesnt close on click */}
            <TouchableWithoutFeedback>
                {/*Edit food form*/}
                <View style={style}>
                    <QuantityInput initialValue={props.food.quantity}/>
                    {/* TODO: make this a select input or RN equivalent?? */}
                    <TextInputWithLabel label="Shared" initialValue="Yes"/>
                    {/* TODO: make this a calendar picker or RN equivalent?? */}
                    <TextInputWithLabel label="Expires on" initialValue={props.food.expires}/>
                    <TextInputWithLabel label="Purchased on" initialValue={props.food.purchased}/>
                    <TextInputWithLabel label="Owner" initialValue={props.food.owner}/>
                    <GenericButton isDark={true} title="Save changes" action={
                        () => {
                            console.log("Updating stock info...");
                            props.setVisible(false);
                        }
                    }/>
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    </Modal>
}