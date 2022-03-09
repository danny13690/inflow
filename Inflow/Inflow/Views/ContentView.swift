//
//  LoginView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/21/22.
//

import SwiftUI

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
    @State private var showFeedPage = false
//    @State private var showRegisterPage = false
    @State var isLoginMode = true
    @State var wrongCredentials = false
    @State var email = ""
    @State var password = ""
    @State var repeatPassword = ""
    
    @State var name = ""
    @State var age = ""
    @State var gender = ""
    @State var location = ""
    @State var instagram_handle = ""
    @State var followers = ""
    
    var body: some View {
        if showFeedPage {
            SwitchView()
        } else {
        NavigationView {
                    ScrollView {

                        VStack() {
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
//                                Button {

//                                } label: {
//                                    Image(systemName: "person.fill")
//                                        .font(.system(size: 64))
//                                        .padding()
//                                        .foregroundColor(lightPink)
                                Group {
                                TextField("Name", text: $name)
                                HStack{
                                    TextField("Age", text: $age)
                                    TextField("Gender", text: $gender)
                                }
        
                                TextField("Location", text: $location)
                                TextField("Instagram Account", text: $instagram_handle)
                                } .padding(5)
                                Group {
                                    TextField("Email", text: $email)
                                        .keyboardType(.emailAddress)
                                        .autocapitalization(.none)
                                    SecureField("Password", text: $password)
                                    SecureField("Repeat Password", text: $repeatPassword)
                                }
                                .padding(5)
                                .background(Color.white)
                        
                            } else {

                            Group {
                                TextField("Email", text: $email)
                                    .keyboardType(.emailAddress)
                                    .autocapitalization(.none)
                                SecureField("Password", text: $password)
                            }
                            .padding(5)
                            .background(Color.white)
                            }

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
                                    .cornerRadius(5)

                            }
                            if wrongCredentials{
                                Text("Incorrect email address and / or password.").foregroundColor(.red).font(.system(size: 12)).multilineTextAlignment(.trailing)
                            }
                            
                        }
                        .padding()

                    }
//                    .navigationTitle(isLoginMode ? "Log In" : "Create Account")
                    .background(Color.white)
                }
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
                wrongCredentials = true
                self.loginStatusMessage = "Failed to login user: \(err)"
                return
            }
            wrongCredentials = false
            print("Successfully logged in as user: \(result?.user.uid ?? "")")
            GlobalUser.auth = (result?.user.uid)!
            GlobalUser.email = email
            showFeedPage.toggle()

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


