//
//  LoginView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/21/22.
//

import SwiftUI
import Firebase

//reference:  https://stackoverflow.com/questions/56874133/use-hex-color-in-swiftui
extension Color {
    init(hex string: String) {
        var string: String = string.trimmingCharacters(in: CharacterSet.whitespacesAndNewlines)
        if string.hasPrefix("#") {
            _ = string.removeFirst()
        }

        // Double the last value if incomplete hex
        if !string.count.isMultiple(of: 2), let last = string.last {
            string.append(last)
        }

        // Fix invalid values
        if string.count > 8 {
            string = String(string.prefix(8))
        }

        // Scanner creation
        let scanner = Scanner(string: string)

        var color: UInt64 = 0
        scanner.scanHexInt64(&color)

        if string.count == 2 {
            let mask = 0xFF

            let g = Int(color) & mask

            let gray = Double(g) / 255.0

            self.init(.sRGB, red: gray, green: gray, blue: gray, opacity: 1)

        } else if string.count == 4 {
            let mask = 0x00FF

            let g = Int(color >> 8) & mask
            let a = Int(color) & mask

            let gray = Double(g) / 255.0
            let alpha = Double(a) / 255.0

            self.init(.sRGB, red: gray, green: gray, blue: gray, opacity: alpha)

        } else if string.count == 6 {
            let mask = 0x0000FF
            let r = Int(color >> 16) & mask
            let g = Int(color >> 8) & mask
            let b = Int(color) & mask

            let red = Double(r) / 255.0
            let green = Double(g) / 255.0
            let blue = Double(b) / 255.0

            self.init(.sRGB, red: red, green: green, blue: blue, opacity: 1)

        } else if string.count == 8 {
            let mask = 0x000000FF
            let r = Int(color >> 24) & mask
            let g = Int(color >> 16) & mask
            let b = Int(color >> 8) & mask
            let a = Int(color) & mask

            let red = Double(r) / 255.0
            let green = Double(g) / 255.0
            let blue = Double(b) / 255.0
            let alpha = Double(a) / 255.0

            self.init(.sRGB, red: red, green: green, blue: blue, opacity: alpha)

        } else {
            self.init(.sRGB, red: 1, green: 1, blue: 1, opacity: 1)
        }
    }
}

let lightPink = Color(hex: "FF89AB")
let lightGray = Color(hex: "D4D4D4")

struct ContentView: View {
//    @State private var email: String = ""
//    @State private var password: String = ""
    @State private var showLandingPage = false
//    @State private var showRegisterPage = false
    @State var isLoginMode = false
    @State var email = ""
    @State var password = ""
    
    var body: some View {
        if showLandingPage {
            SwitchView()
        } else {
        NavigationView {
                    ScrollView {

                        VStack(spacing: 16) {
                            Image("login")
                            .resizable()
                            .scaledToFill()
                            .frame(width: 250,height: 250)
                            Picker(selection: $isLoginMode, label: Text("Picker here")) {
                                Text("Login")
                                    .tag(true)
                                Text("Create Account")
                                    .tag(false)
                            }.pickerStyle(SegmentedPickerStyle())

                            if !isLoginMode {
                                Button {

                                } label: {
                                    Image(systemName: "person.fill")
                                        .font(.system(size: 64))
                                        .padding()
                                        .foregroundColor(lightPink)
                                }
                            }

                            Group {
                                TextField("Email", text: $email)
                                    .keyboardType(.emailAddress)
                                    .autocapitalization(.none)
                                SecureField("Password", text: $password)
                            }
                            .padding(12)
                            .background(Color.white)

                            Button {
                                handleAction()
                            } label: {
                                HStack {
                                    Spacer()
                                    Text(isLoginMode ? "Log In" : "Create Account")
                                        .foregroundColor(.white)
                                        .padding(.vertical, 10)
                                        .font(.system(size: 14, weight: .semibold))
                                    Spacer()
                                }.background(lightPink)

                            }
                        }
                        .padding()

                    }
//                    .navigationTitle(isLoginMode ? "Log In" : "Create Account")
                    .background(Color.white)
                }
//        if showRegisterPage{
//            RegisterView()
//        } else if showLandingPage {
//            SwitchView()
//        } else {
//            ZStack{
//                VStack{
//                    Image("login")
//                        .resizable()
//                        .scaledToFill()
//                        .frame(width: 250,height: 250)
//
//                    TextField(
//                        "Email",
//                        text: $email
//                    ).textFieldStyle(.roundedBorder)
//                        .frame(width: 250, height: 40,alignment: .center)
//                        .cornerRadius(10)
//                        .padding(.bottom, 10)
//
//                    SecureField(
//                        "Password",
//                        text: $password
//                    ).textFieldStyle(.roundedBorder)
//                        .frame(width: 250, height: 40,alignment: .center)
//                        .cornerRadius(10)
//
//                    HStack{
//                        Spacer().frame(width: 110)
//                        Text("Forget password?").foregroundColor(lightPink)
//                            .bold()
//                    }
//
//                    Button(action: {showLandingPage.toggle()
//                        loginUser()
//                    }) {
//                        Text("Log In")
//                        .foregroundColor(.white)
//                        .font(.headline)
//                        .frame(width: 250, height: 40, alignment: .center)
//                    }.background(lightPink)
//                        .cornerRadius(10)
//
//                    HStack{
//                        Spacer().frame(width: 85)
//                        Text("New here?").foregroundColor(lightPink)
//                        Button(action: {showRegisterPage.toggle()}) {
//                            Text("Register?")
//                            .foregroundColor(lightPink)
//                            .font(.headline)
//                            .frame(width: 80, height: 40, alignment: .center)
//                        }
//                            .cornerRadius(10)
//                    }.frame(width: 500, height: 40, alignment: .center)
//    //                Spacer().frame(height: 120)
//                    HStack{
//                        Spacer().frame(width: 20)
//                        Button {
//                        } label: {
//                            Image(systemName: "applelogo")
//                                .resizable()
//                                .scaledToFill()
//                                .frame(width: 40,height: 50)
//                                .cornerRadius(15)
//                                .foregroundColor(.black)
//                        }
//                        Spacer().frame(width: 75)
//                        Button {
//                        } label:{
//                            Image("Facebook")
//                                .resizable()
//                                .scaledToFill()
//                                .frame(width: 50,height: 50)
//                                .cornerRadius(15)
//                        }
//                        Spacer().frame(width: 55)
//                        Button {
//                        } label: {
//                            Image("Google")
//                                .resizable()
//                                .scaledToFill()
//                                .frame(width:70,height: 70)
//                                .cornerRadius(15)
//                        }
//                    }
//                }
//            }
//        }
        }
    }
    private func handleAction() {
        if isLoginMode {
            
            loginUser()
        } else {
            createNewAccount()
        }
    }

    private func loginUser() {
        FirebaseManager.shared.auth.signIn(withEmail: email, password: password) { result, err in
            if let err = err {
                print("Failed to login user:", err)
                self.loginStatusMessage = "Failed to login user: \(err)"
                return
            }

            print("Successfully logged in as user: \(result?.user.uid ?? "")")
            showLandingPage.toggle()

            self.loginStatusMessage = "Successfully logged in as user: \(result?.user.uid ?? "")"
        }
    }

    @State var loginStatusMessage = ""

    private func createNewAccount() {
        FirebaseManager.shared.auth.createUser(withEmail: email, password: password) { result, err in
            if let err = err {
                print("Failed to create user:", err)
                self.loginStatusMessage = "Failed to create user: \(err)"
                return
            }

            print("Successfully created user: \(result?.user.uid ?? "")")

            self.loginStatusMessage = "Successfully created user: \(result?.user.uid ?? "")"
        }
    }
    
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}


