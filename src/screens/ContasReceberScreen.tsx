import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { maskData, maskValor } from "../utils/masks";


export default function ContasReceberScreen({ navigation }: any) {

    const [valor, setValor] = useState("");
    const [data, setData] = useState("");
    const [entidade, setEntidade] = useState("");
    const [categoria, setObservacao] = useState("");

    const entidades = [
        { id: 1, nome: "Cliente A" },
        { id: 2, nome: "Cliente B" },
        { id: 3, nome: "Cliente C" },
    ];
}
