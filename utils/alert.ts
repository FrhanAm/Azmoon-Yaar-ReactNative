import { Alert } from "react-native";

export default function alert (testCount: number, testTime: number, initCount: number, initTime: number) {
    if (testTime === 0) {
        if (testCount !== 0) {
            Alert.alert(
            "پیام سیستم",
            `زمان شما به پایان رسید. شما به ${initCount - testCount} سوال پاسخ دادید`
            )
        } else {
            Alert.alert(
            "پیام سیستم",
            `زمان شما به پایان رسید. شما به همه ی سوالات پاسخ دادید`
            )
        }
    } else {
            Alert.alert(
            "پیام سیستم",
            `شما به همه ی سوالات پاسخ دادید و ${initTime - testTime} زمان باقی مانده`
            )
    }
}