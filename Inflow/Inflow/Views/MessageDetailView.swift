//
//  MessageDetailView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/30/22.
//

import SwiftUI

struct MessageDetailView: View {
    @State private var search: String = ""
    @State private var showingBookmarks = false
    @State private var showingChat = false
    @State private var showingProfile = false
    @State private var showingHome = false
    var body: some View {
        VStack{
            HStack{
                Spacer().frame(width: 90)
                Image("textLogo")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 50,height: 50)
                Spacer().frame(width: 250)
                Image(systemName:"bookmark")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 25,height: 25)
                    .foregroundColor(lightPink)
                Spacer().frame(width: 70)
            }
            Divider().foregroundColor(.gray)
            Spacer().frame(height: 10)
            HStack{
                Button {
                    print("Edit button was tapped")
                } label: {
                    Image(systemName: "chevron.left")
                        .foregroundColor(lightPink)
                        .font(.system(size: 32))
                    
                }
                Spacer().frame(width: 330)
            }
            Spacer().frame(height: 10)
            Divider().foregroundColor(.gray)
            Spacer()
            Divider().foregroundColor(.gray)
            Spacer().frame(height: 12)
//            HStack{
//                Button {
//                    print("Edit button was tapped")
//                } label: {
//                    Image(systemName: "house")
//                        .foregroundColor(lightGray)
//                        .font(.system(size: 32))
//
//                }
//                Spacer().frame(width: 45)
//                Button {
//                    print("Edit button was tapped")
//                } label: {
//                    Image(systemName: "magnifyingglass")
//                        .foregroundColor(lightGray)
//                        .font(.system(size: 32))
//                }
//                Spacer().frame(width: 45)
//                Button {
//                    print("Edit button was tapped")
//                } label: {
//                    Image(systemName: "ellipsis.bubble")
//                        .foregroundColor(lightPink)
//                        .font(.system(size: 32))
//                }
//                Spacer().frame(width: 45)
//                Button {
//                    print("Edit button was tapped")
//                } label: {
//                    Image(systemName: "person.circle")
//                        .foregroundColor(lightGray)
//                        .font(.system(size: 32))
//                }
//            }
        }
    }
}

struct MessageDetailView_Previews: PreviewProvider {
    static var previews: some View {
        MessageDetailView()
    }
}
