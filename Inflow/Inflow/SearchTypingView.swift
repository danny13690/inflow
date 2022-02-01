//
//  SearchTypingView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/30/22.
//

import SwiftUI

struct SearchTypingView: View {
    @State private var search: String = ""
    var body: some View {
        VStack{
//            HStack{
//                Spacer().frame(width: 90)
//                Image("textLogo")
//                    .resizable()
//                    .scaledToFill()
//                    .frame(width: 50,height: 50)
//                Spacer().frame(width: 250)
//                Image("bookmark")
//                    .resizable()
//                    .scaledToFill()
//                    .frame(width: 30,height: 30)
//                Spacer().frame(width: 70)
//            }
//            Divider().foregroundColor(.gray)
            Spacer().frame(height: 30)
            HStack{
                Image(systemName: "magnifyingglass")
                    .foregroundColor(lightGray)
                    .font(.system(size: 20))
                TextField(
                        "Search",
                        text: $search
                    ).textFieldStyle(.roundedBorder)
                        .frame(width: 250, height: 40,alignment: .center)
                        .cornerRadius(10)
                        .padding(.bottom, 10)
                Button {
                    print("Edit button was tapped")
                } label: {
                    Text("Cancel").font(Font.custom("Avenir", size: 15))
                        .foregroundColor(lightPink)
                }
//                Spacer().frame(width: 10)
            }
            HStack{
                Text("Recent Searches").font(Font.custom("Avenir", size: 20)).foregroundColor(lightPink)
                Spacer().frame(width: 150)
                Button {
                    print("Edit button was tapped")
                } label: {
                    Text("Clear").font(Font.custom("Avenir", size: 15))
                        .foregroundColor(lightPink)
                }
                
            }

            Spacer().frame(height: 670)
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
//                        .foregroundColor(lightPink)
//                        .font(.system(size: 32))
//                }
//                Spacer().frame(width: 45)
//                Button {
//                    print("Edit button was tapped")
//                } label: {
//                    Image(systemName: "ellipsis.bubble")
//                        .foregroundColor(lightGray)
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

struct SearchTypingView_Previews: PreviewProvider {
    static var previews: some View {
        SearchTypingView()
    }
}
