//
//  CampaignRepository.swift
//  Inflow
//
//  Created by Danny Du on 2/19/22.
//

import Foundation
import FirebaseFirestore
import Combine

final class CampaignRepository {
    private let path = "campaigns"
    private let store = Firestore.firestore()
    @Published var campaigns: [Campaign] = []
    
    init() {
        get()
    }
    
    func get() {
        store.collection(path).addSnapshotListener { (snapshot, err) in
            if let err = err {
                print("Get campaigns failed.")
                print(err)
            } else {
                print("successfully obtained campaigns")
                print(snapshot!.documents[0].data())
                self.campaigns = snapshot?.documents.compactMap {
                    try? $0.data(as: Campaign.self)
                } ?? []
            }
        }
        print("hi")
        print(self.campaigns)
    }
    
    func add(_ campaign: Campaign) {
        do {
            _ = try store.collection(path).addDocument(from: campaign)
        } catch {
            fatalError("Adding campaign failed")
        }
    }
}
