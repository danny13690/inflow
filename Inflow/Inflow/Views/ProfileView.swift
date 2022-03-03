//
//  ProfileView.swift
//  Inflow
//
//  Created by Tracy Cai on 2/1/22.
//

import SwiftUI

struct ProfileView: View {
    @State private var showingSettings = false
    @State var name = ""
    @State var age = ""
    @State var gender = ""
    @State var location = ""
    @State var instagram_handle = ""
    @State var followers = ""
    var body: some View {
            VStack{
                HStack{
                    Spacer().frame(width: 90)
                    Image("textLogo")
                        .resizable()
                        .scaledToFill()
                        .frame(width: 50,height: 50)
                    
                    Spacer().frame(width: 250)
    //                Image("bookmark")
    //                    .resizable()
    //                    .scaledToFill()
    //                    .frame(width: 30,height: 30)
                    Button {
                        showingSettings.toggle()
                    } label: {
                        Image(systemName: "pencil")
                            .resizable()
                            .scaledToFill()
                            .frame(width: 35,height: 35)
                            .foregroundColor(lightPink)
                    }
                    Spacer().frame(width: 70)
                }
                Spacer().frame(height: 50)
                
                Image(systemName: "person.crop.circle")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 150,height: 150)
                    .foregroundColor(lightPink)
                
                if (showingSettings){
                Group {
                TextField("Name", text: $name)
                HStack{
                    TextField("Age", text: $age)
                    TextField("Gender", text: $gender)
                }

                TextField("Location", text: $location)
                TextField("Instagram Account", text: $instagram_handle)
                TextField("Number of followers", text: $followers)
                } .padding(10)
                    Spacer()
                } else {
            
                Text("Sample User").font(Font.custom("Avenir", size: 30))
                Spacer().frame(height: 50)
                Group {
                    Text("age: 23").font(Font.custom("Avenir", size: 25))
                    Text("gender: female").font(Font.custom("Avenir", size: 25))
                    Text("location: SF, CA").font(Font.custom("Avenir", size: 25))
                    Text("instagram: theInflow").font(Font.custom("Avenir", size: 25))
                    Text("number of follower: 1897").font(Font.custom("Avenir", size: 25))
                    Spacer()
                }
        }
        }
    }
}
struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}
