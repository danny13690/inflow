//
//  FeedLoader.swift
//  Inflow
//
//  Created by Danny Du on 2/19/22.
//

import Combine

class FeedViewModel: ObservableObject {
    @Published var campaignRepository = CampaignRepository()
    @Published var campaigns: [Campaign] = []
    
    private var cancellables: Set<AnyCancellable> = []
    
    init() {
        campaignRepository.$campaigns
            .assign(to: \.campaigns, on: self)
            .store(in: &cancellables)
    }
    
    func add(_ campaign: Campaign) {
        campaignRepository.add(campaign)
    }
}
