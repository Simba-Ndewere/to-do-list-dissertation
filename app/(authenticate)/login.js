import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Image
} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const imageSource = require('./assets/bnu.jpg');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "600", color: "#0066b2" }}>TODO-LIST</Text>
            </View>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                height: 250
            }}>
                <Image
                    source={imageSource}
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: "contain"
                    }}
                />
            </View>
            <KeyboardAvoidingView>

                <View style={{}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#E0E0E0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 30
                        }}
                    >
                        <MaterialIcons
                            style={{ marginLeft: 8 }}
                            name="email"
                            size={24}
                            color="grey"
                        />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: email ? 17 : 17,
                            }}
                            placeholder="enter your email"
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            backgroundColor: "#E0E0E0",
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 30,
                        }}
                    >
                        <AntDesign style={{ marginLeft: 8 }} name="lock1" size={24} color="gray" />
                        <TextInput
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: email ? 17 : 17,
                            }}
                            placeholder="enter your password"
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignContent: "center", marginTop: 12, justifyContent: "space-between" }}>
                        <Text>Keep me logged in</Text>
                        <Text style={{ color: "007FFF>", fontWeight: "500" }}>
                            Forgot Password</Text>
                    </View>

                    <View style={{ marginTop: 60 }}>
                        <Pressable style={{
                            width: 200,
                            backgroundColor: "#6699CC",
                            padding: 15,
                            borderRadius: 6,
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>Login</Text>
                        </Pressable>

                        <Pressable onPress={() => router.replace("/register")} style={{ marginTop: 15 }}>
                            <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>Don't have an account? Sign Up </Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default login

const styles = StyleSheet.create({})