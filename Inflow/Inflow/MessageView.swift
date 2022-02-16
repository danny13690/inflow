//
//  MessageView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/30/22.
//https://www.letsbuildthatapp.com/course_video?id=7185

import SwiftUI

struct MessageView: View {
    @State private var search: String = ""
    @State private var showingBookmarks = false
    @State private var showingSearch = false
    @State private var showingHome = false
    @State private var showingProfile = false
    @State var shouldShowLogOutOptions = false


    var body: some View {
        NavigationView {

            VStack {
                messagesView
            }
            .overlay(
                newMessageButton, alignment: .bottom)
            .navigationBarHidden(true)
        }
    }

    private var messagesView: some View {
        ScrollView {
            ForEach(0..<10, id: \.self) { num in
                VStack {
                    HStack(spacing: 16) {
                        Image(systemName: "person.fill")
                            .font(.system(size: 32))
                            .padding(8)
                            .foregroundColor(lightPink)
//                            .overlay(RoundedRectangle(cornerRadius: 44)
//                                        .stroke(lightPink)
//                            )


                        VStack(alignment: .leading) {
                            Text("Username")
                                .font(.system(size: 16, weight: .bold))
                                .foregroundColor(lightGray)
                            Text("Message sent to user")
                                .font(.system(size: 14))
                                .foregroundColor(Color(.lightGray))
                        }
                        Spacer()

                        Text("22d")
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundColor(lightGray)
                    }
                    Divider()
                        .padding(.vertical, 8)
                }.padding(.horizontal)

            }.padding(.bottom, 50)
        }
    }

    private var newMessageButton: some View {
        Button {

        } label: {
            HStack {
                Spacer()
                Text("+ New Message")
                    .font(.system(size: 16, weight: .bold))
                Spacer()
            }
            .foregroundColor(.white)
            .padding(.vertical)
                .background(lightPink)
                .cornerRadius(32)
                .padding(.horizontal)
                .shadow(radius: 15)
        }
    }
//    var body: some View {
////        if showingBookmarks {
////            BookmarksView()
////        } else {
//            VStack{
//                HStack{
//                    Spacer().frame(width: 90)
//                    Image("textLogo")
//                        .resizable()
//                        .scaledToFill()
//                        .frame(width: 50,height: 50)
//                    Spacer().frame(width: 250)
//                    Button {
//                        showingBookmarks = !showingBookmarks
//                    } label: {
//                        Image(systemName: "bookmark")
//                            .resizable()
//                            .scaledToFill()
//                            .frame(width: 25,height: 25)
//                            .foregroundColor(lightPink)
//                    }
//                    Spacer().frame(width: 70)
//                }
//    //            Divider().foregroundColor(.gray)
//                HStack{
//                    Image(systemName: "magnifyingglass")
//                        .foregroundColor(lightGray)
//                        .font(.system(size: 20))
//                    TextField(
//                            "Search",
//                            text: $search
//                        ).textFieldStyle(.roundedBorder)
//                            .frame(width: 320, height: 40,alignment: .center)
//                            .cornerRadius(10)
//                            .padding(.bottom, 10)
//                    Spacer().frame(width: 10)
//                }
//                Spacer()
//                Divider().foregroundColor(.gray)
//                Spacer().frame(height: 12)
//    //            HStack{
//    //                Button {
//    //                    print("Edit button was tapped")
//    //                } label: {
//    //                    Image(systemName: "house")
//    //                        .foregroundColor(lightGray)
//    //                        .font(.system(size: 32))
//    //
//    //                }
//    //                Spacer().frame(width: 45)
//    //                Button {
//    //                    print("Edit button was tapped")
//    //                } label: {
//    //                    Image(systemName: "magnifyingglass")
//    //                        .foregroundColor(lightGray)
//    //                        .font(.system(size: 32))
//    //                }
//    //                Spacer().frame(width: 45)
//    //                Button {
//    //                    print("Edit button was tapped")
//    //                } label: {
//    //                    Image(systemName: "ellipsis.bubble")
//    //                        .foregroundColor(lightPink)
//    //                        .font(.system(size: 32))
//    //                }
//    //                Spacer().frame(width: 45)
//    //                Button {
//    //                    print("Edit button was tapped")
//    //                } label: {
//    //                    Image(systemName: "person.circle")
//    //                        .foregroundColor(lightGray)
//    //                        .font(.system(size: 32))
//    //                }
//    //            }
////            }
//        }
//    }
        
}

struct MessageView_Previews: PreviewProvider {
    static var previews: some View {
        MessageView()
    }
}
