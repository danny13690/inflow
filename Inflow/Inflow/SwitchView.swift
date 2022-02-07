//
//  SwitchView.swift
//  Inflow
//
//  Created by Tracy Cai on 2/6/22.
//

import SwiftUI

struct SwitchView: View {
    var body: some View {
        TabView{
            LandingView()
                .tabItem(){
                    Image(systemName:"house").renderingMode(.template)
                    Text("Home")
                }
            SearchView()
                .tabItem(){
                    Image(systemName:"magnifyingglass").renderingMode(.template)
                    Text("Search")
                }
            MessageView()
                .tabItem(){
                    Image(systemName:"ellipsis.bubble")
                        .renderingMode(.template)
                    Text("Chat")
                }
            ProfileView()
                .tabItem(){
                    Image(systemName:"ellipsis.bubble")
                        .renderingMode(.template)
                    Text("Profile")
                }
        }.accentColor(lightPink)
    }
}

struct SwitchView_Previews: PreviewProvider {
    static var previews: some View {
        SwitchView()
    }
}
