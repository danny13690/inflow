//
//  CampaignRepository.swift
//  Inflow
//
//  Created by Danny Du on 2/19/22.
//

import Foundation
import FirebaseFirestore
import Combine

final class CampaignRepository: ObservableObject {
    private let path = "campaigns"
    @Published var campaigns: [Campaign] = []
    
    init() {
        get()
    }
    
    func get() {
        FirebaseManager.shared.store.collection(path).addSnapshotListener { (snapshot, err) in
            if let err = err {
                print("Get campaigns failed.")
                print(err)
            } else {
                print("successfully obtained \(snapshot!.documents.count) campaigns")
                self.campaigns = snapshot?.documents.compactMap {
                    try? $0.data(as: Campaign.self)
                } ?? []
                print("successfully saved \(self.campaigns.count) campaigns")
            }
        }
    }
    
    func add(_ campaign: Campaign) {
        do {
            _ = try FirebaseManager.shared.store.collection(path).addDocument(from: campaign)
        } catch {
            fatalError("Adding campaign failed")
        }
    }
}
