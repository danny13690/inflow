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
//                HStack{
//                    Spacer().frame(width: 90)
//                    Image("textLogo")
//                        .resizable()
//                        .scaledToFill()
//                        .frame(width: 50,height: 50)
//
//                    Spacer().frame(width: 250)
//    //                Image("bookmark")
//    //                    .resizable()
//    //                    .scaledToFill()
//    //                    .frame(width: 30,height: 30)
//                    Button {
//                        showingSettings.toggle()
//                    } label: {
//                        Image(systemName: "pencil")
//                            .resizable()
//                            .scaledToFill()
//                            .frame(width: 35,height: 35)
//                            .foregroundColor(lightPink)
//                    }
//                    Spacer().frame(width: 70)
//                }
////                Spacer().frame(height: 50)
                VStack{
                HStack(alignment: .center){
                    Spacer()
                Image(systemName: "person.crop.circle")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 150,height: 150)
                    .foregroundColor(Color.white)
                    .background(lightPink)
                    Spacer()
                }
                    Spacer().frame(height: 10)
                }.background(lightPink)
                
                if (showingSettings){
                Group {
                    Divider()
                    HStack{
                        Spacer()
                        Text("Name").font(Font.custom("Avenir", size: 18))
                        TextField("Name", text: $name)
                    }
                    Divider()
                HStack{
                    Spacer()
                    Text("Age").font(Font.custom("Avenir", size: 18))
                    TextField("Age", text: $age)
                    Text("Gender").font(Font.custom("Avenir", size: 18))
                    TextField("Gender", text: $gender)
                }
                    Divider()
                HStack{
                    Spacer()
                    Text("location").font(Font.custom("Avenir", size: 18))
                    TextField("Location", text: $location)
                }
                    Divider()
                HStack{
                    Spacer()
                    Text("Instagram Account").font(Font.custom("Avenir", size: 18))
                    TextField("Instagram Account", text: $instagram_handle)
          
                }
                Divider()
                VStack{
                    HStack{
                        Spacer()
                        Text("Number of Followers").font(Font.custom("Avenir", size: 18))
                        TextField("Number of Followers", text: $followers)
                    }
                    Divider()
                }
                    
                }
//                Divider()
                HStack{
                    Spacer()
                    Button {
                        showingSettings = false
                    } label: {
                        Text("CANCEL     ").font(Font.custom("Avenir", size: 18)).foregroundColor(lightPink)
                    }
                    Spacer()
//                    Spacer()
                    Button {
                        showingSettings = false
                    } label: {
                        Text("DONE").font(Font.custom("Avenir", size: 18)).foregroundColor(lightPink)
                    }
                    Spacer()
                }
                Spacer()
                } else {
                    VStack(alignment: .leading){
                        Text("Name").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                            .padding([.top], 5)
                        Text("Tracy C").padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                        Text("Age").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        Text("20").padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                        Text("Gender").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        Text("Female").padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                    }
                    VStack(alignment: .leading){
                        Text("Location").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        Text("Stanford, CA").padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                        Text("Instagram Account").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        Text("ccai_tracy").padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                    }
                    VStack(alignment: .leading){
                        Text("Number of followers").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        Text("253").padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                    }
                    VStack(alignment: .center){
                        Button {
                            showingSettings = true
                        } label: {
                            Text("Edit Profile").font(Font.custom("Avenir", size: 18)).foregroundColor(lightPink)
                                .padding()
//                                .frame(minWidth: 0, maxWidth: .infinity)
                                .overlay(
                                    RoundedRectangle(cornerRadius: 10)
                                        .stroke(lightPink, lineWidth: 1))
                        }
                    }
                    Spacer()
//                    }
//                    }
//                Text("Sample User").font(Font.custom("Avenir", size: 30))
//                Spacer().frame(height: 50)
//                    Group{
//                    Text("Age: 23").font(Font.custom("Avenir", size: 25))
//                    Text("Gender: female").font(Font.custom("Avenir", size: 25))
//                    Text("Location: SF, CA").font(Font.custom("Avenir", size: 25))
//                    Text("Instagram: theInflow").font(Font.custom("Avenir", size: 25))
//                    Text("Number of followers: 1897").font(Font.custom("Avenir", size: 25))
//                    Spacer()
//                }
        }
        }
    }
}
struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}
