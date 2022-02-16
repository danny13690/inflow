//
//  LandingView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/27/22.
//

import SwiftUI
import Firebase
//import FirebaseDatabase



struct LandingView: View {
    @State private var showingBookmarks = false
    @State private var showingSearch = false
    @State private var showingChat = false
    @State private var showingProfile = false
//    let document = FirebaseManager.shared.firestore
//        .collection("campaigns")

    
    var body: some View {
//        if showingBookmarks {
//            BookmarksView()
//        } else {

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
                        showingBookmarks = !showingBookmarks
                    } label: {
                        Image(systemName: "bookmark")
                            .resizable()
                            .scaledToFill()
                            .frame(width: 25,height: 25)
                            .foregroundColor(lightPink)
                    }
                    Spacer().frame(width: 70)
                }
                Divider().foregroundColor(.gray)
//                Spacer().frame(height: 700)
                Spacer()
                Divider().foregroundColor(.gray)
                
            }
//        }

    }
}

struct LandingView_Previews: PreviewProvider {
    static var previews: some View {
        LandingView()
    }
}
