//
//  FeedView.swift
//  Inflow
//
//  Created by Tracy Cai on 1/27/22.
//

import SwiftUI
import Firebase


struct FeedView: View {
    @ObservedObject var feedViewModel: FeedViewModel
    
    @State private var showingBookmarks = false
    @State private var showingSearch = false
    @State private var showingChat = false
    @State private var showingProfile = false
    
//    private var scrollWidth
//
//    init() {
//        self.scrollWidth = .infinity
//    }
    
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
            if (feedViewModel.campaigns.isEmpty) {
                VStack{
                    Text("Sorry, no campaigns available!")
                        .font(.custom("Avenir", size: 24))
                        .foregroundColor(Color.black)
                }
            } else {
                ScrollView(.vertical) {
                    VStack {
                        List(feedViewModel.campaigns) {campaign in
                            Text(campaign.name).font(.custom("Avenir", size: 24))
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
//                        }.refreshable {
//                            print("refreshing")
//                            await feedViewModel.reload()
                        }
                        Button("print") {
                            feedViewModel.printCampaigns()
                        }
                        Button("fuck you") {
                            let test_filter = Filters(follower: [1,2], engagement: [0.1,0.2], locations: ["Beijing","Boston"])
                            let campaign = Campaign(name: "test", description: "test description", deliverables: ["x", "y"], compensation: ["z1", "z2"], hashtags: ["#fuck", "this"], signUpPeriod: ["monday", "tuesday"], campaignPeriod: ["wed", "fri"], industry: "weed", filters: test_filter)
                            feedViewModel.add(campaign)
                        }
                    }
                }
            }
        }
    }
}

struct FeedView_Previews: PreviewProvider {
    static var previews: some View {
        FeedView(feedViewModel: FeedViewModel())
    }
}
