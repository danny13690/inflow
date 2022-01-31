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
    @State private var email: String = ""
    @State private var password: String = ""
    var body: some View {
        ZStack{
            VStack{
                Image("login")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 250,height: 250)

                TextField(
                    "Email",
                    text: $email
                ).textFieldStyle(.roundedBorder)
                    .frame(width: 250, height: 40,alignment: .center)
                    .cornerRadius(10)
                    .padding(.bottom, 10)

                TextField(
                    "Password",
                    text: $password
                ).textFieldStyle(.roundedBorder)
                    .frame(width: 250, height: 40,alignment: .center)
                    .cornerRadius(10)

                HStack{
                    Spacer().frame(width: 110)
                    Text("Forget password?").foregroundColor(lightPink)
                        .bold()
                }

                Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/) {
                    Text("Log In")
                    .foregroundColor(.white)
                    .font(.headline)
                    .frame(width: 250, height: 40, alignment: .center)
                }.background(lightPink)
                    .cornerRadius(10)

                HStack{
                    Spacer().frame(width: 85)
                    Text("New here?").foregroundColor(lightPink)
                    Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/) {
                        Text("Register?")
                        .foregroundColor(lightPink)
                        .font(.headline)
                        .frame(width: 80, height: 40, alignment: .center)
                    }
                        .cornerRadius(10)
                }.frame(width: 500, height: 40, alignment: .center)
                Spacer().frame(height: 120)
                HStack{
                    Spacer().frame(width: 20)
                    Button {
                    } label: {
                        Image("Apple")
                            .resizable()
                            .scaledToFill()
                            .frame(width: 50,height: 50)
                            .cornerRadius(15)
                    }
                    Spacer().frame(width: 75)
                    Button {
                    } label:{
                        Image("Facebook")
                            .resizable()
                            .scaledToFill()
                            .frame(width: 50,height: 50)
                            .cornerRadius(15)
                    }
                    Spacer().frame(width: 55)
                    Button {
                    } label: {
                        Image("Google")
                            .resizable()
                            .scaledToFill()
                            .frame(width:70,height: 70)
                            .cornerRadius(15)
                    }
                }
                
            }
            
        }
    }
    
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}


