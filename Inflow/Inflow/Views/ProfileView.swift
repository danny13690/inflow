//
//  ProfileView.swift
//  Inflow
//
//  Created by Tracy Cai on 2/1/22.
//

import SwiftUI

struct ProfileView: View {
    @State private var showingSettings = false
    @State var name = "Tracy C"
    @State var age = "23"
    @State var gender = "Female"
    @State var location = "Stanford, CA"
    @State var instagram_handle = "ccai_tracy"
    @State var followers = "253"
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
                VStack(alignment: .leading){
                HStack{
                    Spacer()
                    Image("logo_2")
                        .resizable()
                        .scaledToFill()
                        .frame(width: 50,height: 50)
                    Spacer()
                }
                    Spacer().frame(height: 10)
                HStack(alignment: .center){
                    Spacer()
                Image("sample_user")
                    
                    .resizable()
                    .scaledToFill()
                    .frame(width: 150,height: 150)
                    .clipShape(Circle())
                                .shadow(radius: 10)
                                .overlay(Circle().stroke(Color.white, lineWidth: 1))
                    .background(lightPink)
                    Spacer()
                }
                    Spacer().frame(height: 25)
                }.background(lightPink)
                
                ScrollView{
                if (showingSettings){
//                Group {
//                    Divider()
//                    HStack{
//                        Spacer()
//                        Text("Name").font(Font.custom("Avenir", size: 18))
//                        TextField("Name", text: $name)
//                    }
//                    Divider()
//                HStack{
//                    Spacer()
//                    Text("Age").font(Font.custom("Avenir", size: 18))
//                    TextField("Age", text: $age)
//                    Text("Gender").font(Font.custom("Avenir", size: 18))
//                    TextField("Gender", text: $gender)
//                }
//                    Divider()
//                HStack{
//                    Spacer()
//                    Text("location").font(Font.custom("Avenir", size: 18))
//                    TextField("Location", text: $location)
//                }
//                    Divider()
//                HStack{
//                    Spacer()
//                    Text("Instagram Account").font(Font.custom("Avenir", size: 18))
//                    TextField("Instagram Account", text: $instagram_handle)
//
//                }
//                Divider()
//                VStack{
//                    HStack{
//                        Spacer()
//                        Text("Number of Followers").font(Font.custom("Avenir", size: 18))
//                        TextField("Number of Followers", text: $followers)
//                    }
//                    Divider()
//                }
//
//                }
//                Divider()

        
                    VStack(alignment: .leading){
                        Text("Name").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                            .padding([.top], 20)
                        TextField("Tracy C", text: $name).padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                        Text("Age").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        TextField("23", text: $age).padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                        Text("Gender").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        TextField("Female", text: $gender).padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                    }
                    VStack(alignment: .leading){
                        Text("Location").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        TextField("Stanford, CA", text: $location).padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                        Text("Instagram Account").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        TextField("ccai_tracy", text: $instagram_handle).padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                    }
                    VStack(alignment: .leading){
                        Text("Number of followers").foregroundColor(lightGray).padding([.leading, .trailing], 50)
                        TextField("253", text: $followers).padding([.top, .bottom], 1)
                            .padding([.leading], 50)
                        Divider()
                    }

                    
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
                            .padding([.top], 20)
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
