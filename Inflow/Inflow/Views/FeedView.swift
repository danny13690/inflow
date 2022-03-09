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
                        .frame(width: 17,height: 17)
                        .foregroundColor(lightPink)
                }
                Spacer().frame(width: 70)
            }
            
            //feed content
            VStack {
                List(feedViewModel.campaigns) {campaign in
                    VStack(alignment: .leading){
                    HStack{
                        Text(" ")
                        Image(systemName: "person.crop.circle")
                            .resizable()
                            .scaledToFill()
                            .frame(width:30, height: 30)
                            .foregroundColor(lightPink)
                        Text(" ")
                        Text("Covet").font(.custom("Avenir", size: 14))
                            .foregroundColor(Color.black)
                    }
                        Image(uiImage: self.feedViewModel.images[campaign.id!] ?? UIImage(imageLiteralResourceName: "sampleCampaign"))
                        .resizable()
                        .scaledToFill()
                    Text(campaign.name).font(.custom("Avenir", size: 14))
                        .foregroundColor(Color.black)
                    Text("")
                    HStack(alignment: .top){
                    VStack(alignment: .leading){
                    Text("Deliberables")
                        .font(.custom("Avenir", size: 12))
                        .foregroundColor(Color.black)
                    Text("")
                    ForEach(0..<campaign.deliverables.count) { i in
                        Text(" - \(campaign.deliverables[i])")
                            .font(.custom("Avenir", size: 12))
                            .foregroundColor(Color.black)
                    }
                    }
                    VStack(alignment: .leading){
                    Text("Compensation")
                        .font(.custom("Avenir", size: 12))
                        .foregroundColor(Color.black)
                    Text("")
                    ForEach(0..<campaign.compensation.count) { i in
                        Text(" - \(campaign.compensation[i])")
                            .font(.custom("Avenir", size: 12))
                            .foregroundColor(Color.black)
                    }
                    }
                    }
                        HStack(alignment:.center){
                            Spacer()
                            Button {
//                                showingBookmarks = !showingBookmarks
                            } label: {
                                Image(systemName: "xmark")
                                    .resizable()
                                    .scaledToFill()
                                    .frame(width: 22,height: 22)
                                    .foregroundColor(lightGray)
                            }.buttonStyle(PlainButtonStyle())
                            Spacer()
                            Button {
//                                showingBookmarks = !showingBookmarks
                            } label: {
                                Image(systemName: "bookmark")
                                    .resizable()
                                    .scaledToFill()
                                    .frame(width: 17,height: 17)
                                    .foregroundColor(lightPink)
                            }.buttonStyle(PlainButtonStyle())
                            Spacer()
                            //ellipsis.circle
                            Button {
//                                showingBookmarks = !showingBookmarks
                            } label: {
                                Image(systemName: "paperplane")
                                    .resizable()
                                    .scaledToFill()
                                    .frame(width: 30,height:30)
                                    .foregroundColor(lightPink)
                            }.buttonStyle(PlainButtonStyle())
                            Spacer()
                        }
                    }.padding()
                        .overlay(
                            RoundedRectangle(cornerRadius: 16)
                                .stroke(lightGray, lineWidth: 1)
                        )
                       
//                        }.refreshable {
//                            print("refreshing")
//                            await feedViewModel.reload()
                }.listStyle(PlainListStyle())
//                Button("print") {
//                    feedViewModel.printCampaigns()
//                }
//                Button("fuck you") {
//                    let test_filter = Filters(follower: [1,2], engagement: [0.1,0.2], locations: ["Beijing","Boston"])
//                    let campaign = Campaign(name: "test", description: "test description", deliverables: ["x", "y"], compensation: ["z1", "z2"], hashtags: ["#fuck", "this"], signUpPeriod: ["monday", "tuesday"], campaignPeriod: ["wed", "fri"], industry: "weed", filters: test_filter)
//                    feedViewModel.add(campaign)
//                }
            }
        }.background(Color.white)
    }
}

struct FeedView_Previews: PreviewProvider {
    static var previews: some View {
        FeedView(feedViewModel: FeedViewModel())
    }
}
