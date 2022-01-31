//
//  SearchView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/30/22.
//

import SwiftUI

struct SearchView: View {
    @State private var search: String = ""
    var body: some View {
        VStack{
            HStack{
                Spacer().frame(width: 90)
                Image("textLogo")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 50,height: 50)
                Spacer().frame(width: 250)
                Image("bookmark")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 30,height: 30)
                Spacer().frame(width: 70)
            }
            Divider().foregroundColor(.gray)
            HStack{
                Image(systemName: "magnifyingglass")
                    .foregroundColor(lightGray)
                    .font(.system(size: 20))
                TextField(
                        "Search",
                        text: $search
                    ).textFieldStyle(.roundedBorder)
                        .frame(width: 320, height: 40,alignment: .center)
                        .cornerRadius(10)
                        .padding(.bottom, 10)
                Spacer().frame(width: 10)
            }
            HStack{
                Text("Trends to follow").font(Font.custom("Avenir", size: 20))
                    .foregroundColor(lightPink)
                Spacer().frame(width: 160)
            }
            Spacer().frame(height: 100)
            HStack{
                Text("Brands to follow").font(Font.custom("Avenir", size: 20))
                    .foregroundColor(lightPink)
                Spacer().frame(width: 160)
            }
            Spacer().frame(height: 480)
            Divider().foregroundColor(.gray)
            Spacer().frame(height: 12)
            HStack{
                Button {
                    print("Edit button was tapped")
                } label: {
                    Image(systemName: "house")
                        .foregroundColor(lightGray)
                        .font(.system(size: 32))

                }
                Spacer().frame(width: 45)
                Button {
                    print("Edit button was tapped")
                } label: {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(lightPink)
                        .font(.system(size: 32))
                }
                Spacer().frame(width: 45)
                Button {
                    print("Edit button was tapped")
                } label: {
                    Image(systemName: "ellipsis.bubble")
                        .foregroundColor(lightGray)
                        .font(.system(size: 32))
                }
                Spacer().frame(width: 45)
                Button {
                    print("Edit button was tapped")
                } label: {
                    Image(systemName: "person.circle")
                        .foregroundColor(lightGray)
                        .font(.system(size: 32))
                }
            }
        }
    }
}

struct SearchView_Previews: PreviewProvider {
    static var previews: some View {
        SearchView()
    }
}
