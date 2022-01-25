//
//  ContentView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/21/22.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack{
                Image("logo")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 200, height: 200)
                Text("InFlow")
                    .bold()
                    .font(.largeTitle)
                Spacer().frame(height: 250)
                NavigationLink(destination: JobBoard()) {
                    Text("Log in")
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
