//
//  RegisterView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/27/22.
//

import SwiftUI

struct RegisterView: View {
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var showingFeedView = false

    var body: some View {
        if showingFeedView {
            SwitchView()
        } else {
            ZStack{
                VStack{
                    Image("login")
                        .resizable()
                        .scaledToFill()
                        .frame(width: 250,height: 250)
                        .aspectRatio(2, contentMode: .fit)
                    
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
                        .padding(.bottom, 10)
                    TextField(
                        "Repeat Password",
                        text: $password
                    ).textFieldStyle(.roundedBorder)
                        .frame(width: 250, height: 40,alignment: .center)
                        .cornerRadius(10)
                    HStack{
                        Spacer().frame(width: 55)
                        Text("Password must be at least 8 characters!").foregroundColor(lightPink)
                            .font(.system(size: 10))
                    }
                    
                    Button(action: {showingFeedView.toggle()}) {
                        Text("Sign up")
                        .foregroundColor(.white)
                        .font(.headline)
                        .frame(width: 250, height: 40, alignment: .center)
                    }.background(lightPink)
                        .cornerRadius(10)
                    

                    Spacer().frame(height: 120)
                    
                }
            }
        }
    }
}

struct RegisterView_Previews: PreviewProvider {
    static var previews: some View {
        RegisterView()
    }
}
