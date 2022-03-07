//
//  FeedLoader.swift
//  Inflow
//
//  Created by Danny Du on 2/19/22.
//

import Combine
import SwiftUI

final class FeedViewModel: ObservableObject {
    @Published var campaignRepository = CampaignRepository()
    @Published var campaigns: [Campaign] = []
    @Published var images: Dictionary<String, UIImage> = [:]
    
    private var cancellables: Set<AnyCancellable> = []
    private var imageCancellables: Set<AnyCancellable> = []
    
    init() {
        campaignRepository.$campaigns
            .assign(to: \.campaigns, on: self)
            .store(in: &cancellables)
        campaignRepository.$images
            .assign(to: \.images, on: self)
            .store(in: &imageCancellables)
    }
    
    func printCampaigns() {
        print("Repository has \(campaignRepository.campaigns.count) campaigns")
        print("MV has \(self.campaigns.count) campaigns")
    }
    
//    func reload() async {
//        await FirebaseManager.shared.store.collection("campaigns").addSnapshotListener { (snapshot, err) in
//            if let err = err {
//                print("Get campaigns failed.")
//                print(err)
//            } else {
//                print("successfully obtained campaigns")
//                print(snapshot!.documents[0].data())
//                self.campaigns = snapshot?.documents.compactMap {
//                    try? $0.data(as: Campaign.self)
//                } ?? []
//            }
//        }
//    }
//
    func add(_ campaign: Campaign) {
        campaignRepository.add(campaign)
    }
}
