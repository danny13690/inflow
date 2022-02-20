//
//  LandingView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/27/22.
//

import SwiftUI
import Firebase


struct LandingView: View {
    @ObservedObject var feedViewModel: FeedViewModel
    
    @State private var showingBookmarks = false
    @State private var showingSearch = false
    @State private var showingChat = false
    @State private var showingProfile = false
    
    var body: some View {
        
        
        VStack{
            
            //header bar
            HStack{
                Spacer().frame(width: 90)
                Image("textLogo")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 50,height: 50)

                Spacer().frame(width: 250)
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
            
            //feed content
            ScrollView {
                VStack {
                    List(feedViewModel.campaigns) {card in
                        Text("Campaign: Danny's")
                            .font(.custom("Avenir", size: 24))
                            .foregroundColor(Color.black)
                        Text("Compensation: $1000000000")
                            .font(.custom("Avenir", size: 18))
                            .foregroundColor(Color.black)
                        Text("Deliberables: take photos")
                            .font(.custom("Avenir", size: 18))
                            .foregroundColor(Color.black)
                        Image("sampleCampaign")
                            .resizable()
                            .scaledToFill()
                    }
                }
            }
        }
    }
}

struct LandingView_Previews: PreviewProvider {
    static var previews: some View {
        LandingView(feedViewModel: FeedViewModel())
    }
}
