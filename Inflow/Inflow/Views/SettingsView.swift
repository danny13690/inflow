//
//  SettingsView.swift
//  Inflow
//
//  Created by Tracy Cai on 2/7/22.
//

import SwiftUI

struct SettingsView: View {
    @State private var showingProfile = false
    var body: some View {
        if showingProfile {
            ProfileView()
        } else {
            VStack{
                HStack{
                    Spacer().frame(width: 20)
                    Button {
                        showingProfile.toggle()
                    } label: {
                        Image(systemName: "chevron.left")
                            .foregroundColor(lightPink)
                            .font(.system(size: 32))
                        
                    }
                    Spacer()
                }
                Divider()
                Spacer()
            
            }
        }
    }
}

struct SettingsView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView()
    }
}
