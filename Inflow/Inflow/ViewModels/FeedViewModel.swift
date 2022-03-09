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
    @Published var feed: [Campaign] = []
    @Published var saved: [Campaign] = []
    @Published var rejected: [Campaign] = []
    @Published var applied: [Campaign] = []
    @Published var completed: [Campaign] = []
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
        campaignRepository.$feed
            .assign(to: \.feed, on: self)
            .store(in: &imageCancellables)
        campaignRepository.$saved
            .assign(to: \.saved, on: self)
            .store(in: &imageCancellables)
        campaignRepository.$rejected
            .assign(to: \.rejected, on: self)
            .store(in: &imageCancellables)
        campaignRepository.$applied
            .assign(to: \.applied, on: self)
            .store(in: &imageCancellables)
        campaignRepository.$completed
            .assign(to: \.completed, on: self)
            .store(in: &imageCancellables)
    }
    
    func printCampaigns() {
        print("Repository has \(campaignRepository.campaigns.count) campaigns")
        print("MV has \(self.campaigns.count) campaigns")
        for campaign in campaigns {
            print(campaign.id)
        }
        campaignRepository.getImages()
    }

    func add(_ campaign: Campaign) {
        campaignRepository.add(campaign)
    }
}
